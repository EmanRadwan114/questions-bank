import "./App.css";
import QuestionsList from "./components/QuestionsList";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="container mx-auto py-8 px-3 md:px-5 min-h-screen">
      <main className="grid grid-cols-1 md:grid-cols-4 gap-y-16 gap-x-5 md:gap-x-20">
        <div className="col-span-2">
          <SiteHeader />
        </div>
        <div className="col-span-2">
          <QuestionsList />
        </div>
      </main>
    </div>
  );
}

export default App;
