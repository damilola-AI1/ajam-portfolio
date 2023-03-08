import './App.css';
import Aboutpage from './pages/Aboutpage';
import Clientfaqpage from './pages/Clientfaqpage';
import Homepage from './pages/Homepage';
import Projectpage from './pages/Projectpage';
import Servicespage from './pages/Servicespage';

function App() {
  return (
    <div className="App overflow-x-hidden overflow-y-scroll w-screen h-screen">
      <Homepage />
      <Aboutpage />
      <Servicespage />
      <Projectpage />
      <Clientfaqpage />
    </div>
  );
}

export default App;
