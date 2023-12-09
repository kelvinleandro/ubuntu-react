import styled from "styled-components";

export const PanelWrapper = styled.section`
  width: 100%;
  height: 5vh;
  padding: 0.2rem 0.3rem;
  color: white;
  background-color: #131313;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: default;
  }

  & p, div {
    padding: 0.1rem 0.5rem;
    border-radius: 10px;
  }
  
  & p:hover, div:hover {
    background-color: rgba(42, 42, 42, 0.5);
  }
`