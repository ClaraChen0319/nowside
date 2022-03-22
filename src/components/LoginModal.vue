<script>
import { login } from '@/http/api';

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
      login(this.loginParams)
      .then(res =>{
        // this.$emit("emit-text", this.message);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
        // this.signInProcess = false;
        // this.$notify({
        //   group: "error",
        //   title: "Error",
        //   text: `error`
        // }, 2500) ;
      });
    },
  },
}
</script>

<template>
  <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-gray-300 shadow-xl">
      <div class="mx-auto max-w-[384px] divide-y divide-gray-300">
        <div class="my-6 text-gray-700">
          <div class="mb-6">
            <img
              src="@/assets/logo.png"
              alt="logo"
              class="mx-auto max-h-[126px] align-middle"
            >
          </div>
          <form class="mb-4">
            <div class="relative mb-6">
              <input
                id="account"
                v-model="loginParams.account"
                name="account" 
                type="text"
                class="peer nowside-loginInput"
                placeholder="信箱"
              >
              <label
                for="account"
                class="nowside-loginLabel"
                :class="[ loginParams.account ? 'nowside-loginFilled' : '' ]"
              >信箱</label>
            </div>
            <div class="relative">
              <input
                id="password"
                v-model="loginParams.password"
                type="password"
                name="password"     
                class="peer nowside-loginInput"
                placeholder="密碼"
              >
              <label
                for="password"
                class="nowside-loginLabel"
                :class="[ loginParams.password ? 'nowside-loginFilled' : '' ]"
              >密碼</label>
            </div>
          </form>
          <form class="flex justify-between">
            <div class="flex items-center pl-2">
              <input
                id="remember"
                type="checkbox"
                class="nowside-loginCheckbox"
              >
              <label
                for="remember"
                class="text-sm"
              >記住帳號密碼</label>
            </div>
            <div class="pr-2">
              <span class="text-sm text-green-500">忘記密碼？</span>
            </div>
          </form>
        </div>
        <div class="pt-6 mb-6">
          <button
            type="button"
            class="nowside-button-A"
            @click="postLogin"
          >
            登入
          </button>
          <RouterLink
            class="nowside-button-B"
            to="/signup"
          >
            立即註冊
          </RouterLink>
          <p class="flex justify-center text-xs text-blue-600">
            沒有信箱？立即註冊
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
