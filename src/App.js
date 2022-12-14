import { Cart } from "./Cart/Cart";
import Header from "./Layout/Header";
import Meals from "./Meals/Meals";

function App() {
  return (
    <>
      <Header />
      <Cart />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
