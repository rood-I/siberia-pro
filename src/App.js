import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Clients from './components/Clients';
import Form from './components/Form';
// import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Clients />
      <Form />
      {/* <Contacts /> */}
      <Footer />
    </>
  );
}

export default App;
