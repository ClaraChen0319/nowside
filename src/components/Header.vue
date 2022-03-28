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
    class="flex fixed z-10 justify-center items-center w-screen h-[60px] text-lg text-C_blue-700 dark:text-white bg-white dark:bg-black shadow-md dark:shadow-gray-800"
  >
    <div class="mr-36 w-[196px]">
      <img
        src="@/assets/logo.png"
        alt="logo"
        class="mx-auto max-h-[36px] align-middle"
      >
    </div>
    <ul class="flex justify-between items-center w-[950px]">
      <li>
        <button class="font-medium border-C_blue-300/0 border-b-4 hover:border-C_green-300/100 active:text-C_green-500">
          成功案例
        </button>
      </li>
      <li>
        <button class="font-medium border-C_blue-300/0 border-b-4 hover:border-C_green-300/100 active:text-C_green-500">
          瀏覽專案
        </button>
      </li>
      <li>
        <button class="font-medium border-C_blue-300/0 border-b-4 hover:border-C_green-300/100 active:text-C_green-500">
          發起專案
        </button>
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
        <button>
          <span class="text-2xl align-sub material-icons">notifications</span>
        </button>
      </li>
      <li>
        <button>
          <span class="text-2xl align-sub material-icons">account_circle</span>
        </button>
      </li>
    </ul>
  </section>
</template>
