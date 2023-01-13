import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import SimpleMenu from "../layouts/simple-menu/Main.vue";
import TopMenu from "../layouts/top-menu/Main.vue";
import Page1 from "../views/page-1/Main.vue";
import Page2 from "../views/page-2/Main.vue";
import LoginPage from '../views/Auth/Login/Index.vue';
import RegisterPage from '../views/Auth/Register/Index.vue';
import OtpPage from '../views/Auth/Verif/Index.vue';
import SetupPassword from '../views/Auth/SetupPassword/Index.vue';
import UnitKerja from '../views/MasterData/UnitKerja/Main.vue';
import Portal from '../views/Portal/Main.vue';
import DashboardKapalPengawas from '../views/Dashboard/KapalPengawas/Main.vue';
import TargetOperasiKP from "../views/OperasiPengawsasan/TargetOperasi/Main.vue";

const routes = [
  {
    path: '/',
    name: 'portal',
    component: Portal,
  },
  {
    path: "/login",
    name: "/login",
    component: LoginPage,
  },
  {
    path: '/register',
    name: '/daftar',
    component: RegisterPage,
  },
  {
    path: '/otp',
    name: 'otp',
    component: OtpPage
  },
  {
    path: '/setup_password',
    name: 'setup_password',
    component: SetupPassword,
  },
  {
    path: "/dashboard",
    name: 'dashboard',
    component: TopMenu,
    children: [
      {
        path: "kapal-pengawas",
        name: "kapal-pengawas",
        component: DashboardKapalPengawas,
      },
      {
        path: "target-operasi",
        name: "target-operasi",
        component: TargetOperasiKP,
      },
      {
        path: "unit_kerja",
        name: "unit_kerja",
        component: UnitKerja
      },
    ],
  },
  {
    path: "/simple-menu",
    component: SimpleMenu,
    children: [
      {
        path: "page-1",
        name: "simple-menu-page-1",
        component: Page1,
      },
      {
        path: "page-2",
        name: "simple-menu-page-2",
        component: Page2,
      },
      
    ],
  },
  {
    path: "/top-menu",
    component: TopMenu,
    children: [
      {
        path: "page-1",
        name: "top-menu-page-1",
        component: Page1,
      },
      {
        path: "page-2",
        name: "top-menu-page-2",
        component: Page2,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
