<script>
export default {
  name: 'Project',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
}
</script>

<template>
  <article class="py-[180px] w-full h-full">
    <!-- 搜尋區塊 -->
    <section class="flex flex-col justify-center items-center py-12 mb-[58px] h-[232px] nowside-container-lg nowside-shadow">
      <div class="w-[1076px]">
        <!-- 搜尋 input -->
        <label class="block relative mb-10">
          <span class="flex absolute inset-y-0 left-0 items-center pl-2">
            <span
              class="ml-12 text-3xl text-C_green-500 material-icons"
            >search</span>
          </span>
          <input
            class="block py-3 pr-3 pl-28 w-full placeholder:italic placeholder:text-C_gray-700 bg-C_gray-100 dark:bg-[#333333] rounded-full border-2 border-C_blue-300 focus:border-C_green-500 focus:outline-none focus:ring-1 focus:ring-C_green-500 shadow-sm"
            placeholder="搜尋感興趣的 side project"
            type="text"
            name="search"
          >
        </label>
        <!-- 搜尋條件 select -->
        <form>
          <select
            id=""
            class="nowside-searchSelect"
            name=""
          >
            <option
              disabled
              selected
            >
              專案類別
            </option>
          </select>
          <select
            id=""
            class="nowside-searchSelect"
            name=""
          >
            <option
              disabled
              selected
            >
              媒合期限
            </option>
          </select>
          <select
            id=""
            class="nowside-searchSelect"
            name=""
          >
            <option
              disabled
              selected
            >
              團隊人數
            </option>
          </select>
          <select
            id=""
            class="nowside-searchSelect"
            name=""
          >
            <option
              disabled
              selected
            >
              使用技術
            </option>
          </select>
        </form>
      </div>
    </section>
    <!-- 分類標籤 -->
    <section class="mb-[32px] nowside-container-lg">
      <ul class="flex justify-end">
        <li>
          <button class="text-lg font-bold text-C_blue-700 hover:text-C_blue-500 dark:text-C_blue-200 dark:hover:text-C_blue-300">
            最新
          </button>
        </li>
        <li class="ml-10">
          <button class="text-lg font-bold text-C_blue-700 hover:text-C_blue-500 dark:text-C_blue-200 dark:hover:text-C_blue-300">
            熱門
          </button>
        </li>
        <li class="ml-10">
          <button class="text-lg font-bold text-C_blue-700 hover:text-C_blue-500 dark:text-C_blue-200 dark:hover:text-C_blue-300">
            組團
          </button>
        </li>
      </ul>
    </section>
    <!-- 列表區塊 -->
    <div class="flex justify-between nowside-container-lg">
      <!-- 收藏專案 -->
      <section class="h-fit nowside-container-sm nowside-shadow">
        <!-- 標題 -->
        <div class="flex justify-center items-center py-4 w-full bg-C_blue-700 rounded-t-lg">
          <span class="text-lg text-C_blue-100">收藏的專案</span>
        </div>
        <!-- 列表 -->
        <div class="py-12 px-6 w-full bg-white dark:bg-C_black rounded-b-lg">
          <ul class="w-[258px]">
            <li class="flex items-center mb-8">
              <div
                class="w-[80px] h-[80px] rounded-full nowside-backgroundImage"
                style="background-image: url('https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80')"
              ></div>
              <div>
                <span class="ml-6 text-C_blue-500 dark:text-C_blue-200">
                  尋找貓
                </span>
              </div>
            </li>
            <li class="flex items-center mb-8">
              <div
                class="w-[80px] h-[80px] rounded-full nowside-backgroundImage"
                style="background-image: url('https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
              ></div>
              <div>
                <span class="ml-6 text-C_blue-500 dark:text-C_blue-200">
                  天然 a 食譜
                </span>
              </div>
            </li>
            <li class="flex items-center">
              <div
                class="w-[80px] h-[80px] rounded-full nowside-backgroundImage"
                style="background-image: url('https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
              ></div>
              <div>
                <span class="ml-6 text-C_blue-500 dark:text-C_blue-200">
                  植萃分析
                </span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!-- 專案列表 -->
      <section class="flex flex-col ml-6 nowside-container-md">
        <div class="flex justify-between py-10 px-6 mb-20 nowside-shadow">
          <!-- 【左】圖片 -->
          <div
            class="mr-10 w-[132px] h-[132px] rounded-full nowside-backgroundImage"
            style="background-image: url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80')"
          >
          </div>
          <!-- 【中】內容 -->
          <div class="mr-6 w-[482px]">
            <ul class="text-C_blue-800">
              <li class="mb-4">
                <p class="text-xl font-bold text-C_blue-700 dark:text-C_blue-400">
                  家務分配
                </p>
              </li>
              <li class="mb-6">
                <p class="mb-1 text-lg font-bold text-C_blue-700 dark:text-C_blue-400">
                  專案內容
                </p>
                <p class="overflow-y-hidden max-h-[160px] dark:text-C_blue-200">
                  自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。
                </p>
              </li>
              <li>
                <p class="font-bold text-C_blue-700 dark:text-C_blue-400">
                  媒合期限
                </p>　
                <p class="dark:text-C_blue-200">
                  2022.01.02
                </p>
              </li>
            </ul>
          </div>
          <!-- 【右】狀態 -->
          <div class="w-[256px]">
            <ul class="text-C_blue-800">
              <li class="flex justify-between mb-4">
                <div>
                  <p class="mr-2 font-bold text-C_blue-700 dark:text-C_blue-400">
                    種類
                  </p>
                  <p class="text-C_blue-500 dark:text-C_blue-200">
                    SaaS
                  </p>
                </div>
                <div class="flex items-center">
                  <span class="mr-1 text-xl font-bold text-C_green-500 material-icons">adjust</span>
                  <p class="font-bold text-C_blue-700 dark:text-C_blue-200">
                    進行中
                  </p>
                </div>
              </li>
              <li class="mb-4">
                <p class="mr-2 font-bold text-C_blue-700 dark:text-C_blue-400">
                  發起日
                </p>
                <p class="dark:text-C_blue-200">
                  2022.01.01
                </p>
              </li>
              <li class="mb-4">
                <p class="mr-2 font-bold text-C_blue-700 dark:text-C_blue-400">
                  結束日
                </p>
                <p class="dark:text-C_blue-200">
                  2022.03.01
                </p>
              </li>
              <li class="flex items-center mb-4">
                <span class="mr-2 text-3xl text-C_blue-400 material-icons">account_circle</span>
                <span class="text-xl dark:text-C_blue-200">3</span>
              </li>
              <li class="mb-4">
                <p class="flex overflow-y-hidden flex-wrap max-h-[68px]">
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Vue</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">C++</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">XD</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">C#</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Java</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Java</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Java</span>
                </p>
              </li>
              <li>
                <div class="flex justify-between w-full">
                  <button class="flex justify-center items-center py-2 mr-6 w-[100px] text-md font-bold text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400">
                    <span class="mr-1 material-icons">favorite_border</span>
                    收藏
                  </button>
                  <button class="flex justify-center items-center py-2 w-[100px] text-md font-bold text-white bg-C_green-600 hover:bg-C_green-500 rounded">
                    <span class="mr-1 material-icons">north_east</span>
                    查看
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between py-10 px-6 mb-20 nowside-shadow">
          <!-- 【左】圖片 -->
          <div
            class="mr-10 w-[132px] h-[132px] rounded-full nowside-backgroundImage"
            style="background-image: url('https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
          >
          </div>
          <!-- 【中】內容 -->
          <div class="mr-6 w-[482px]">
            <ul class="text-C_blue-800">
              <li class="mb-4">
                <p class="text-xl font-bold text-C_blue-700 dark:text-C_blue-400">
                  家務分配
                </p>
              </li>
              <li class="mb-6">
                <p class="mb-1 text-lg font-bold text-C_blue-700 dark:text-C_blue-400">
                  專案內容
                </p>
                <p class="overflow-y-hidden max-h-[160px] dark:text-C_blue-200">
                  自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。
                </p>
              </li>
              <li>
                <p class="font-bold text-C_blue-700 dark:text-C_blue-400">
                  媒合期限
                </p>　
                <p class="dark:text-C_blue-200">
                  2022.01.02
                </p>
              </li>
            </ul>
          </div>
          <!-- 【右】狀態 -->
          <div class="w-[256px]">
            <ul class="text-C_blue-800">
              <li class="flex justify-between mb-4">
                <div>
                  <p class="mr-2 font-bold text-C_blue-700 dark:text-C_blue-400">
                    種類
                  </p>
                  <p class="text-C_blue-500 dark:text-C_blue-200">
                    SaaS
                  </p>
                </div>
                <div class="flex items-center">
                  <span class="mr-1 text-xl font-bold text-C_green-500 material-icons">adjust</span>
                  <p class="font-bold text-C_blue-700 dark:text-C_blue-200">
                    進行中
                  </p>
                </div>
              </li>
              <li class="mb-4">
                <p class="mr-2 font-bold text-C_blue-700 dark:text-C_blue-400">
                  發起日
                </p>
                <p class="dark:text-C_blue-200">
                  2022.01.01
                </p>
              </li>
              <li class="mb-4">
                <p class="mr-2 font-bold text-C_blue-700 dark:text-C_blue-400">
                  結束日
                </p>
                <p class="dark:text-C_blue-200">
                  2022.03.01
                </p>
              </li>
              <li class="flex items-center mb-4">
                <span class="mr-2 text-3xl text-C_blue-400 material-icons">account_circle</span>
                <span class="text-xl dark:text-C_blue-200">3</span>
              </li>
              <li class="mb-4">
                <p class="flex overflow-y-hidden flex-wrap max-h-[68px]">
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Vue</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">C++</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">XD</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">C#</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Java</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Java</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Java</span>
                </p>
              </li>
              <li>
                <div class="flex justify-between w-full">
                  <button class="flex justify-center items-center py-2 mr-6 w-[100px] text-md font-bold text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400">
                    <span class="mr-1 material-icons">favorite_border</span>
                    收藏
                  </button>
                  <button class="flex justify-center items-center py-2 w-[100px] text-md font-bold text-white bg-C_green-600 hover:bg-C_green-500 rounded">
                    <span class="mr-1 material-icons">north_east</span>
                    查看
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-between py-10 px-6 mb-20 nowside-shadow">
          <!-- 【左】圖片 -->
          <div
            class="mr-10 w-[132px] h-[132px] rounded-full nowside-backgroundImage"
            style="background-image: url('https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80')"
          >
          </div>
          <!-- 【中】內容 -->
          <div class="mr-6 w-[482px]">
            <ul class="text-C_blue-800">
              <li class="mb-4">
                <p class="text-xl font-bold text-C_blue-700 dark:text-C_blue-400">
                  家務分配
                </p>
              </li>
              <li class="mb-6">
                <p class="mb-1 text-lg font-bold text-C_blue-700 dark:text-C_blue-400">
                  專案內容
                </p>
                <p class="overflow-y-hidden max-h-[160px] dark:text-C_blue-200">
                  自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。
                </p>
              </li>
              <li>
                <p class="font-bold text-C_blue-700 dark:text-C_blue-400">
                  媒合期限
                </p>　
                <p class="dark:text-C_blue-200">
                  2022.01.02
                </p>
              </li>
            </ul>
          </div>
          <!-- 【右】狀態 -->
          <div class="w-[256px]">
            <ul class="text-C_blue-800">
              <li class="flex justify-between mb-4">
                <div>
                  <p class="mr-2 font-bold text-C_blue-700 dark:text-C_blue-400">
                    種類
                  </p>
                  <p class="text-C_blue-500 dark:text-C_blue-200">
                    SaaS
                  </p>
                </div>
                <div class="flex items-center">
                  <span class="mr-1 text-xl font-bold text-C_green-500 material-icons">adjust</span>
                  <p class="font-bold text-C_blue-700 dark:text-C_blue-200">
                    進行中
                  </p>
                </div>
              </li>
              <li class="mb-4">
                <p class="mr-2 font-bold text-C_blue-700 dark:text-C_blue-400">
                  發起日
                </p>
                <p class="dark:text-C_blue-200">
                  2022.01.01
                </p>
              </li>
              <li class="mb-4">
                <p class="mr-2 font-bold text-C_blue-700 dark:text-C_blue-400">
                  結束日
                </p>
                <p class="dark:text-C_blue-200">
                  2022.03.01
                </p>
              </li>
              <li class="flex items-center mb-4">
                <span class="mr-2 text-3xl text-C_blue-400 material-icons">account_circle</span>
                <span class="text-xl dark:text-C_blue-200">3</span>
              </li>
              <li class="mb-4">
                <p class="flex overflow-y-hidden flex-wrap max-h-[68px]">
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Vue</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">C++</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">XD</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">C#</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Java</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Java</span>
                  <span class="px-4 mr-2 mb-4 bg-C_blue-200 rounded-sm">Java</span>
                </p>
              </li>
              <li>
                <div class="flex justify-between w-full">
                  <button class="flex justify-center items-center py-2 mr-6 w-[100px] text-md font-bold text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400">
                    <span class="mr-1 material-icons">favorite_border</span>
                    收藏
                  </button>
                  <button class="flex justify-center items-center py-2 w-[100px] text-md font-bold text-white bg-C_green-600 hover:bg-C_green-500 rounded">
                    <span class="mr-1 material-icons">north_east</span>
                    查看
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!-- 分頁 -->
      <section>
      </section>
    </div>
  </article>
</template>
