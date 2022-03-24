<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'ProjectView',
  components: {
    Header, Footer,
  },
  data() {
    return {
      projectDeatilParams: {},
      messageParams: {
        title: '我有問題想請問～～',
        content: '多麼漢化你們的接受，歐美過來轉變睡覺魔獸顯然可以只要神經病人屬性法國，也沒來自馬上外資自動措施，標誌無關床上諮詢畢業南方一副也要流行，良好我把打算你們的證件秘密對手特徵我真溫度，陽光民眾此外健康，既然註冊這樣挑戰，分鐘放下原本最好大眾協助這個問題天下一道位置，歐美做好關於開發商有關部門樹林精品碩士沒有拿出心裡面向，深入口氣的人前面節目過程花蓮共享聯想表情休閒出現在統計，而是點擊數故事背景無限優秀下午，能量添加時間發展高雄練習保障準備貿易，維修嘉義平均一路優勢性格垃圾也就是閲讀含有難以零售校長家園，廣大很難歌詞哥哥手機鈴聲認為一年對付婚姻，政府最快上有記者走了一套化工關心引用這次統計，美容兒子。',
      },
    };
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
    <div class="flex relative flex-col py-20 px-24 mb-28 nowside-container nowside-shadow">
      <div class="flex justify-center items-center mb-24 w-full">
        <div
          class="w-[304px] h-[304px] rounded-full shadow-xl nowside-backgroundImage"
          style="background-image: url('https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80')"
        ></div>
        <div>
          <ul class="absolute top-20 right-12 w-[256px]">
            <li class="mb-4">
              <div class="flex justify-between w-full">
                <button class="flex justify-center items-center py-2 mr-6 w-[100px] text-md font-bold text-blue-700 bg-white hover:bg-gray-100 rounded border-2 border-blue-400">
                  <span class="mr-1 material-icons">delete_forever</span>
                  刪除
                </button>
                <button class="flex justify-center items-center py-2 w-[100px] text-md font-bold text-white bg-green-400 hover:bg-green-500 rounded">
                  <span class="mr-1 material-icons">restart_alt</span>
                  重啟
                </button>
              </div>
            </li>
            <li class=" flex justify-between mb-4">
              <div>
                <span class="mr-2 font-bold text-blue-700">種類</span>
                <span class="text-blue-500">SaaS</span>
              </div>
              <div class="flex items-center">
                <span class="mr-1 text-xl font-bold text-red material-icons">adjust</span>
                <span class="font-bold text-blue-700">已關閉</span>
              </div>
            </li>
            <li class="mb-4">
              <span class="mr-2 font-bold text-blue-700">發起日</span>
              <span>2022.01.01</span>
            </li>
            <li class="mb-4">
              <span class="mr-4 font-bold text-blue-700">結束日</span>
              <span>2022.03.01</span>
            </li>
            <li class="flex items-center">
              <span class="mr-2 text-3xl text-blue-400 material-icons">account_circle</span>
              <span class="text-xl">3</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul class="text-blue-800">
          <li class="mb-10">
            <span class="inline-block mb-4 text-lg font-bold text-blue-700">專案名稱</span><br>
            <span>家務分配</span>
          </li>
          <li class="mb-10">
            <span class="inline-block mb-4 text-lg font-bold text-blue-700">專案內容</span><br>
            <span>自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。<br>
              自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。<br>
              自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。自動將家務分配給家庭成員，根據任務的大小平衡工作量，並管理為未完成的工作發送提醒。響應式設計，無需安裝。</span>
          </li>
          <li class="mb-10">
            <span class="inline-block mb-4 text-lg font-bold text-blue-700">夥伴條件</span><br>
            <span>希望夥伴跟我依樣是夜貓子，在夜晚工作效率特別好，並且熟悉Notion作為專案管理工具。</span>
          </li>
          <li class="mb-10">
            <span class="inline-block mb-4 text-lg font-bold text-blue-700">夥伴技能</span><br>
            <div class="flex flex-wrap">
              <span class="px-4 mr-2 mb-4 h-6 bg-blue-200 rounded-[4px]">Vue</span>
              <span class="px-4 mr-2 mb-4 h-6 bg-blue-200 rounded-[4px]">C++</span>
              <span class="px-4 mr-2 mb-4 h-6 bg-blue-200 rounded-[4px]">XD</span>
              <span class="px-4 mr-2 mb-4 h-6 bg-blue-200 rounded-[4px]">C#</span>
              <span class="px-4 mr-2 mb-4 h-6 bg-blue-200 rounded-[4px]">Java</span>
              <span class="px-4 mr-2 mb-4 h-6 bg-blue-200 rounded-[4px]">PHP</span>
              <span class="px-4 mr-2 mb-4 h-6 bg-blue-200 rounded-[4px]">MySQL</span>
              <span class="px-4 mr-2 mb-4 h-6 bg-blue-200 rounded-[4px]">Notion</span>
            </div>
          </li>
          <li class="mb-10">
            <span class="inline-block mr-8 mb-4 text-lg font-bold text-blue-700">媒合期限</span>
            <span>2022.01.02</span>
          </li>
          <li class="mb-10">
            <span class="inline-block mr-8 mb-4 text-lg font-bold text-blue-700">團隊人數</span>
            <span>3人</span>
          </li>
          <li class="mb-10">
            <span class="inline-block mr-8 mb-4 text-lg font-bold text-blue-700">分享</span>
            <div class="inline-block">
              <button class="flex justify-center items-center py-2 px-14 text-lg font-bold text-white bg-blue-400 hover:bg-blue-500 rounded">
                複製連結
              </button>
            </div>
          </li>
          <li>
            <span class="inline-block mb-9 text-lg font-bold text-blue-700">參加人員</span><br>
            <ul class="flex flex-wrap items-center">
              <li class="mr-6 mb-10 w-[196px]">
                <div class="flex items-center">
                  <div
                    class="mr-6 w-[72px] h-[72px] rounded-full nowside-backgroundImage"
                    style="background-image: url('https://lh3.googleusercontent.com/bbR_o6X9VgjiJKsRcu-ESXwz5M9do7eFs4CSUvgPCpmxe7pm8d6jw4s5XLcDBIFfhTbRo-qKMljPJ6Y=w1920-h800-p-l90-rj')"
                  ></div>
                  <div>
                    <p class="mb-1 w-[100px] font-bold text-blue-700 truncate">
                      Crystal Kay
                    </p>
                    <p class="font-bold text-blue-500 hover:text-green-500">
                      發起人
                    </p>
                  </div>
                </div>
              </li>
              <li class="mr-6 mb-10 w-[196px]">
                <div class="flex items-center">
                  <div
                    class="mr-6 w-[72px] h-[72px] rounded-full nowside-backgroundImage"
                    style="background-image: url('https://lh3.googleusercontent.com/F1v7ifmtVt3DBJA43ehLfcPW4P3YkMWBWW_Rqj_nmBmlsUtUZ5CkECVOoaLViu1ibZcrCOaen7bClqoS=w1920-h800-p-l90-rj')"
                  ></div>
                  <div>
                    <p class="mb-1 w-[100px] font-bold text-blue-700 truncate">
                      May J.
                    </p>
                    <p class="font-bold text-blue-500 hover:text-green-500">
                      組員
                    </p>
                  </div>
                </div>
              </li>
              <li class="mr-6 mb-10 w-[196px]">
                <div class="flex items-center">
                  <div
                    class="mr-6 w-[72px] h-[72px] rounded-full nowside-backgroundImage"
                    style="background-image: url('https://lh3.googleusercontent.com/FvstfbmQ69b2yTHap_Ez3rUfwq4MY3EM40VCjyKh0OhpcelZVzUYofLzJIUbsuxQtjJhmInYPKBY4g=w1920-h800-p-l90-rj')"
                  ></div>
                  <div>
                    <p class="mb-1 w-[100px] font-bold text-blue-700 truncate">
                      Daichi Miura
                    </p>
                    <p class="font-bold text-blue-500 hover:text-green-500">
                      組員
                    </p>
                  </div>
                </div>
              </li>
              <li class="mr-6 mb-10 w-[196px]">
                <div class="flex items-center">
                  <div
                    class="mr-6 w-[72px] h-[72px] rounded-full nowside-backgroundImage"
                    style="background-image: url('https://lh3.googleusercontent.com/k3R1thXUw5tEGHPHnsi66I-al08qAYuVT0ux_gFXeRSKcw9tRdGsjRKFgOqVIhMOFR3w9KIOD9e10MU=w1920-h800-p-l90-rj')"
                  ></div>
                  <div>
                    <p class="mb-1 w-[100px] font-bold text-blue-700 truncate">
                      Yuuri
                    </p>
                    <p class="font-bold text-blue-500 hover:text-green-500">
                      組員
                    </p>
                  </div>
                </div>
              </li>
              <li class="mr-6 mb-10 w-[196px]">
                <div class="flex items-center">
                  <div
                    class="mr-6 w-[72px] h-[72px] rounded-full nowside-backgroundImage"
                    style="background-image: url('https://lh3.googleusercontent.com/Mx-So4HrT7mwKRyn_JfzJQ6nWanKub_YqfN1-Xuhu1m2D5vtSTt0xPaRlAGb_7QUEWJirIs02afkVZU=w1920-h800-p-l90-rj')"
                  ></div>
                  <div>
                    <p class="mb-1 w-[100px] font-bold text-blue-700 truncate">
                      Hoshino Gen
                    </p>
                    <p class="font-bold text-blue-500 hover:text-green-500">
                      組員
                    </p>
                  </div>
                </div>
              </li>
              <li class="mr-6 mb-10 w-[196px]">
                <div class="flex items-center">
                  <div
                    class="mr-6 w-[72px] h-[72px] rounded-full nowside-backgroundImage"
                    style="background-image: url('https://lh3.googleusercontent.com/BY5XcaHlTixfqXcnH51Sy3AkMxDA5zhftTXPnST2OHOae3UoGkuNdEmAIabvt8Enl-z4sHlVXj_aZQ=w1920-h800-p-l90-rj')"
                  ></div>
                  <div>
                    <p class="mb-1 w-[100px] font-bold text-blue-700 truncate">
                      Nishino Kana
                    </p>
                    <p class="font-bold text-blue-500 hover:text-green-500">
                      組員
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex relative flex-col py-20 px-24 nowside-container nowside-shadow">
      <div class="mb-12">
        <span class="inline-block mb-14 text-lg font-bold text-blue-700">留言</span><br>
        <ul>
          <li class="mb-16">
            <div class="flex">
              <div class="flex flex-col justify-start items-center">
                <div
                  class="mx-6 mb-2 w-[72px] h-[72px] rounded-full nowside-backgroundImage"
                  style="background-image: url('https://lh3.googleusercontent.com/bbR_o6X9VgjiJKsRcu-ESXwz5M9do7eFs4CSUvgPCpmxe7pm8d6jw4s5XLcDBIFfhTbRo-qKMljPJ6Y=w1920-h800-p-l90-rj')"
                ></div>
                <p class="text-sm font-bold text-blue-700">
                  Crystal Kay
                </p>
              </div>
              <div>
                <p class="mb-4 font-bold text-blue-500">
                  我是PM
                </p>
                <p class="mb-4 text-sm font-bold text-blue-700">
                  我對你的專案超有興趣，+1 ！
                </p>
                <p class="mb-4 text-xs font-bold text-blue-700">
                  2022.01.01
                </p>
              </div>
            </div>
          </li>
          <li class="mb-16">
            <div class="flex">
              <div class="flex flex-col justify-start items-center">
                <div
                  class="mx-6 mb-2 w-[72px] h-[72px] rounded-full nowside-backgroundImage"
                  style="background-image: url('https://lh3.googleusercontent.com/k3R1thXUw5tEGHPHnsi66I-al08qAYuVT0ux_gFXeRSKcw9tRdGsjRKFgOqVIhMOFR3w9KIOD9e10MU=w1920-h800-p-l90-rj')"
                ></div>
                <p class="text-sm font-bold text-blue-700">
                  Yuuri
                </p>
              </div>
              <div>
                <p class="mb-4 font-bold text-blue-500">
                  酷東西
                </p>
                <p class="mb-4 text-sm font-bold text-blue-700">
                  不用為家事吵架，這酷東西我想要做～
                </p>
                <p class="mb-4 text-xs font-bold text-blue-700">
                  2022.01.01
                </p>
              </div>
            </div>
          </li>
          <li class="mb-16">
            <div class="flex">
              <div class="flex flex-col justify-start items-center">
                <div
                  class="mx-6 mb-2 w-[72px] h-[72px] rounded-full nowside-backgroundImage"
                  style="background-image: url('https://lh3.googleusercontent.com/BY5XcaHlTixfqXcnH51Sy3AkMxDA5zhftTXPnST2OHOae3UoGkuNdEmAIabvt8Enl-z4sHlVXj_aZQ=w1920-h800-p-l90-rj')"
                ></div>
                <p class="text-sm font-bold text-blue-700">
                  Nishino Kana
                </p>
              </div>
              <div>
                <p class="mb-4 font-bold text-blue-500">
                  選我選我！
                </p>
                <p class="mb-4 text-sm font-bold text-blue-700">
                  多麼漢化你們的接受，歐美過來轉變睡覺魔獸顯然可以只要神經病人屬性法國，也沒來自馬上外資自動措施，標誌無關床上諮詢畢業南方一副也要流行，良好我把打算你們的證件秘密對手特徵我真溫度，陽光民眾此外健康，既然註冊這樣挑戰，分鐘放下原本最好大眾協助這個問題天下一道位置，歐美做好關於開發商有關部門樹林精品碩士沒有拿出心裡面向，深入口氣的人前面節目過程花蓮共享聯想表情休閒出現在統計，而是點擊數故事背景無限優秀下午，能量添加時間發展高雄練習保障準備貿易，維修嘉義平均一路優勢性格垃圾也就是閲讀含有難以零售校長家園，廣大很難歌詞哥哥手機鈴聲認為一年對付婚姻，政府最快上有記者走了一套化工關心引用這次統計，美容兒子。
                </p>
                <p class="mb-4 text-xs font-bold text-blue-700">
                  2022.01.01
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li class="flex flex-col mb-12">
            <label
              for="title"
              class="mb-4 text-lg font-bold text-blue-500"
            >留言標題</label>
            <input
              id="title"
              v-model="messageParams.title"
              name="title" 
              type="text"
              class="nowside-accountInput"
            >
          </li>
          <li class="flex flex-col">
            <label
              for="content"
              class="mb-4 text-lg font-bold text-blue-500"
            >留言標題</label>
            <textarea
              id="content"
              v-model="messageParams.content"
              class="nowside-accountTextarea"
              name="content"
              rows="8"
              maxlength="1000"
            ></textarea>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
