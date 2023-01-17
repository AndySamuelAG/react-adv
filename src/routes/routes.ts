import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element


interface Route {
    to: string,
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent, //() => JSX.Element;
    name: string;
    children?: Route[];
}


// const LazyPage1 = lazy( () => import( /* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1') );
// const LazyPage2 = lazy( () => import( /* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2') );
// const LazyPage3 = lazy( () => import( /* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3') );


export const routes: Route[] = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component:  lazy( () => import( /* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout')),
        name: 'LazyLoading Nested'
    },
    {
        to: '/no-lazy',
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
    // {
    //     path: '/lazy2',
    //     Component: LazyPage2,
    //     name: 'LazyPage-2'
    // },
    // {
    //     path: '/lazy3',
    //     Component: LazyPage3,
    //     name: 'LazyPage-3'
    // },
];