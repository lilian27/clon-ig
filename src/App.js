import './App.css'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'


import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, Switch } from 'react-router-dom';

import { Container, Row } from 'react-bootstrap';
import Explore from './explore/Explore';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="App">
          <Container>
            <Row>
              <Switch>
                <Route path="/login"> <Login /> </Route>
                <Route path="/Signup"><Signup /> </Route>
                <Route path="/Explore"><Explore /> </Route>
              </Switch>
            </Row>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;
