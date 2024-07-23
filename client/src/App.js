import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AuthProvider from './contexts/AuthContext';
import About from './pages/About';

const App = () => (
  <Router>
    <AuthProvider>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </AuthProvider>
  </Router>
);

export default App;
