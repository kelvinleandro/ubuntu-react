import styled from "styled-components";

export const DockWrapper = styled.aside`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  height: 100%;
  background-color: rgba(42, 42, 42, 0.9);
  display: flex;
  flex-direction: column;
  padding: 0.25rem 0.50rem;

  & .dock-icon {
    padding: 0.25rem;
    margin-bottom: 0.25rem;
  }
  
  & .dock-icon:hover {
    background-color: rgba(42, 42, 42, 0.5);
  }

`