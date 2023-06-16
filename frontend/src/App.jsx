
import './App.css';
import { AdminNavbar } from './components/AdminNavbar/AdminNavbar';
import {MainRoutes} from "./routes/MainRoutes"

function App() {
  return (
    <div className="App">
      <AdminNavbar />
      <MainRoutes />
    </div>
  );
}

export default App;
