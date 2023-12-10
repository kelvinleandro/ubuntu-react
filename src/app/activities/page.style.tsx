import styled from "styled-components";

export const ActivitiesWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #222222;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & input {
    border-radius: 1rem;
    padding: 0.30rem 0.30rem;
    margin-top: 1.25rem;
    margin-bottom: 2rem;
    width: 20%;
    outline-color: #ea4f06;
  }


  & img {
    width: 62%;
    border-radius: 2rem;
    box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.3);
  }
`