
import './App.css';
import Directors from './components/Director/Directors';
import Partners from './components/Partnership/Partners';
import Footer from './components/Footer/Footer';
import Mousigned from './components/Mousigned/Mousigned';
import Aboutus from './components/Aboutus/Aboutus';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Mousigned />
      <Aboutus />
     <Directors />
     <Partners />
     <Footer />
     
     
     
    </div>
  );
}

export default App;
