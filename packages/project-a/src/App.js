import logo from './logo.svg';
import './App.css';

import { a } from '@momo/apis'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          a: { a }
        </p>
      </header>
    </div>
  );
}

export default App;
