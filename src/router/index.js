import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '../views/AboutUs.vue'
import FirebaseSignIn from '@/views/FirebaseSignIn.vue'
import FirebaseRegister from '@/views/FirebaseRegister.vue'
import AddBookView from '@/views/AddBookView.vue'
import UpdateDelete from '@/views/UpdateDelete.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import BookCountApi from '@/views/BookCountApi.vue'
import GetAllBookAPI from '@/views/GetAllBookAPI.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
 ,
 },
 {
  path:'/firelogin',
  name: 'firelogin',
  component : FirebaseSignIn
 },
 {
  path:'/fireregister',
  name: 'fireregister',
  component : FirebaseRegister
 },
 {
  path: '/addbook',
  name: 'addbook',
  component : AddBookView
 },
 {
  path :'/updateordelete',
  name : '/updateordelete',
  component : UpdateDelete
 },
 {
  path :'/GetBookCount',
  name :'GetBookCount',
  component : GetBookCountView
 },
 {
  path : '/WeatherView',
  name : 'WeatherView',
  component : WeatherView
 },
 {
  path : '/BookCountApi',
  name : 'BookCountApi',
  component : BookCountApi
 },
 {
  path : '/GetAllBookAPI',
  name : 'GetAllBookAPI',
  component : GetAllBookAPI
 }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router