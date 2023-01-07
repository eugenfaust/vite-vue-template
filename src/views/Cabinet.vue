<script>
import Drawer from '../components/Drawer.vue';
import Dashboard from './cabinet/Dashboard.vue';
import Manage from './cabinet/Manage.vue';
import Settings from './cabinet/Settings.vue';
import Statistic from './cabinet/Statistic.vue';
import {
  AdjustmentsVerticalIcon,
  ChartBarIcon,
  BeakerIcon,
  HomeIcon,
} from '@heroicons/vue/24/solid';
export default {
  data() {
    return {
      menu: [
        {
          path: 'dashboard',
          title: 'Dashboard',
          icon: HomeIcon,
        },
        {
          path: 'statistic',
          title: 'Statistic',
          icon: ChartBarIcon,
        },
        {
          path: 'manage',
          title: 'Manage',
          icon: BeakerIcon,
        },
        {
          path: 'settings',
          title: 'Settings',
          icon: AdjustmentsVerticalIcon,
        },
      ]
    }
  },
  computed: {
    innerView() {
      return this.$route.params.view;
    }
  },
  methods: {
    routeTo(path) {
      this.$router.push(path);
    },
  },
  components: { Drawer, Dashboard, Manage, Settings, Statistic},
};
</script>
<template>
  <Drawer :menu="menu" @go-to="routeTo">
    
    <div class="hero min-h-screen bg-base-200">
      <Transition>
      <Dashboard v-if="innerView === 'dashboard'" />
      <Manage v-else-if="innerView === 'manage'" />
      <Settings v-else-if="innerView === 'settings'" />
      <Statistic v-else-if="innerView === 'statistic'" />
    </Transition>
    </div>
  </Drawer>
</template>
