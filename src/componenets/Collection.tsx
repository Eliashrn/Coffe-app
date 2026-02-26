import styled from "styled-components";
import Description from "./Description";
import FilterButton from "../reusable-ui/FilterButton";
import { useEffect, useState } from "react";
import CoffeAvailableList from "./CoffeAvailableList";
import { fecthData } from "../api/CoffeeDataApi";
import type { CoffeeProduct } from "../type/typeCofee";
import CoffeListAllProduct from "./CoffeListAllProduct";

export default function Collection() {
  const [coffeeData, setCoffeeData] = useState<CoffeeProduct[]>([]);
  const [availableNow, setAvailableNow] = useState<boolean>(false);
  const [allProduct, setAllProduct] = useState<boolean>(true);

  useEffect(() => {
    fecthData(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json",
    ).then(setCoffeeData);
  }, []);

  const handleClickAll = () => {
    setAllProduct(true);
    setAvailableNow(false);
  };

  const handleClickAvailable = () => {
    setAvailableNow(true);
    setAllProduct(false);
  };

  return (
    <CollectionStyles>
      <Description />
      <FilterButton
        handleClickAll={handleClickAll}
        handleClickAvailable={handleClickAvailable}
        allClicked={allProduct === true ? "is-active" : ""}
        availableClicked={availableNow === true ? "is-active" : ""}
      />

      {allProduct && <CoffeListAllProduct coffeeData={coffeeData} />}
      {availableNow && <CoffeAvailableList coffeeData={coffeeData} />}
    </CollectionStyles>
  );
}

const CollectionStyles = styled.div`
  margin: 0 auto;
  background: #1b1d1f;
  max-width: 1500px;
  border-radius: 10px;
  padding: 70px 0 20px 0;

  .is-active {
    background: #1b1d1f;
  }

  @media screen and (max-width: 1024px) {
    max-width: 960px;
  }

  @media screen and (max-width: 640px) {
    max-width: 550px;
  }
`;
