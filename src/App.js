import React, { useState } from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import { Breakpoint } from 'react-socks'

import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/burger-menu/theme'
import Logo from './images/Logo.png'

// Components
import { Burger } from './components/burger-menu/burger'
import { Menu } from './components/burger-menu/menu'
import { Home } from './components/home'
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
    <nav>
      <Breakpoint medium up>
        <Link to='/'>Home</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/cart'>Cart</Link>
      </Breakpoint>
    </nav>
    <div className="navbar">
      <Switch>
        <Route exact path='/'> <Home /> </Route>
        <Route exact path='/register'> <Register /> </Route>
        <Route exact path='/login'> <Login /> </Route>
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
