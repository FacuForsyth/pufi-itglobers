import FirstView from './Components/FirstView';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <FirstView />
      </main>
    </div>
  );
}

export default App;
