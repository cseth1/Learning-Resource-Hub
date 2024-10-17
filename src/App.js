import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ResourceList from './components/ResourceList';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resources" component={ResourceList} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
