import styled from "styled-components";

export const ScoreContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 46rem;
  width: 100%;
  display: flex;
  margin-top: 6.375rem;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    span {
      background-color: ${(props) => props.theme.blue};
      width: 25px;
      height: 25px;
      border-radius: 50%;
      font-size: 0.875rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
