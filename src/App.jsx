import {
  Navbar,
  Welcome,
  About,
  Transactions,
  CurrentRequest,
  Footer,
} from "./components";

export const App = () => {
  return (
    <div className="gradient-bg-welcome overflow-hidden">
      <Navbar />
      <Welcome />
      <About />
      <CurrentRequest />
      {/* <Transactions /> */}
      <Footer />
    </div>
  );
};
