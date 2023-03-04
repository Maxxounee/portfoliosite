import { createRouter, createWebHistory } from "vue-router";
import Skills from "@/components/Skills.vue";

const routes = [{}];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 200 };
  },
});

export default router;
