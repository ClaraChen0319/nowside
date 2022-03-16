<script>
  export default {
    data () {
      return {};
    },
  }
</script>

<template>
  <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-gray-300 shadow-xl">
      <div class="mx-auto max-w-[384px]">
        <div class="my-8">
          <div class="mb-8">
            <img
              src="@/assets/logo.png"
              alt="logo"
              class="mx-auto max-h-[126px] align-middle"
            >
          </div>
          <div class="mb-12 font-bold text-center text-blue-700">
            <p class="mb-4 text-3xl">
              歡迎進入腦塞 project世界
            </p>
            <p class="mb-8 text-3xl">
              Mr. Sider <span class="material-icons">edit</span>
            </p>
            <p>
              以下所填寫的資訊將有助於<br>幫助我們推薦適合你的專案項目
            </p>
          </div>
          <div class="mb-8">
            <RouterLink
              class="flex justify-center py-4 px-6 mb-8 w-full text-lg font-bold text-white bg-blue-600 rounded"
              to="/signup"
            >
              開始
            </RouterLink>
            <p class="flex justify-center text-xs text-blue-600">
              已經有腦塞project的帳戶了嗎？
              <RouterLink
                class="text-green-500"
                to="/"
              >
                立即登入
              </RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
