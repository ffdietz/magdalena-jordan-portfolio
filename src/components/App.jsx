import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects'
import Biography from './Biography';
import Contact from './Contact'


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>
      <Biography/>
      <Contact/>
    </div>
  );
}


export default App;
