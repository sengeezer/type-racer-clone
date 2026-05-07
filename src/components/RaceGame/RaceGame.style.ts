import styled from "styled-components";

export const Input = styled.input`
  margin: 25px 0;
  width: 100%;
  font-size: 1.06rem;
  padding: 5px 6px;
`;

export const Road = styled.div`
  width: 100%;
  padding: 1px;
  background: white;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 70px;
    background-color: #d83532;
    height: 100%;
    top: 0;
    right: 0;
  }
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
  font-weight: 700;
  cursor: pointer;
`;

export const Timer = styled.h2`
  margin: 1rem 0;
`;
