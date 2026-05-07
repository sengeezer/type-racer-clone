import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 40rem;
  margin: 4rem auto 0;
  padding: 0 1rem;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
`;

export const Subtitle = styled.p`
  margin: 0;
  line-height: 1.6;
`;

export const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 0 auto;
  padding: 0.875rem 1.5rem;
  border-radius: 999px;
  background: #03a9f4;
  color: #19192b;
  font-weight: 700;
  text-decoration: none;
`;
