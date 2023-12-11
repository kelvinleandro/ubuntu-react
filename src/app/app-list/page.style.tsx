import styled from "styled-components";

export const AppListWrapper = styled.section`
  gap: 1.25rem;
  background-color: #222;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & input {
    border-radius: 1rem;
    padding: 0.30rem;
    width: 20%;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
    outline-color: #ea4f06;
  }
`

export const ImageWrapper = styled.div`
  width: 30%;
  height: 20%;
  display: flex;
  gap: 0.75rem;

  & img {
    width: 50%;
    object-fit: cover;
  }
`

export const AppItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 1rem;
  cursor: default;

  &:hover {
    background-color: #363636;
  }
`