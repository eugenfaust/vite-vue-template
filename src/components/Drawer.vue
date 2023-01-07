<script>
import {
  AdjustmentsVerticalIcon,
  ChartBarIcon,
  BeakerIcon,
  HomeIcon,
} from '@heroicons/vue/24/solid';
export default {
  computed: {
    isOpen() {
      return this.$store.state.drawer.open;
    },
  },
  methods: {
    closeDrawer() {
        this.$store.commit('drawer/setOpen', false);
    },
  },
  components: { AdjustmentsVerticalIcon, ChartBarIcon, BeakerIcon, HomeIcon },
};
</script>
<template>
  <div class="drawer drawer-mobile">
    <input type="checkbox" class="drawer-toggle" :checked="isOpen" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label @click="closeDrawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-200 text-base-content">
        <li>
          <a><HomeIcon class="w-6 h-6" />Dashboard</a>
        </li>
        <li>
          <a><ChartBarIcon class="w-6 h-6" />Statistic</a>
        </li>
        <li>
          <a><BeakerIcon class="w-6 h-6" />Manage</a>
        </li>
        <li>
          <a><AdjustmentsVerticalIcon class="w-6 h-6" />Settings</a>
        </li>
      </ul>
    </div>
  </div>
</template>
