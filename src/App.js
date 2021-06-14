import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login'
import './App.css';

function App() {
  const [user, setUser] = useState(null)
  return (
    //BEM naming convention
    <div className="app">
      {/* If no user, show Login page */}
        {!user ? (
          <Login />
        ) : (
          <div className='app__body'>
            <Router>
            <Sidebar />

              <Switch>
                <Route path='/rooms/:roomId'>
                  <Chat />
                </Route>
                <Route path='/'>
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
        )} 
    </div>
  );
}

export default App;
