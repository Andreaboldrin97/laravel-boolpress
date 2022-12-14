// IMPORTIAMO VUE 
import Vue from 'vue';
import VueRouter from 'vue-router';

//! INDICHIAMO L'UTILLIZZO DI VUE ROUTER
Vue.use(VueRouter)

//? IMPORTIAMO LE SINGOLE PAGINE
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import SinglePost from './pages/SinglePostPage';
import SingleTag from './pages/SingleTagPage';
import SearchPost from './pages/SearchPostPage';

//! PER OGNI PAGINA AVREMO UN : PATH(uri), NAME(),COMPONENT DI RIFERIMENTO
const router = new VueRouter({
    //* LEVA L'ASTERISCO DELL'URL
    mode: 'history',
    //! INDICHIAMO LE ROTTE POSSIBILI
    routes : [
        {
            path:'/',
            name: 'home',
            component: Home
        },
        {
            path:'/about',
            name: 'about',
            component: About
        },
        {
            path:'/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/post/search/:title',
            name : 'seachPost',
            component : SearchPost
        },
        {
            path:'/post/:id',
            name: 'singlePost',
            component: SinglePost
        },
        {
            path:'/tag/:id',
            name: 'singleTag',
            component: SingleTag
        },
    ]
})

export default router;