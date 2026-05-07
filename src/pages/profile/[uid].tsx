import { useAuth } from "context/Auth";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
`;

const Profile = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!user) return <div> YOU DONT HAVE ACCESS</div>;

  return (
    <div>
      <Title>Hello, {user.displayName}!</Title>
    </div>
  );
};

export default Profile;
