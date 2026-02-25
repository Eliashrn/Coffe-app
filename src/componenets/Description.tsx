import styled from "styled-components";

export default function Description() {
  return (
    <DescriptionStyled>
      <h1>Our Collection</h1>
      <br />
      <p>
        Introducing our Coffee Collection, a selection of unique coffees from
        different roast types and origins, expertly roasted in small batches and
        shipped fresh weekly.
      </p>
    </DescriptionStyled>
  );
}

const DescriptionStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2rem;
    color: #fef7ee;
  }

  p {
    text-align: center;
    margin: 0 500px;
    font-size: 1rem;
    color: #6f757c;
  }
`;
