<script>
import { S_login } from '@/http/api';

export default {
  name: 'LoginModal',
  data() {
    return {
      loginParams: {
        account: '',
        password: '',
      },
    };
  },
  computed: {},
  methods: {
    // 登入會員
    postLogin() {
      S_login(this.loginParams)
      .then(res =>{
        console.log('message：', res.data.message);
        console.log('token：', res.data.token);
        // 使用 setItem 將 token 存入 localStorage
        localStorage.setItem('nowsideToken', res.data.token);
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
      <div class="my-8 mx-auto max-w-[384px]">
        <section class="my-8">
          <!-- LOGO + 信箱密碼 input -->
          <div class="mb-14 text-C_gray-700">
            <!-- LOGO -->
            <div class="mb-6">
              <img
                src="@/assets/logo.png"
                alt="logo"
                class="mx-auto max-h-[126px] align-middle"
              >
            </div>
            <!-- 信箱密碼 input -->
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
            <!-- 記住帳號密碼 checkbox -->
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
          </div>
          <!-- 登入註冊按鈕 + 底部文字 -->
          <div>
            <button
              type="button"
              class="nowside-button-darkBlue-lg"
              @click="postLogin"
            >
              登入
            </button>
            <RouterLink
              class="mb-12 nowside-button-lightBlue-lg"
              to="/signup"
            >
              立即註冊
            </RouterLink>
            <p class="flex justify-center text-xs text-C_blue-600">
              沒有信箱？立即註冊
            </p>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>
