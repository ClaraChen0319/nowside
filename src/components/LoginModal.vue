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
  <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-gray-300 shadow-xl">
      <div class="mx-auto max-w-[384px] divide-y divide-gray-300">
        <div class="my-8 text-gray-700">
          <div class="mb-10">
            <img
              src="@/assets/logo.png"
              alt="logo"
              class="mx-auto max-h-[126px] align-middle"
            >
          </div>
          <div class="mb-10">
            <form
              class=""
              action=""
              method="POST"
            >
              <div class="relative mb-10">
                <input
                  id="email"
                  v-model="email"
                  name="email" 
                  type="text"
                  class="peer nowside-input"
                  placeholder="信箱"
                >
                <label
                  for="email"
                  class="nowside-inputLabel"
                  :class="[ email ? 'filled' : '' ]"
                >信箱</label>
              </div>
              <div class="relative mb-6">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  name="password"     
                  class="peer nowside-input"
                  placeholder="密碼"
                >
                <label
                  for="password"
                  class="nowside-inputLabel"
                  :class="[ email ? 'filled' : '' ]"
                >密碼</label>
              </div>
            </form>
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
        </div>
        <div class="pt-8 mb-8">
          <button
            type="button"
            class="block py-4 mb-8 w-full text-lg font-bold text-center text-white bg-blue-600 hover:bg-blue-500 rounded focus:outline-none cursor-pointer"
          >
            登入
          </button>
          <RouterLink
            class="flex justify-center py-4 px-6 mb-8 w-full text-lg font-bold text-blue-600 bg-blue-100 rounded border border-blue-300"
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
