import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" render={() => isAuthenticated ? <Redirect to="/dashboard" /> : <Login setAuth={setIsAuthenticated} />} />
          <Route exact path="/dashboard" render={() => isAuthenticated ? <Dashboard setAuth={setIsAuthenticated} /> : <Redirect to="/login" />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
