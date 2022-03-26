<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Project',
  components: {
    Header, Footer,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
}
</script>

<template>
  <Header></Header>
  <div
    class="py-[180px] w-full h-full"
    style="background-image: linear-gradient(45deg, #DFF5F1 5% , #ffffff 40%, #A7CBEA 150%); background-attachment: fixed;"
  >
    <div class="flex flex-col justify-center items-center py-12 mb-[58px] h-[232px] nowside-container-lg nowside-shadow">
      <div class="w-[1076px]">
        <label class="block relative mb-10">
          <span class="flex absolute inset-y-0 left-0 items-center pl-2">
            <span
              class="ml-12 text-3xl text-C_green-500 material-icons"
            >search</span>
          </span>
          <input
            class="block py-3 pr-3 pl-28 w-full placeholder:italic placeholder:text-C_gray-700 bg-white rounded-full border-2 border-C_blue-500 focus:border-C_green-500 focus:outline-none focus:ring-1 focus:ring-C_green-500 shadow-sm"
            placeholder="搜尋感興趣的 side project"
            type="text"
            name="search"
          >
        </label>
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
    </div>
    <div class="mb-[32px] nowside-container-lg">
      <ul class="flex justify-end">
        <li>
          <button class="text-lg font-bold text-C_blue-700 hover:text-C_blue-500">
            最新
          </button>
        </li>
        <li class="ml-10">
          <button class="text-lg font-bold text-C_blue-700 hover:text-C_blue-500">
            熱門
          </button>
        </li>
        <li class="ml-10">
          <button class="text-lg font-bold text-C_blue-700 hover:text-C_blue-500">
            組團
          </button>
        </li>
      </ul>
    </div>
    <div class="flex justify-center items-start py-10 px-6 mb-20 nowside-container-lg nowside-shadow">
      <div
        class="mr-10 w-[132px] h-[132px] rounded-full nowside-backgroundImage"
        style="background-image: url('https://images.unsplash.com/photo-1608303588026-884930af2559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=403&q=80')"
      >
      </div>
      <div class="mr-10 w-[780px]">
        <ul class="text-C_blue-800">
          <li class="mb-6 h-[64px]">
            <span class="text-lg font-bold text-C_blue-700">專案名稱</span><br>
            <span>家務分配</span>
          </li>
          <li class="mb-6 h-[215px]">
            <span class="text-lg font-bold text-C_blue-700">專案內容</span><br>
            <span>自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。</span>
          </li>
          <li>
            <span class="font-bold text-C_blue-700">媒合期限</span>　
            <span>2022.01.02</span>
          </li>
        </ul>
      </div>
      <div class="w-[256px]">
        <ul class="text-C_blue-800">
          <li class="flex justify-between mb-4">
            <div>
              <span class="mr-2 font-bold text-C_blue-700">種類</span>
              <span class="text-C_blue-500">SaaS</span>
            </div>
            <div class="flex items-center">
              <span class="mr-1 text-xl font-bold text-C_green-500 material-icons">adjust</span>
              <span class="font-bold text-C_blue-700">進行中</span>
            </div>
          </li>
          <li class="mb-4">
            <span class="mr-2 font-bold text-C_blue-700">發起日</span>
            <span>2022.01.01</span>
          </li>
          <li class="mb-4">
            <span class="mr-4 font-bold text-C_blue-700">結束日</span>
            <span>2022.03.01</span>
          </li>
          <li class="flex items-center mb-4">
            <span class="mr-2 text-3xl text-C_blue-400 material-icons">account_circle</span>
            <span class="text-xl">3</span>
          </li>
          <li class="flex flex-wrap mb-4 h-[120px]">
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">Vue</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">C++</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">XD</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">C#</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">Java</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">PHP</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">MySQL</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">Notion</span>
          </li>
          <li>
            <div class="flex justify-between w-full">
              <button class="flex justify-center items-center py-2 mr-6 w-[100px] text-md font-bold text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400">
                <span class="mr-1 material-icons">favorite_border</span>
                收藏
              </button>
              <button class="flex justify-center items-center py-2 w-[100px] text-md font-bold text-white bg-C_green-400 hover:bg-C_green-500 rounded">
                <span class="mr-1 material-icons">north_east</span>
                查看
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center items-start py-10 px-6 mb-20 nowside-container-lg nowside-shadow">
      <div
        class="mr-10 w-[132px] h-[132px] rounded-full nowside-backgroundImage"
        style="background-image: url('https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')"
      >
      </div>
      <div class="mr-10 w-[780px]">
        <ul class="text-C_blue-800">
          <li class="mb-6 h-[64px]">
            <span class="text-lg font-bold text-C_blue-700">專案名稱</span><br>
            <span>虛擬莫吉托</span>
          </li>
          <li class="mb-6 h-[215px]">
            <span class="text-lg font-bold text-C_blue-700">專案內容</span><br>
            <span>用於虛擬活動、遠程團隊、社交聚會和黑客馬拉鬆的精選工具目錄。</span>
          </li>
          <li>
            <span class="font-bold text-C_blue-700">媒合期限</span>　
            <span>2022.01.02</span>
          </li>
        </ul>
      </div>
      <div class="w-[256px]">
        <ul class="text-C_blue-800">
          <li class="flex justify-between mb-4">
            <div>
              <span class="mr-2 font-bold text-C_blue-700">種類</span>
              <span class="text-C_blue-500">SaaS</span>
            </div>
            <div class="flex items-center">
              <span class="mr-1 text-xl font-bold text-C_gray-500 material-icons">adjust</span>
              <span class="font-bold text-C_blue-700">已關閉</span>
            </div>
          </li>
          <li class="mb-4">
            <span class="mr-2 font-bold text-C_blue-700">發起日</span>
            <span>2022.01.01</span>
          </li>
          <li class="mb-4">
            <span class="mr-4 font-bold text-C_blue-700">結束日</span>
            <span>2022.03.01</span>
          </li>
          <li class="flex items-center mb-4">
            <span class="mr-2 text-3xl text-C_blue-400 material-icons">account_circle</span>
            <span class="text-xl">2</span>
          </li>
          <li class="flex flex-wrap mb-4 h-[120px]">
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">X.ai</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">Softr</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">Airtable</span>
          </li>
          <li>
            <div class="flex justify-between w-full">
              <button class="flex justify-center items-center py-2 mr-6 w-[100px] text-md font-bold text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400">
                <span class="mr-1 material-icons">favorite_border</span>
                收藏
              </button>
              <button class="flex justify-center items-center py-2 w-[100px] text-md font-bold text-white bg-C_green-400 hover:bg-C_green-500 rounded">
                <span class="mr-1 material-icons">north_east</span>
                查看
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center items-start py-10 px-6 mb-20 nowside-container-lg nowside-shadow">
      <div
        class="mr-10 w-[132px] h-[132px] rounded-full nowside-backgroundImage"
        style="background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
      >
      </div>
      <div class="mr-10 w-[780px]">
        <ul class="text-C_blue-800">
          <li class="mb-6 h-[64px]">
            <span class="text-lg font-bold text-C_blue-700">專案名稱</span><br>
            <span>記住</span>
          </li>
          <li class="mb-6 h-[215px]">
            <span class="text-lg font-bold text-C_blue-700">專案內容</span><br>
            <span>用這是一個平台，可幫助您從新興國家的完全合格的治療師那裡獲得負擔得起的心理保健服務。尋找心理健康護理非常棘手。成本很高，但也很難找到和你說同一種語言的人（字面意思！）<br>
              所以我們創建了 Evermind。這是一個平台，可幫助您從新興國家的完全合格的治療師那裡獲得負擔得起的心理保健服務。
              而且因為我們支付給治療師的費用比他們在當地國家得到的更多，我們也可以幫助他們支持當地經濟。</span>
          </li>
          <li>
            <span class="font-bold text-C_blue-700">媒合期限</span>　
            <span>2022.01.02</span>
          </li>
        </ul>
      </div>
      <div class="w-[256px]">
        <ul class="text-C_blue-800">
          <li class="flex justify-between mb-4">
            <div>
              <span class="mr-2 font-bold text-C_blue-700">種類</span>
              <span class="text-C_blue-500">SaaS</span>
            </div>
            <div class="flex items-center">
              <span class="mr-1 text-xl font-bold text-orange-500 material-icons">adjust</span>
              <span class="font-bold text-C_blue-700">審核中</span>
            </div>
          </li>
          <li class="mb-4">
            <span class="mr-2 font-bold text-C_blue-700">發起日</span>
            <span>2022.01.01</span>
          </li>
          <li class="mb-4">
            <span class="mr-4 font-bold text-C_blue-700">結束日</span>
            <span>2022.03.01</span>
          </li>
          <li class="flex items-center mb-4">
            <span class="mr-2 text-3xl text-C_blue-400 material-icons">account_circle</span>
            <span class="text-xl">6</span>
          </li>
          <li class="flex flex-wrap mb-4 h-[120px]">
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">Notion</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">Figma</span>
            <span class="px-4 mr-2 mb-4 h-6 bg-C_blue-200 rounded-[4px]">Bltly</span>
          </li>
          <li>
            <div class="flex justify-between w-full">
              <button class="flex justify-center items-center py-2 mr-6 w-[100px] text-md font-bold text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400">
                <span class="mr-1 material-icons">favorite_border</span>
                收藏
              </button>
              <button class="flex justify-center items-center py-2 w-[100px] text-md font-bold text-white bg-C_green-400 hover:bg-C_green-500 rounded">
                <span class="mr-1 material-icons">north_east</span>
                查看
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
