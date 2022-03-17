<script setup>
</script>

<template>
  <div
    class="w-full h-full"
    style="background-image: linear-gradient(45deg, #DFF5F1 5% , #ffffff 40%, #A7CBEA 150%); background-attachment: fixed;"
  >
    <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
      <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-gray-300 shadow-xl">
        <div class="mx-auto max-w-[384px] divide-y divide-gray-300">
          <div class="my-8 text-gray-700">
            <div class="mb-8">
              <img
                src="@/assets/logo.png"
                alt="logo"
                class="mx-auto max-h-[126px] align-middle"
              >
            </div>
            <!-- <div class="relative mb-8">
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
          </div> -->
            <form
              class="mt-12"
              action=""
              method="POST"
            >
              <div class="relative">
                <input
                  id="email"
                  v-model="email"
                  name="email" 
                  type="text"
                  class="peer w-full h-10 text-gray-700 border-b-2 border-gray-300 focus:border-green-500 focus:outline-none placeholder:text-opacity-0"
                  placeholder="Email address"
                >
                <label
                  for="email"
                  class="absolute -top-3.5 peer-placeholder-shown:top-2 peer-focus:-top-3.5 left-0 text-sm peer-placeholder-shown:text-md peer-focus:text-sm peer-placeholder-shown:text-gray-700 text-gray-700 peer-focus:text-green-500 transition-all"
                >Email address</label>
              </div>
              <div class="relative mt-10">
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  name="password"     
                  class="peer w-full h-10 text-gray-700 border-b-2 border-gray-300 focus:border-green-500 focus:outline-none placeholder:text-opacity-0"
                  placeholder="Password"
                >
                <label
                  for="password"
                  class="absolute -top-3.5 peer-placeholder-shown:top-2 peer-focus:-top-3.5 left-0 text-sm peer-placeholder-shown:text-md peer-focus:text-sm peer-placeholder-shown:text-gray-700 text-gray-700 peer-focus:text-green-500 transition-all"
                >Password</label>
              </div>

              <input
                type="sumbit"
                value="Sign in"
                class="block py-4 mb-8 w-full text-lg font-bold text-center text-white bg-blue-600 hover:bg-blue-500 rounded focus:outline-none cursor-pointer"
              >
            </form>
          </div>
          <div class="pt-8 mb-8">
            <button class="py-4 px-6 mb-8 w-full text-lg font-bold text-white bg-blue-600 rounded">
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
  </div>
</template>
