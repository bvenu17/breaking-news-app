import React from 'react';
import './App.css';
import CategoriesPage from './components/CategoriesPage/CategoriesPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Sports from './components/Categories/Sports';
import Technology from './components/Categories/Technology';
import Business from './components/Categories/Business';
import Entertainment from './components/Categories/Entertainment';
import AppNavbar from './components/NavigationBar/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPage from './components/IndexPage/IndexPage';
import Trending from './components/Categories/Trending';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <AppNavbar />
        <Switch>
          <Route path="/" component={IndexPage} exact />
          <Route path="/CategoriesPage" component={CategoriesPage}  />
          <Route path="/Trending" component={Trending}  />
          <Route path="/Sports" component={Sports}  />
          <Route path="/Technology" component={Technology} />
          <Route path="/Business" component={Business} />
          <Route path="/Entertainment" component={Entertainment} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
