import styled from "styled-components";

export const DockWrapper = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 20;
  height: 100%;
  background-color: rgba(19, 19, 19, 0.8);
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0.50rem;

  & .dock-icon {
    padding: 0.25rem;
    margin-bottom: 0.30rem;
    border-radius: 5px;
  }
  
  & .dock-icon:hover {
    background-color: #2f242b;
  }

  & .dock-icon:last-child {
    position: absolute;
    bottom: 0;
    filter: brightness(0) invert(1)
  }
`