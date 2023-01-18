import { Routes, Navigate, Route } from "react-router";
import { NavLink } from "react-router-dom";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";
import Logo from '../logo.svg';

export const Navigation =  () => {
  return (
      <div className="main-layout">
            <nav>
                <img src={ Logo } alt="React Logo"/>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/">Shopping</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/users">Users</NavLink>
                    </li>
                </ul>
        </nav>
        
        <Routes>
            <Route path="/" element={(<ShoppingPage />)} />
            <Route path="/about" element={(<h1>About</h1>)} />
            <Route path="/users" element={(<h1>Users</h1>)} />
        </Routes>
    </div>
  );
}