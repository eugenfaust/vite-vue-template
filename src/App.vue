<script>
import NavBar from './components/NavBar.vue';
import { useToast } from 'vue-toastification';

export default {
  setup() {},
  data() {
    const toast = useToast();
    return { toast };
  },
  mounted() {
    const locTheme = localStorage.getItem('theme') || 'light';
    this.$store.commit('theme/setTheme', locTheme);
  },
  methods: {
    showToast() {
      this.toast.info('This is toast!');
    },
  },
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
    <router-view/>
  </div>
</template>
