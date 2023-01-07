<script>
import NavBar from './components/NavBar.vue';

export default {
  setup() {},
  data() {},
  mounted() {
    const locTheme = localStorage.getItem('theme') || 'light';
    this.$store.commit('theme/setTheme', locTheme);
  },
  methods: {},
  computed: {
    theme() {
      return this.$store.state.theme.current;
    },
  },
  components: {
    NavBar,
  },
};
</script>

<template>
  <div :data-theme="theme">
    <NavBar />
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
