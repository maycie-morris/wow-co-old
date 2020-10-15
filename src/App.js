import React, { useState } from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import { Breakpoint } from 'react-socks'

import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/burger-menu/theme'

// Images
import Logo from './images/Logo2.png'
import Cart from './images/Cart.png'
import Account from './images/Account.png'

// Components
import { Burger } from './components/burger-menu/burger'
import { Menu } from './components/burger-menu/menu'
import { Home } from './components/home'
import { About } from './components/about'
import { Contact } from './components/contact'
import { Register } from './components/register';
import { Login } from './components/login';
import { ItemList } from './components/itemList';
import { ShoppingCart } from './components/shoppingCart';

function App() {
  // const history = useHistory();
  const [open, setOpen] = useState(false)

  return (
    <>
    <ThemeProvider theme= { theme }>
      <div className="heroImage"> 
        <img className="logo" src={ Logo } />
       
      </div>
    <div className="burger">
      <Burger open= { open } setOpen= { setOpen } />
      <Menu open= { open } setOpen = { setOpen } />
    </div>
    <nav className="top-nav">
      <Breakpoint medium up>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/about'>About Us</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/login'><img className="account-logo" src={ Account } /> </Link>
        {/* <Link to='/register'>Register</Link> */}
        <Link to='/cart'><img className="cart-logo" src= { Cart } /></Link>
      </Breakpoint>
    </nav>
    <div className="navbar">
      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/register'> <Register /> </Route>
        <Route exact path='/login'> <Login /> </Route>
        <Route exact path='/about'> <About /> </Route>
        <Route exact path='/contact'> <Contact /> </Route>
        <Route exact path='/shop'> <ItemList /> </Route>
        <Route exact path='/cart'> <ShoppingCart /> </Route>
      </Switch>
    </div>
    </ThemeProvider>
    <footer>
      
    </footer>
    </>
  );
}

export default App;
