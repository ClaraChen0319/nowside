<script>
  export default {
    data () {
      return {
        gender: '',
      };
    },
  }
</script>

<template>
  <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-gray-300 shadow-xl">
      <div class="mx-auto max-w-[384px] divide-y divide-gray-300">
        <div class="my-8 font-bold text-center text-blue-700">
          <p class="mb-8 text-3xl">
            請問您的性別
          </p>
          <div class="flex flex-col items-center mb-8 text-lg">
            <div class="mb-8">
              <input
                id="male"
                v-model="gender"
                value="male"
                name="gender"
                class="mr-2 text-green-500 focus:ring-green-500 form-radio"
                type="radio"
              >
              <label
                for="male"
                class="ml-2 text-blue-700"
              >男性</label>
            </div>
            <div class="mb-8">
              <input
                id="female"
                v-model="gender"
                value="female"
                name="gender"
                class="mr-2 text-green-500 focus:ring-green-500 form-radio"
                type="radio"
              >
              <label
                for="female"
                class="ml-2 text-blue-700"
              >女性</label>
            </div>
            <div class="">
              <input
                id="other" 
                v-model="gender"
                value="other"
                name="gender"
                class="mr-2 text-green-500 focus:ring-green-500 form-radio"
                type="radio"
              >
              <label
                for="other"
                class="ml-2 text-blue-700"
              >其他</label>
            </div>
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
