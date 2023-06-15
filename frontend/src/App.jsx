
import './App.css';
import { Shelter } from './components/Pet_Shelters/Shelter';
import {MainRoutes} from "./routes/MainRoutes"

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <Shelter />
    </div>
  );
}

export default App;
