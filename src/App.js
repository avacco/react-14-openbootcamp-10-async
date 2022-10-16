import logo from './logo.svg';
import './App.css';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/*<AsyncExample/>*/}
        <ObservableExample/>
      </header>
    </div>
  );
}

export default App;
