import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-3xl bg-slate-900 rounded-xl shadow border p-8 m-10">
        <SearchForm />
        <footer className="text-center mt-5">
          Coded with SheCodes React-Add-on
        </footer>
      </div>
    </div>
  );
}

export default App;
