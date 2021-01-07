import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Clients from './components/Clients';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <Header />
      <Clients />
      <Contacts />
    </>
  );
}

export default App;
