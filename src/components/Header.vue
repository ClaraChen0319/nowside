<script>
export default {
  name: 'Header',
  data() {
    return {
      isDark: false,
    };
  },
  computed: {},
  methods: {
    darkModeToggle() {
      this.isDark = !this.isDark;
      this.$emit('emit');
    },
  },
}
</script>

<template>
  <section
    class="flex fixed z-50 justify-center items-center w-screen h-[60px] text-lg text-C_blue-700 dark:text-white bg-white dark:bg-black shadow-md dark:shadow-gray-800"
  >
    <div class="mr-36 w-[196px]">
      <router-link to="/">
        <img
          src="../assets/logo-header.svg"
          alt="logo-header"
          class="mx-auto align-middle"
        >
      </router-link>
    </div>
    <ul class="flex justify-between items-center w-[950px]">
      <li>
        <router-link
          class="font-medium active:text-C_green-500 border-b-4 border-C_blue-300/0 hover:border-C_green-300/100"
          to="/success"
        >
          成功案例
        </router-link>
      </li>
      <li>
        <router-link
          class="font-medium active:text-C_green-500 border-b-4 border-C_blue-300/0 hover:border-C_green-300/100"
          to="/project"
        >
          瀏覽專案
        </router-link>
      </li>
      <li>
        <router-link
          class="font-medium active:text-C_green-500 border-b-4 border-C_blue-300/0 hover:border-C_green-300/100"
          to="/create"
        >
          發起專案
        </router-link>
      </li>
      <li>
        <button @click="darkModeToggle">
          <span
            class="text-2xl align-sub material-icons"
            :class="isDark ? 'text-orange-400' : ''"
            v-text="isDark ? 'light_mode' : 'dark_mode'"
          ></span>
        </button>
      </li>
      <li>
        <router-link to="/accountmessage">
          <span class="text-2xl align-sub material-icons">notifications</span>
        </router-link>
      </li>
      <li>
        <router-link to="/account">
          <span class="text-2xl align-sub material-icons">account_circle</span>
        </router-link>
      </li>
    </ul>
  </section>
</template>
