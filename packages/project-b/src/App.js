import logo from './logo.svg';
import './App.css';
import { a, b } from '@momo/apis'
import { test } from '@mono/hooks'

function App() {
  test()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          a: {a}, b: { b }
        </p>
      </header>
    </div>
  );
}

export default App;
