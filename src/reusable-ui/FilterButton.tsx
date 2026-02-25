import styled from "styled-components";

type FilterButton = {
  handleClickAll?: React.MouseEventHandler<HTMLButtonElement>;
  handleClickAvailable?: React.MouseEventHandler<HTMLButtonElement>;
  availableClicked?: string;
  allClicked?: string;
};

export default function FilterButton({
  handleClickAll,
  handleClickAvailable,
  availableClicked,
  allClicked,
}: FilterButton) {
  return (
    <FilterButtonStyled>
      <button
        className={`allproducts ${availableClicked}`}
        onClick={handleClickAll}
      >
        All Products
      </button>
      <button
        className={`availableNow ${allClicked}`}
        onClick={handleClickAvailable}
      >
        Available Now
      </button>
    </FilterButtonStyled>
  );
}

const FilterButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  .allproducts {
    margin-right: 10px;
  }

  .allproducts,
  .availableNow {
    border: none;
    padding: 7px 15px;
    border-radius: 5px;
    cursor: pointer;
    background: #4d5562;
    color: white;
  }
`;
