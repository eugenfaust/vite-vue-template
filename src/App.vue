<script>
import ThemeSwitcher from './components/ThemeSwitcher.vue';
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
  components: { ThemeSwitcher },
};
</script>

<template>
  <div class="hero min-h-screen bg-base-200" :data-theme="theme">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Vite-vue-template</h1>
        <p class="py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          porro obcaecati at eveniet, ratione, inventore beatae laborum quis ab
          soluta, pariatur dolore accusamus. Explicabo quasi sequi omnis!
          Soluta, officia est.
        </p>
        <p>Switch me ↓</p>
        <div class="flex justify-center m-2"><ThemeSwitcher class="" /></div>
        <button class="btn btn-primary mt-2" @click="showToast">
          Show toast!
        </button>
      </div>
    </div>
  </div>
</template>
