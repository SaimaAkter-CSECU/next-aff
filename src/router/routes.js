  
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import DashboardVendors from '../components/DashboardVendors.vue'
import Dashboard from '../components/Dashboard.vue'
import DashboardTutorial from '../components/DashboardTutorial.vue'
import Payments from '../components/Payments.vue'
import KeyAccountManager from '../components/KeyAccountManager.vue'
import Products from '../components/Products.vue'
import ChangePassword from '../components/ChangePassword.vue'
import TransactionReport from '../components/TransactionReport.vue'
import ProductReport from '../components/ProductReport.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        alias: '/login', 
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard-vendors',
        name: 'DashboardVendors',
        component: DashboardVendors
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: '/dashboard-tutorial',
                name: 'dashboard-tutorial',
                component: DashboardTutorial,
            },
            {
                path: '/key-manager',
                name: 'key-manager',
                component: KeyAccountManager,
            },
            {
                path: '/payments',
                name: 'payments',
                component: Payments,
            },
            {
                path: '/products',
                name: 'products',
                component: Products,
            }, 
            {
                path: '/reset-password',
                name: 'reset-password',
                component: ChangePassword,
            },
            {
                path: '/transaction-report',
                name: 'TransactionReport',
                component: TransactionReport
            },
            {
                path: '/product-report',
                name: 'ProductReport',
                component: ProductReport
            }
        ],
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router