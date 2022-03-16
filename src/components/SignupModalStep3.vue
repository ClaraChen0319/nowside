<script>
  export default {
    data () {
      return {
        photo: '',
      };
    },
  }
</script>

<template>
  <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-gray-300 shadow-xl">
      <div class="mx-auto max-w-[384px] divide-y divide-gray-300">
        <div class="my-8 text-gray-700">
          <div class="flex justify-around items-center mb-14 w-full">
            <span class="text-3xl text-blue-700 material-icons">arrow_back_ios</span>
            <div class="flex overflow-hidden items-center max-w-[96px] max-h-[96px] rounded-full border-2 border-gray-300">
              <img
                src="@/assets/poopoo.png"
                alt="poopoo"
                class="align-middle"
              >
            </div>
            <div class="overflow-hidden max-w-[96px] max-h-[96px] rounded-full border-2 border-gray-300">
              <img
                src="@/assets/zombie.png"
                alt="zombie"
                class="align-middle"
              >
            </div>
            <div class="overflow-hidden max-w-[96px] max-h-[96px] rounded-full border-2 border-gray-300">
              <img
                src="@/assets/ghost.png"
                alt="ghost"
                class="align-middle"
              >
            </div>
            <span class="text-3xl text-blue-700 material-icons">arrow_forward_ios</span>
          </div>
          <div class="mb-12 text-center">
            <p class="mb-6 text-3xl font-bold text-blue-700">
              請對您的大頭貼進行設定
            </p>
            <p class="text-lg font-bold text-blue-500">
              或是選擇我們提供的預設素材
            </p>
          </div>
        </div>
        <div class="pt-8 mb-8">
          <button class="py-4 px-6 mb-8 w-full text-lg font-bold text-white bg-blue-600 rounded">
            上傳
          </button>
          <RouterLink
            class="flex justify-center py-4 px-6 mb-8 w-full text-lg font-bold text-blue-600 bg-blue-100 rounded border border-blue-300"
            to="/signup"
          >
            下一步
          </RouterLink>
          <p class="flex justify-center text-xs text-blue-600">
            完成後，進一步填寫個人資料設定
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
