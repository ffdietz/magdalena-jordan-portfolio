import Navbar from './Navbar';
import Home from './Home';
import ProjectsIndex from './ProjectsIndex'
import Biography from './Biography';
import Contact from './Contact'


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <ProjectsIndex/>
      <Biography/>
      <Contact/>
    </div>
  );
}


export default App;
