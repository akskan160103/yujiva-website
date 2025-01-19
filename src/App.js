import logo from './logo.svg';
import './App.css';

// Importing Components:
import Header from 'components/header/header';
import Home from 'components/home/home';
import AboutMe from 'components/about_me/about_me';
import Offerings from 'components/offerings/offerings';
import Contact from 'components/contact/contact';

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

      <div>
        <AboutMe />
      </div>

      <div>
        <Offerings /> 
      </div>

      <div>
        <Contact />
      </div>




    </div>
  );
}

export default App;
