import Home from './Home';
import Navbar from './Navbar';
import './index.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
         <Switch>
         <Route path="/" exact component= {Home} />
         <Route path="/create" exact component= {Create} />
         <Route path="/blogs/:id" exact component= {BlogDetails} />
         <Route path="*" exact component= {NotFound} />
         </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
