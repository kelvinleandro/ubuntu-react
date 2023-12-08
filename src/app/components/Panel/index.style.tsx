import styled from "styled-components";

export const PanelWrapper = styled.section`
  width: 100%;
  padding: 0.25rem 0.3rem;
  color: white;
  background-color: #131313;
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: default;
  }

  & p {
    padding: 0.2rem 0.5rem;
    border-radius: 10px;
  }
  
  & p:hover {
    background-color: #2a2a2a;
  }
`