import './App.css';
import Aboutpage from './pages/Aboutpage';
import Clientfaqpage from './pages/Clientfaqpage';
import Homepage from './pages/Homepage';
import Projectpage from './pages/Projectpage';
import Servicespage from './pages/Servicespage';

function App() {
  return (
    <div className="App flex flex-col items-center overflow-x-hidden place-self-center overflow-y-scroll w-screen h-screen">
      <Homepage />
      <Aboutpage />
      <Servicespage />
      <Projectpage />
      <Clientfaqpage />
    </div>
  );
}

export default App;
