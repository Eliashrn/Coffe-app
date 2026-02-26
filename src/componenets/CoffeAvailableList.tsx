import styled from "styled-components";
import type { CoffeeProduct } from "../type/typeCofee";
import Card from "../reusable-ui/Card";

type CoffeAvailableListProps = {
  coffeeData: CoffeeProduct[];
};

export default function CoffeAvailableList({
  coffeeData,
}: CoffeAvailableListProps) {
  return (
    <CoffeAvailableStyled>
      {coffeeData
        .filter((coffee) => coffee.available === true)
        .map((coffee) => (
          <Card
            key={coffee.id}
            popular={coffee.popular}
            name={coffee.name}
            price={coffee.price}
            icon={coffee.votes === 0 ? "/Star.svg" : "/Star_fill.svg"}
            rating={coffee.rating}
            votes={coffee.votes}
            image={coffee.image}
            available={coffee.available}
            id={coffee.id}
          />
        ))}
    </CoffeAvailableStyled>
  );
}

const CoffeAvailableStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 24px;
  justify-content: center;
  padding: 32px;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 300px);
  }
`;
