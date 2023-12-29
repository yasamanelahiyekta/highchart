import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center gap-4 bg-stone-200 w-screen ">
      <Header />
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
