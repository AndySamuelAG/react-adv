import { Suspense } from "react";
import { Routes, Navigate, Route } from "react-router";
import { NavLink } from "react-router-dom";
import Logo from '../logo.svg';
import { routes } from './routes';


export const Navigation =  () => {
  return (
    <Suspense fallback={(<h1>Cargando...</h1>)}>
        <div className="main-layout">
                <nav>
                    <img src={ Logo } alt="React Logo"/>
                    <ul>
                        { routes.map( ( {to, name} ) => (
                            <li key={to}>
                                <NavLink 
                                className={({isActive}) => isActive ? 'nav-active':''} 
                                to={to}>
                                        {name}
                                </NavLink>
                            </li>
                        ) )}
                    </ul>
            </nav>
            
            <Routes>
                { routes.map( ( {path, Component} ) => (
                        <Route key={path} path={path} element={(<Component />)} />
                ) )}
            </Routes>
        </div>
    </Suspense>
  );
}