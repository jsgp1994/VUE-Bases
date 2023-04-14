import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedGuard from '@/router/auth-guard'

const routes = [
    {
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayaout" */ '@/modules/pokemon/layouts/PokemonLayaout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const id = Number( route.params.id )
                    return isNaN( id ) ? { id: 1 } : { id }
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-home' }
            },
        ]
    },
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [ isAuthenticatedGuard ],
        component: () => import(/* webpackChunkName: "DBZLayaout" */ '@/modules/dbz/layaouts/DragonBallLayaout'),
        children: [
            {
                path: 'characteres',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/dbz/pages/Characters'),
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/dbz/pages/About'),
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound" */ '@/modules/shared/pages/NoPageFound')
        //redirect: 'home'
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// router.beforeEach( ( to, from, next ) => {
//     //console.log( { to, from, next } )

//     const random = Math.random() * 100
//     if ( random > 50) {
//         console.log('Autenticado')
//         next()
//     }else{
//         console.log('Bloqueado por beforeEach Guard')
//         next( { name:  'pokemon-home'} )
//     }

// })


// const canAccess = () => {
//     return new Promise( resolve => {
//         const random = Math.random() * 100
//         if ( random > 50) {
//             console.log('Autenticado - canAccess')
//             resolve(true)
//         }else{
//             console.log('Bloqueado por beforeEach Guard - canAccess')
//             resolve(false)
//         }
//     })
// }

// router.beforeEach( async( to, from, next ) => {
//     const authorized = await canAccess()
//     authorized ? next() : next( { name:  'pokemon-home'} )
// })

export default router