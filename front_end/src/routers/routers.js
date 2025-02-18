import { lazy } from 'react';
export const routers = [
    {
        path: '/',
        title: 'Happy Card',
        component: lazy(() => import('@/pages/HomePage')),
        layout: lazy(() => import('@/layouts/DefaultLayout'))
    },
    {
        path: '/cards',
        title: 'Happy Card',
        component: lazy(() => import('@/pages/CardPage')),
        layout: lazy(() => import('@/layouts/DefaultLayout')),

    },
    {
        path: '/cards/:name',
        title: '',
        component: lazy(() => import('@/pages/ListCardPage')),
        layout: lazy(() => import('@/layouts/DefaultLayout')),
    }
    ,
    {
        path: 'preview/cards/:name/:id',
        title: '',
        component: lazy(() => import('@/pages/PreviewCardPage')),
        layout: lazy(() => import('@/layouts/DefaultLayout'))
    }
    ,
    {
        path: '/about',
        title: 'About Us',
        component: lazy(() => import('@/pages/AboutPage')),
        layout: lazy(() => import('@/layouts/DefaultLayout'))
    }
    ,
    {
        path: '/contact',
        title: 'Contact',
        component: lazy(() => import('@/pages/ContactPage')),
        layout: lazy(() => import('@/layouts/DefaultLayout'))
    }
    ,
    {
        path: '*',
        title: '404 Not Found',
        component: lazy(() => import('@/pages/NotFoundPage')),
        layout: lazy(() => import('@/layouts/DefaultLayout'))
    }

];
