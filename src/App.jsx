import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path={'/'}>
              <Home />
            </Route>
            <Route exact path={'/create'}>
              <Create />
            </Route>
            <Route path={'/blogs/:id'}>
              <BlogDetails />
            </Route>
            <Route path={'*'}>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
