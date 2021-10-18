import React from "react";
// Main CSS file
import "./App.css";
// Additional Libraries
import { Route, Switch, useLocation} from "react-router-dom";
// Components List
import Projects from "./components/Projects";
import NavBar from "./components/navBar";
import About from "./components/About";
import Resume from "./components/Resume";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ParticleComponent from "./components/particles";
import {useTransition,animated} from "react-spring";


const  App = () => {
  const locations = useLocation();
  const transitions = useTransition(locations,{
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return transitions((props,item) => (
    <div className = "App">
    <div className="App-header">
    <animated.div style={props} >
      <Switch location={item}>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </animated.div>
    </div>
    </div>
  ))
}
export default App;
