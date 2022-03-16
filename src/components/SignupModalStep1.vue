<script>
  export default {
    data () {
      return {
        email: '',
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
        <div class="mb-8">
          <div class="relative mb-8">
            <input
              id="email"
              v-model="email"
              class="nowside-input custom-input"
              :class="{ 'filled': email !== '', '': email === '' }"
              type="text"
              autofocus
            >
            <label
              for="email"
              class="absolute nowside-label custom-label"
            >信箱</label>
          </div>
          <div class="relative mb-8">
            <input
              id="password"
              v-model="password"
              class="nowside-input custom-input"
              :class="{ 'filled': password !== '', '': password === '' }"
              type="password"
              autofocus
            >
            <label
              for="password"
              class="absolute nowside-label custom-label"
            >密碼</label>
          </div>
          <div class="relative mb-8">
            <input
              id="password"
              v-model="confirm"
              class="nowside-input custom-input"
              :class="{ 'filled': confirm !== '', '': confirm === '' }"
              type="password"
              autofocus
            >
            <label
              for="password"
              class="absolute nowside-label custom-label"
            >確認密碼</label>
          </div>
        </div>
        <div class="pt-8 mb-8">
          <button class="py-4 px-6 mb-8 w-full text-lg font-bold text-white bg-blue-600 rounded">
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
