import Header from "./components/Header";
import Hero from "./components/Hero";
import UrlForm from "./components/UrlForm";
import Footer from "./components/Footer";
import AdvancedStatistics from "./AdvancedStatistics";

const App = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
      </div>

      <main>
        <div className="bg-white">
          <Hero />
        </div>

        <div className="bg-bg-light w-full px-6">
          <UrlForm />
        </div>
        <div className="bg-bg-light py-16 px-4">
         <AdvancedStatistics/>
        </div>
      </main>

      <div className="bg-primary-dark-violet text-white">
        <Footer />
      </div>
    </>
  );
};

export default App;
