import "bootstrap/dist/css/bootstrap.css";
import Navbar from './components/Navbar/Navbar'
import Create from './components/Create/Create'
import Grid from './components/Grid/Grid'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Create />
      <Grid />
    </div>
  );
}

export default App;
