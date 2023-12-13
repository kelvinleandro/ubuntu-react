import styled from "styled-components";

export const ControlOption = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  padding: 0.25rem;
  border-radius: 0.25rem;
  cursor: default;

  & :hover {
    background-color: #e6e6e6;
  }
`

export const ControlWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0.5rem;
  z-index: 20;
  background-color: #fff;
  width: 25%;
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`