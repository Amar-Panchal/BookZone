import './App.css';
import Home from './Buyer/Home';
import {Redirect,Route,Switch} from 'react-router-dom';
import Header from './Buyer/Header';
import Contact from './Buyer/Contact';
import { ToastContainer } from 'react-toastify';

import About from './Buyer/About';
import Footer from './Buyer/Footer';
import Cart from './Buyer/Cart';
import BooksDetails from './Buyer/BooksDetails';
import Category from './Buyer/Category';
import OrderPage from './Buyer/OrderPage';
function App() {
  return (
   <>
   <ToastContainer />
   <Header />
   <Switch>
       <Route exact path="/" component={Home}/>
      <Route exact path="/order" component={OrderPage}/>
      <Route exact path="/category" component={Category}/>
      <Route exact path="/books/:id" component={BooksDetails}/>
      <Route exact path="/blog" component={About} />
      <Route exact path="/contact" component={Contact}/>
      <Route export path="/cart" component={Cart}/>
      <Route to={Error} component={Home}/>
      <Redirect to ="/" />
    </Switch>
    <Footer />
   </>
  );
}

export default App;
