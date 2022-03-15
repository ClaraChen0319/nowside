<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
      };
    },
  }
</script>

<template>
  <div class="flex overflow-hidden relative flex-col justify-center py-6 min-h-screen">
    <div class="relative py-8 px-6 mx-auto min-w-[416px] bg-white rounded ring-1 ring-gray-300 shadow-xl">
      <div class="mx-auto max-w-md">
        <div class="divide-y divide-gray-300">
          <div class="py-8 leading-7 text-gray-700">
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
            <div class="relative mb-4">
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
            <div class="flex justify-between">
              <div class="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  class="nowside-checkbox"
                >
                <label
                  for="remember"
                  class="text-sm"
                >記住帳號密碼</label>
              </div>
              <div>
                <span class="text-sm text-green-500">忘記密碼？</span>
              </div>
            </div>
          </div>
          <div class="pt-8">
            <button class="py-4 px-6 mb-8 w-full text-lg font-bold text-white bg-blue-600 rounded">
              登入
            </button>
            <button class="py-4 px-6 mb-8 w-full text-lg font-bold text-blue-600 bg-blue-100 rounded border border-blue-300">
              立即註冊
            </button>
            <p class="flex justify-center text-xs text-blue-600">
              沒有信箱？立即註冊
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
