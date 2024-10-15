import { createRouter, createWebHistory } from 'vue-router';
import DashBoardView from '@/views/DashBoardView.vue';
import AreaView from '@/views/AreasView.vue';
import MatcheView from '@/views/MatchesView.vue';
import PlayerView from '@/views/PlayersView.vue';
import TeamView from '@/views/TeamsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoardView,
    },
    {
      path: '/matches',
      name: 'matches',
      component: MatcheView,
    },
    {
      path: '/players',
      name: 'players',
      component: PlayerView,
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamView,
    },
    {
      path: '/areas',
      name: 'areas',
      component: AreaView,
    },
  ],
})

export default router
