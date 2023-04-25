export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/daybook/layouts/DayBookLayaout'),
    children: [

    ]
}