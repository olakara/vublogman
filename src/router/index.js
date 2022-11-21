import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewPost from '../components/Post/components/ViewPost.vue'
import UpdatePost from '../components/Post/components/UpdatePost.vue'
import CreatePost from '../components/Post/components/CreatePost.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',      
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'posts',      
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/PostView.vue'),
      children: [
        {
          path: '',
          component: CreatePost
        },
        {
          path: ':id',
          component: ViewPost
        },
        {
          path: ':id/edit',
          component: UpdatePost
        },
      ]
      
    }
  ]
})

export default router
