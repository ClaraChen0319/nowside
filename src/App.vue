<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// import LoginModal from '@/components/LoginModal.vue';

export default {
  name: 'App',
  components: {
    Header, Footer,
  },
  data() {
    return {
      isDark: false,
    };
  },
  computed: {
    // 背景圖 切換
    backgroundImage() {
      let style = 'str';
      switch (this.isDark) {
        case false:
          style = 'background-image: linear-gradient(45deg, #DFF5F1 5% , #ffffff 40%, #A7CBEA 150%); background-attachment: fixed;';
          break
        case true:
          style = 'background-image: linear-gradient(to right bottom, #62a79f, #4a8b8c, #356f77, #255461, #173b49, #17303e, #162633, #131c27, #181d25, #1c1d23, #1f1f22, #202020); background-attachment: fixed;';
          break
      };
      return style;
    },
  },
  methods: {
    // 深夜模式 切換
    darkModeToggle() {
      this.isDark = !this.isDark;
    },
  },
}
</script>

<template>
  <article :class="isDark ? 'dark' : ''">
    <section
      class="w-full h-full"
      :style="backgroundImage"
    >
      <Header @emit="darkModeToggle"></Header>
      <router-view></router-view>
      <Footer></Footer>
    </section>
  </article>
</template>

<style></style>
