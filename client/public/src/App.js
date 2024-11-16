import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="p-4">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/chat" component={ChatPage} />
            <Route path="/" exact>
              <h1 className="text-center">Welcome to the Chat App</h1>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;
