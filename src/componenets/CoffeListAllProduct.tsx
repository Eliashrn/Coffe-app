import styled from "styled-components";
import Card from "../reusable-ui/Card";
import type { CoffeeProduct } from "../type/typeCofee";

type CoffeListAllProductProps = {
  coffeeData: CoffeeProduct[];
};

export default function CoffeListAllProduct({
  coffeeData,
}: CoffeListAllProductProps) {
  return (
    <CoffeListAllProductStymed>
      {coffeeData.map((coffee) => (
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
    </CoffeListAllProductStymed>
  );
}

const CoffeListAllProductStymed = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 24px;
  justify-content: center;
  padding: 32px;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 300px);
  }
`;
