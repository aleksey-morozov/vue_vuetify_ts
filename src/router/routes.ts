export default [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "Home" */'../views/Home.vue'),
    },
];
