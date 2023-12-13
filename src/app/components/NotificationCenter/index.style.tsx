import styled from "styled-components";

export const NotificationCenterWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  width: 50%;
  border-radius: 0.75rem;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(1, minmax(0, 1fr));
`

export const NotificationSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.75rem 0.5rem;
`

export const LastNotifications = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > p {
    color: #aeaeae;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export const DoNotDisturb = styled.div`
  position: absolute;
  bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.75rem 0.5rem;

  & > p {
    color: #9d9f8c;
    font-weight: 700;
  }

  & > p:first-child {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  
  & > p:last-child {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
`

export const NextEvents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  padding: 0.25rem;
  border-radius: 0.375rem;
  cursor: default;

  & p:first-child {
    color: #9d9f8c;
  }
`