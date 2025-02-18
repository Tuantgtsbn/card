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
        children: [
            {
                title: 'Birthday Cards',
                path: 'birthday',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            },
            {
                title: 'Anniversary Cards',
                path: 'anniversary',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            },
            {
                title: 'Thank You Cards',
                path: 'thank-you',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            },
            {
                title: 'Get Well Cards',
                path: 'getwell',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            },
            {
                title: 'Good Luck Cards',
                path: 'goodluck',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            },
            {
                title: 'Love & Romance Cards',
                path: 'love',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            },
            {
                title: 'New Baby Cards',
                path: 'baby',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            },
            {
                title: 'Sympathy Cards',
                path: 'sympathy',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            },
            {
                title: 'Valentine Cards',
                path: 'valentine',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            },
            {
                title: 'Wedding Cards',
                path: 'wedding',
                component: lazy(() => import('@/pages/ListCardPage')),
                layout: lazy(() => import('@/layouts/SecondaryLayout'))
            }
        ]
    },
    {
        path: 'preview/cards/:name/:id',
        title: 'Preview Card',
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
