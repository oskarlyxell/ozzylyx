import Experiences from "./Experiences";
import Contacts from "./Contacts";
import { Route, Router, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Particles from "react-particles-js";
import history from './History';

import Startpage from './Startpage';
import aboutMe from './aboutMe';

function App() {
  return (
    <>
    <Particles
    params={{
      particles:{
        number:{
          value: 30,
          density: {
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "star",
          stroke: {
            width: 6,
            color: "f9ab00"
          }
        }
      }
    }}
    />

    <Router history={history}>
            <Switch>
              <Route path="/" exact component={Startpage}/>
              <Route path="/aboutme" exact component={aboutMe}/>   
              <Route path="/experiences" exact component={Experiences}/>  
              <Route path="/contact" exact component={Contacts}/>             
            </Switch>
    </Router> 
    </>
  );
}

export default App;