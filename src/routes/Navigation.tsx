import { Routes, Route } from "react-router";
import { NavLink } from "react-router-dom";

import { DynamicForm, FormikAbstraction, FormikBasicPage, FormikComponents, FormikYupPage, RegisterPage, RegisterFormikPage } from "../03-forms/pages";

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
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/register-formik">Register Formik</NavLink>
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
                        <NavLink className={({isActive}) => isActive ? 'nav-active':''} to="/dynamic-form">Dynamic Form</NavLink>
                    </li>
                </ul>
        </nav>
        
        <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/register-formik" element={<RegisterFormikPage />} />
            <Route path="/formik-basic" element={<FormikBasicPage />} />
            <Route path="/formik-yup" element={<FormikYupPage />} />
            <Route path="/formik-components" element={<FormikComponents />} />
            <Route path="/formik-abstraction" element={<FormikAbstraction />} />
            <Route path="/dynamic-form" element={ <DynamicForm /> } />
        </Routes>
    </div>
  );
}