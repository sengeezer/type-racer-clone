import styled from "styled-components";

export const Bar = styled.header`
  width: 100%;
  background: #03a9f4;
  color: #19192b;
`;

export const Toolbar = styled.div`
  width: 100%;
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4rem;
  gap: 1rem;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const GhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.75rem;
  min-height: 2.75rem;
  border: 1px solid rgba(25, 25, 43, 0.2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

export const ButtonLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0 1rem;
  border: 0;
  border-radius: 999px;
  background: #ffffff;
  color: #19192b;
  font-weight: 600;
  text-decoration: none;
`;

export const AccountLink = styled.a`
  color: inherit;
  font-weight: 600;
  text-decoration: none;
`;

export const ActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0 1rem;
  border: 0;
  border-radius: 999px;
  background: #d83532;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

export const UserName = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`;
