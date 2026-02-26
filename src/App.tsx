import styled from "styled-components";
import Collection from "./componenets/Collection";

function App() {
  return (
    <AppStyled>
      <Collection />
    </AppStyled>
  );
}

export default App;
const AppStyled = styled.div`
  background: url("./bg-cafe-lg.jpg") #111315 no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 210px;
  height: 100vh;
  width: 100vw;

  @media screen and (max-width: 1024px) {
    background: url("./bg-cafe.jpg") #111315 no-repeat;
  }

  @media screen and (max-width: 640px) {
    padding-top: 90px;
    background: url("./bg-cafe-sm.jpg") #111315 no-repeat;
  }
`;
