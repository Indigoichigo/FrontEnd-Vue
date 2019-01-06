import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserStart from './components/user/UserStart.vue';
import Header from './components/Header.vue';

export const routes = [
    {
        path: '',
        components: {
            default: Home,
            'header-top': Header
        },
        name: 'home'
    },
    {
        path:'/user',
        component: User,
        children: [
            {
                path: '',
                component: UserStart
            },
            {
                path: ':id',
                component: UserDetail
            },
            {
                path: ':id/edit',
                component: UserEdit,
                name: 'userEdit'
            },
        ]
    },
    {
        path: 'redirect-me',
        redirect: '/user'
    },
    {
        path: '*',
        redirect: '/'
    }
] 