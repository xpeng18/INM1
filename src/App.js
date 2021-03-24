import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from 'react-router-dom';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact.js';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="selected">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="selected">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="selected">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="selected">Contacts</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>


        <footer>
          &copy; Xinyu
        </footer>
      </div>
    </Router>
  );
}

