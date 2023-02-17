import Navbar from'./components/Navbar';
import Banner from'./components/Banner';
import Intro from'./components/Intro';
import History from'./components/History';
import Initiative from './components/Initiative';
import './App.css';
import Registration from './components/Registration';
import Description from './components/Description';
import Footer from './components/Footer';
function App() {
  
  return (
    <div >
      <Navbar />
      <Banner />
      <Intro />
      <History />
      <Initiative />
      <Registration/>
      <Description/>
      <Footer />
    </div>
  );
}

export default App;
