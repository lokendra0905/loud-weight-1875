import { MainRoutes } from "./routes/MainRoutes"
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
