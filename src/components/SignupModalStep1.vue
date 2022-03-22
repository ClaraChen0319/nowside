<script>
  export default {
    data () {
      return {
        account: '',
        password: '',
        confirm: '',
      };
    },
  }
</script>

<template>
  <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-gray-300 shadow-xl">
      <div class="mx-auto max-w-[384px] divide-y divide-gray-300">
        <div class="my-8 font-bold text-center text-blue-700">
          <p class="text-3xl">
            請輸入註冊信箱、密碼
          </p>
        </div>
        <form class="mb-8">
          <div class="relative mb-8">
            <input
              id="account"
              v-model="account"
              name="account" 
              type="text"
              class="peer nowside-loginInput"
              placeholder="信箱"
            >
            <label
              for="account"
              class="nowside-loginLabel"
              :class="[ account ? 'nowside-loginFilled' : '' ]"
            >信箱</label>
          </div>
          <div class="relative mb-8">
            <input
              id="password"
              v-model="password"
              type="password"
              name="password"     
              class="peer nowside-loginInput"
              placeholder="密碼"
            >
            <label
              for="password"
              class="nowside-loginLabel"
              :class="[ password ? 'nowside-loginFilled' : '' ]"
            >密碼</label>
          </div>
          <div class="relative">
            <input
              id="confirm"
              v-model="confirm"
              type="confirm"
              name="confirm"     
              class="peer nowside-loginInput"
              placeholder="確認密碼"
            >
            <label
              for="confirm"
              class="nowside-loginLabel"
              :class="[ confirm ? 'nowside-loginFilled' : '' ]"
            >確認密碼</label>
          </div>
        </form>
        <div class="pt-8 mb-8">
          <button
            type="button"
            class="nowside-button-A"
          >
            下一步
          </button>
          <p class="flex justify-center text-xs text-blue-600">
            完成後，進一步填寫個人資料設定
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
