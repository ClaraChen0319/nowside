<script>
  export default {
    data () {
      return {
        contactTime: '09:00～12:00 PM',
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
            <div class="flex overflow-hidden items-center max-w-[96px] max-h-[96px] rounded-full border-2 border-gray-300">
              <img
                src="@/assets/poopoo.png"
                alt="poopoo"
                class="align-middle"
              >
            </div>
          </div>
          <div class="mb-12 text-center">
            <p class="mb-6 text-3xl font-bold text-blue-700">
              便便人，請提供您方便回復專案等相關問題的時段 :D
            </p>
          </div>
          <div class="relative">
            <select
              id="contactTime"
              v-model="contactTime"
              name="contactTime"
              class="py-4 pl-6 w-full text-lg font-bold text-blue-700 indent-20 rounded border border-gray-700 focus:border-green-500 focus:outline-none active:outline-none form-select"
              :class="{ 'filled': contactTime !== '', '': contactTime === '' }"
              required
            >
              <!-- <option
                value=""
                selected
                disabled
              >
              </option> -->
              <option value="00:00～03:00 AM">
                00:00～03:00 AM
              </option>
              <option value="03:00～06:00 AM">
                03:00～06:00 AM
              </option>
              <option value="06:00～09:00 AM">
                06:00～09:00 AM
              </option>
              <option value="09:00～12:00 AM">
                09:00～12:00 AM
              </option>
              <option value="12:00～03:00 PM">
                12:00～03:00 PM
              </option>
              <option value="03:00～06:00 PM">
                03:00～06:00 PM
              </option>
              <option value="06:00～09:00 PM">
                06:00～09:00 PM
              </option>
              <option
                value="09:00～12:00 PM"
              >
                09:00～12:00 PM
              </option>
            </select>
          </div>
        </div>
        <div class="pt-8 mb-8">
          <button class="py-4 px-6 mb-8 w-full text-lg font-bold text-white bg-blue-600 rounded">
            完成
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
