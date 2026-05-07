import { useState } from "react";
import { firebase } from "firedb";
import styled from "styled-components";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  margin: 4rem auto 0;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0;
`;

const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0 1rem;
  border: 0;
  border-radius: 999px;
  background: #03a9f4;
  color: #19192b;
  font-weight: 700;
  cursor: pointer;
`;

const ErrorText = styled.p`
  margin: 0;
  color: #d83532;
`;

const Auth = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
      await router.push("/");
    } catch (signInError) {
      setError(
        signInError instanceof Error ? signInError.message : "Unable to sign in."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Title>Typeracer Login</Title>
      <Subtitle>Sign in with GitHub to start racing.</Subtitle>
      <ActionButton type='button' onClick={handleGithubSignIn} disabled={isLoading}>
        {isLoading ? "Signing in..." : "Continue with GitHub"}
      </ActionButton>
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  );
};

export default Auth;
