<script>
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
  props: ['menu']
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
        <li v-for="m in menu" :key="m.path" @click="$emit('goTo', m.path), closeDrawer()">
          <a><component :is="m.icon" class="w-6 h-6" />{{m.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
