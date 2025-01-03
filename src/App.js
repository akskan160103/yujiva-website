import logo from './logo.svg';
import './App.css';

// Importing Components:
import Header from 'components/header/header';
import Home from 'components/home/home';

function App() {
  return (
    <div className="App">
      {/* Components */}

      <div>
        <Header />
      </div>

      <div>
        <Home />
      </div>


    </div>
  );
}

export default App;
