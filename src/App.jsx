import {
  Navbar,
  Welcome,
  About,
  Transactions,
  CurrentRequest,
  Footer,
} from "./components";

function App() {
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
}

export default App;
