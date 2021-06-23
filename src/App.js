import React , {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';  


import Header from './Components/Header';
import Indioo from './Components/Indioo';
import World from './Components/World';
import './App.css';


import{
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
class App extends Component{
  constructor(){
    super();
  }
  render(){

  
  return (
    <div>
       
      <Router>
      <Header/>
        <Switch>
         
                      <Route  path = "/Indioo">
            <Indioo/>
                      </Route>
                      <Route  path = "/World">
            <World/>
                      </Route>

        </Switch>
      </Router>

    </div>
  );
}
};
 


export default App;
