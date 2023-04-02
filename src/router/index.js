import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store/index';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup.vue'),
    // meta: { auth: true },
  },
  {
    path: '/resetpassword',
    name: 'ResetPassword',
    component: () => import('@/views/ResetPassword.vue'),
  },
  {
    path: '/mypage',
    name: 'Mypage',
    component: () => import('@/views/Mypage.vue'),
    meta: { auth: true },
  },
  // Not Found Page
  {
    path: '/unauthorized',
    name: 'NotFoundPage',
    component: () => import('@/views/NotFoundPage.vue'),
  },
  {
    path: '/kitorder',
    name: 'KitOrder',
    component: () => import('@/views/KitOrder.vue'),
    meta: { auth: true },
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/Test.vue'),
    meta: { auth: true },
  },
  {
    path: '/test/desc',
    name: 'BeforeTestDescription',
    component: () => import('@/views/BeforeTestDescription.vue'),
    meta: { auth: true },
  },
  {
    path: '/askfornew',
    name: 'AskBeforeNewTest',
    component: () => import('@/views/AskBeforeNewTest.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/1',
    name: 'Survey1',
    component: () => import('@/views/Survey_1.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/2',
    name: 'Survey2',
    component: () => import('@/views/Survey_2.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/3',
    name: 'Survey3',
    component: () => import('@/views/Survey_3.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/4',
    name: 'Survey4',
    component: () => import('@/views/Survey_4.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/5',
    name: 'Survey5',
    component: () => import('@/views/Survey_5.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/6',
    name: 'Survey6',
    component: () => import('@/views/Survey_6.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/7',
    name: 'Survey7',
    component: () => import('@/views/Survey_7.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/8',
    name: 'Survey8',
    component: () => import('@/views/Survey_8.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/9',
    name: 'Survey9',
    component: () => import('@/views/Survey_9.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/10',
    name: 'Survey10',
    component: () => import('@/views/Survey_10.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/11',
    name: 'Survey11',
    component: () => import('@/views/Survey_11.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/12',
    name: 'Survey12',
    component: () => import('@/views/Survey_12.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/13',
    name: 'Survey13',
    component: () => import('@/views/Survey_13.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/14',
    name: 'Survey14',
    component: () => import('@/views/Survey_14.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/complete',
    name: 'SurveyComplete',
    component: () => import('@/views/SurveyComplete.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/result',
    name: 'TestResult',
    component: () => import('@/views/TestResult.vue'),
    meta: { auth: true },
  },
  {
    path: '/survey/result/preview/:id',
    name: 'PreviewRecommend',
    component: () => import('@/views/PreviewRecommend.vue'),
    meta: { auth: true },
  },
  {
    path: '/brareview/list',
    name: 'ReviewList',
    component: () => import('@/views/ReviewList.vue'),
    meta: { auth: true },
  },
  {
    path: '/brareview/:id',
    name: 'Review',
    component: () => import('@/views/Review.vue'),
    meta: { auth: true },
  },
  {
    path: '/homefitting/order',
    name: 'HomeFittingOrder',
    component: () => import('@/views/HomeFittingOrder.vue'),
    meta: { auth: true },
  },
  {
    path: '/homeservice',
    name: 'HomeDeliver',
    component: () => import('@/views/HomeDeliver.vue'),
    // meta: { auth: true },
  },
  // admin pages
  {
    path: '/userlist',
    name: 'UserList',
    component: () => import('@/views/UserList.vue'),
    meta: { auth: true },
  },
  {
    path: '/personalrecom/:id',
    name: 'AdminPersonalRecom',
    component: () => import('@/views/AdminPersonalRecom.vue'),
    meta: { auth: true },
  },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요합니다.');
    next('/');
    // this.emitter.emit('loginModal', true)
    return;
  }
  next();
});

export default router;
