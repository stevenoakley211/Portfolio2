import logo from './logo.svg';
import Projects from './components/Projects';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import NavBar from './components/navBar'
import About from './components/About';
import Resume from './components/Resume';
import ParticleComponent from './components/particles';

function App() {
  return (
    <Router>
      
      <div className="App">
        
        <NavBar style={{zIndex:0}}/>
        <ParticleComponent style={{ zIndex:1}} />
        <div className="App-header" style={{zIndex:2}}>
          <Route exact path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resume}/>
         
         
        </div>
      </div>
      
    </Router>
  );
}

export default App;
