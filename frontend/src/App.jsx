
import './App.css';
import { Footer } from './layout/Footer';
import Navbar from './layout/Navbar';
import {MainRoutes} from "./routes/MainRoutes"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
