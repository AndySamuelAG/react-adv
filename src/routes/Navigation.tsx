import { Routes, Route } from "react-router";
import { NavLink } from "react-router-dom";

import { FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage } from "../03-forms/pages";

import Logo from '../logo.svg';

export const Navigation =  () => {
  return (
      <div className="main-layout">
            <nav>
                <img src={ Logo } alt="React Logo"/>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/register">Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/formik-basic">Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/formik-yup">Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/formik-components">Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/formik-abstraction">Formik Abstraction</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/users">Users</NavLink>
                    </li>
                </ul>
        </nav>
        
        <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/formik-basic" element={<FormikBasicPage />} />
            <Route path="/formik-yup" element={<FormikYupPage />} />
            <Route path="/formik-components" element={<FormikComponents />} />
            <Route path="/formik-abstraction" element={<FormikAbstraction />} />
            <Route path="/users" element={(<h1>Users</h1>)} />
        </Routes>
    </div>
  );
}