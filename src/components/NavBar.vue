<script>
import ThemeSwitcher from './ThemeSwitcher.vue';
import { FaceSmileIcon } from '@heroicons/vue/24/solid';
import { useToast } from 'vue-toastification';

export default {
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    openDrawer() {
      this.$store.commit('drawer/setOpen', !this.$store.state.drawer.open);
    },
    showToast() {
      this.toast.info('This is toast!');
    },
  },
  computed: {
    currentPath() {
      return this.$route.name;
    },
  },
  watch: {
    currentPath(newPath) {
      this.showMenu = newPath.startsWith('Cabinet');
    },
  },
  components: { ThemeSwitcher, FaceSmileIcon },
};
</script>
<template>
  <div class="navbar bg-base-100">
    <div class="flex-none">
      <Transition>
        <button
          class="btn btn-square btn-ghost lg:hidden hover:btn-primary"
          @click="openDrawer"
          v-if="showMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </Transition>
    </div>
    <div class="flex-1">
      <router-link to="/"
        ><a class="flex normal-case text-xl p-2 hover:text-primary duration-200"
          ><FaceSmileIcon class="w-8 h-8" />Template</a
        ></router-link
      >
    </div>
    <div class="flex-none">
      <ThemeSwitcher />
      <button
        class="ml-2 btn btn-sm rounded-full border-2 border-current hover:border-primary transform transition duration-200"
        @click="showToast"
      >
        Action button
      </button>
    </div>
  </div>
</template>
