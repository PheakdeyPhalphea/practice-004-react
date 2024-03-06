import "./App.css";
import ProductComponent from "./components/main/ProductCard";
import FooterComponent from "./components/footer/Footer";
import NavBarComponent from "./components/navbar/Navbar";
import FeedBackComponent from "./components/main/FeedbackCard";
function App() {
  return (
    <>
      {/* header */}
      <header>
        <nav>
          <NavBarComponent></NavBarComponent>
        </nav>
      </header>
      {/* main */}
      <main className="mx-auto w-[90%] ">
        {/* product */}
        <section className="text-4xl font-medium my-5 text-[#0E7490] text-center">
          <p>Product</p>
        </section>
        <section className=" my-10 gap-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4">
          <ProductComponent></ProductComponent>
          <ProductComponent></ProductComponent>
          <ProductComponent></ProductComponent>
          <ProductComponent></ProductComponent>
        </section>
        {/* feedback */}
        <section className="text-4xl font-medium my-5 text-[#0E7490] text-center">
          <p>FeedBack</p>
        </section>
        <section className="my-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <FeedBackComponent></FeedBackComponent>
          <FeedBackComponent></FeedBackComponent>
          <FeedBackComponent></FeedBackComponent>
          <FeedBackComponent></FeedBackComponent>
        </section>
      </main>
      {/* footer */}
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </>
  );
}

export default App;
