import logo from './logo.svg';
import Projects from './components/Projects';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import NavBar from './components/navBar'
import About from './components/About';
import Resume from './components/Resume';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="App-header">
          <Route exact path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resume}/>
          {/* <Route path="/contact" component={Contact}/> */}
         
        </div>
      </div>
    </Router>
  );
}

export default App;
