<script>
import { S_login } from '@/http/api';

export default {
  name: 'LoginModal',
  data() {
    return {
      loginParams: {
        account: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    postLogin() {
      S_login(this.loginParams)
      .then(res =>{
        console.log(res.data);
        localStorage.setItem('nowsideToken', res.data.token); // 使用 setItem 將 token 存入 localStorage
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
}
</script>

<template>
  <article class="flex justify-center items-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] nowside-shadow">
      <div class="mx-auto max-w-[384px] divide-y divide-C_gray-300">
        <!-- LOGO + 信箱密碼 input -->
        <section class="my-6 text-C_gray-700">
          <div class="mb-6">
            <img
              src="@/assets/logo.png"
              alt="logo"
              class="mx-auto max-h-[126px] align-middle"
            >
          </div>
          <div class="mb-4">
            <form class="relative mb-6">
              <input
                id="account"
                v-model="loginParams.account"
                name="account" 
                type="text"
                class="peer nowside-peerInput"
                placeholder="信箱"
              >
              <label
                for="account"
                class="nowside-peerLabel"
                :class="[ loginParams.account ? 'nowside-peerFilled' : '' ]"
              >信箱</label>
            </form>
            <form class="relative">
              <input
                id="password"
                v-model="loginParams.password"
                type="password"
                name="password"     
                class="peer nowside-peerInput"
                placeholder="密碼"
              >
              <label
                for="password"
                class="nowside-peerLabel"
                :class="[ loginParams.password ? 'nowside-peerFilled' : '' ]"
              >密碼</label>
            </form>
          </div>
          <div class="flex justify-between">
            <form class="flex items-center pl-2">
              <input
                id="remember"
                type="checkbox"
                class="nowside-checkbox"
              >
              <label
                for="remember"
                class="text-sm"
              >記住帳號密碼</label>
            </form>
            <div class="pr-2">
              <span class="text-sm text-C_green-500">忘記密碼？</span>
            </div>
          </div>
        </section>
        <!-- 登入註冊按鈕 -->
        <section class="pt-6 mb-6">
          <button
            type="button"
            class="nowside-button-darkBlue-lg"
            @click="postLogin"
          >
            登入
          </button>
          <RouterLink
            class="nowside-button-lightBlue-lg"
            to="/signup"
          >
            立即註冊
          </RouterLink>
          <p class="flex justify-center text-xs text-C_blue-600">
            沒有信箱？立即註冊
          </p>
        </section>
      </div>
    </div>
  </article>
</template>

<style></style>
