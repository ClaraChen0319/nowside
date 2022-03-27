<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { S_getUserInfo } from '@/http/api';

export default {
  name: 'AccountView',
  components: {
    Header, Footer,
  },
  data() {
    return {
      accountParams: {
        nickName: 'Crystal Kay',
        gender: '女',
        account: 'christie0319@gmail.com',
        password: '',
        fb: 'http://christie0319/profile.com',
        ig: 'http://christie0319/profile.com',
        profileWebsite: 'http://christie0319/profile.com',
        contactTime: '9:00~12:00 PM',
        workState: '職業倦怠中，力拼轉職尋求新機會',
        language: '英語 / 中文 / 法文',
        company: '火箭數位行銷公司',
        industry: '設計業',
        position: '萬能雜工',
        jobDescription: '設計小菜雞',
        skills: '',
        selfIntroduction: '目前在接案公司任職，是位菜鳥設計師～ 想尋找跟我一起做有趣專案的人，我提供設計稿，你提供技術，大家合作好棒棒 \^0^/',
      },
    };
  },
  computed: {},
  mounted() {
    this.getAccountParams();
  },
  methods: {
    getAccountParams(){
      S_getUserInfo().then(res =>{
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
}
</script>

<template>
  <Header></Header>
  <div
    class="py-[180px] w-full h-full"
    style="background-image: linear-gradient(45deg, #DFF5F1 5% , #ffffff 40%, #A7CBEA 150%); background-attachment: fixed;"
  >
    <!-- 上半部兩個區塊 -->
    <div class="flex justify-between mb-[72px] nowside-container-lg">
      <!-- 大頭貼 + 選單 -->
      <div class="flex flex-col items-center p-14 nowside-container-sm nowside-shadow">
        <div
          class="mb-8 w-[200px] h-[200px] rounded-full nowside-backgroundImage"
          style="background-image: url('https://lh3.googleusercontent.com/bbR_o6X9VgjiJKsRcu-ESXwz5M9do7eFs4CSUvgPCpmxe7pm8d6jw4s5XLcDBIFfhTbRo-qKMljPJ6Y=w1920-h800-p-l90-rj')"
        ></div>
        <ul class="text-lg text-center text-C_blue-700">
          <li class="mb-6 font-bold">
            Crystal Kay
          </li>
          <li class="mb-6 hover:text-C_blue-400">
            <button class="font-bold">
              個人資料
            </button>
          </li>
          <li class="mb-6 hover:text-C_blue-400">
            <button class="font-bold">
              發起的專案
            </button>
          </li>
          <li class="mb-6 hover:text-C_blue-400">
            <button class="font-bold">
              參與的專案
            </button>
          </li>
          <li class="mb-6 hover:text-C_blue-400">
            <button class="font-bold">
              收藏的專案
            </button>
          </li>
          <li class=" hover:text-C_blue-400">
            <button class="font-bold">
              通知
            </button>
          </li>
        </ul>
      </div>
      <!-- 個人資料 -->
      <div class="flex flex-col items-end py-7 px-10 nowside-container-md nowside-shadow">
        <!-- 寬度撐滿 -->
        <div class="mb-12 w-full text-xl font-bold text-C_blue-600 border-b-2 border-C_blue-400">
          個人資料
        </div>
        <!-- 寬度 854px 靠右 -->
        <div class="w-[854px]">
          <form class="flex flex-nowrap justify-between mb-12 h-[40px]">
            <div class="flex justify-between items-center w-[606px]">
              <label
                for="nickName"
                class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
              >暱稱</label>
              <input
                id="nickName"
                v-model="accountParams.nickName"
                name="nickName" 
                type="text"
                class="nowside-input"
                disabled
              >
            </div>
            <div class="flex justify-between items-center w-[224px]">
              <label
                for="gender"
                class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
              >性別</label>
              <input
                id="gender"
                v-model="accountParams.gender"
                name="gender" 
                type="text"
                class="nowside-input"
                disabled
              >
            </div>
          </form>
          <form class="mb-12 h-[40px]">
            <div class="flex justify-between items-center">
              <label
                for="account"
                class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
              >信箱</label>
              <input
                id="account"
                v-model="accountParams.account"
                name="account" 
                type="text"
                class="nowside-input"
                disabled
              >
            </div>
          </form>
          <form class="mb-12 h-[40px]">
            <div class="flex justify-between items-center">
              <label
                for="fb"
                class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
              >FB</label>
              <input
                id="fb"
                v-model="accountParams.fb"
                name="fb" 
                type="text"
                class="nowside-input"
                disabled
              >
            </div>
          </form>
          <form class="mb-12 h-[40px]">
            <div class="flex justify-between items-center">
              <label
                for="ig"
                class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
              >IG</label>
              <input
                id="ig"
                v-model="accountParams.ig"
                name="ig" 
                type="text"
                class="nowside-input"
                disabled
              >
            </div>
          </form>
          <form class="mb-12 h-[40px]">
            <div class="flex justify-between items-center">
              <label
                for="profileWebsite"
                class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
              >個人網站</label>
              <input
                id="profileWebsite"
                v-model="accountParams.profileWebsite"
                name="profileWebsite" 
                type="text"
                class="nowside-input"
                disabled
              >
            </div>
          </form>
          <form class="h-[40px]">
            <div class="flex justify-between items-center">
              <label
                for="contactTime"
                class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
              >聯絡時間</label>
              <input
                id="contactTime"
                v-model="accountParams.contactTime"
                name="contactTime" 
                type="text"
                class="nowside-input"
                disabled
              >
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- 專業背景 -->
    <div class="flex flex-col items-end py-14 px-10 nowside-shadow nowside-container-lg">
      <!-- 寬度撐滿 -->
      <div class="mb-12 w-full text-xl font-bold text-C_blue-600 border-b-2 border-C_blue-400">
        專業背景
      </div>
      <!-- 寬度 1176px 靠右 -->
      <div class="mb-14 w-[1176px]">
        <form class="flex flex-nowrap justify-between mb-12 h-[40px]">
          <div class="flex justify-between items-center w-[728px]">
            <label
              for="workState"
              class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
            >目前狀態</label>
            <input
              id="workState"
              v-model="accountParams.workState"
              name="workState" 
              type="text"
              class="nowside-input"
              disabled
            >
          </div>
          <div class="flex justify-between items-center w-[424px]">
            <label
              for="language"
              class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
            >語言</label>
            <input
              id="language"
              v-model="accountParams.language"
              name="language" 
              type="text"
              class="nowside-input"
              disabled
            >
          </div>
        </form>
        <form class="flex flex-nowrap justify-between mb-12 h-[40px]">
          <div class="flex justify-between items-center w-[728px]">
            <label
              for="company"
              class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
            >公司</label>
            <input
              id="company"
              v-model="accountParams.company"
              name="company" 
              type="text"
              class="nowside-input"
              disabled
            >
          </div>
          <div class="flex justify-between items-center w-[424px]">
            <label
              for="industry"
              class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
            >產業</label>
            <input
              id="industry"
              v-model="accountParams.industry"
              name="industry" 
              type="text"
              class="nowside-input"
              disabled
            >
          </div>
        </form>
        <form class="flex flex-nowrap justify-between mb-12 h-[40px]">
          <div class="flex justify-between items-center w-[728px]">
            <label
              for="position"
              class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
            >工作內容</label>
            <input
              id="position"
              v-model="accountParams.position"
              name="position" 
              type="text"
              class="nowside-input"
              disabled
            >
          </div>
          <div class="flex justify-between items-center w-[424px]">
            <label
              for="jobDescription"
              class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
            >職務</label>
            <input
              id="jobDescription"
              v-model="accountParams.jobDescription"
              name="jobDescription" 
              type="text"
              class="nowside-input"
              disabled
            >
          </div>
        </form>
        <form class="mb-12">
          <div class="flex justify-between items-center">
            <label
              for="profileWebsite"
              class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
            >技能</label>
            <div class="p-2 w-full h-[140px] text-lg text-C_blue-600 bg-C_gray-100 rounded border border-C_gray-300">
              <div class="inline-block mr-4 bg-C_blue-200 rounded">
                　Vue　
                <span class="align-sub material-icons">
                  close
                </span>
              </div>
              <div class="inline-block mr-4 bg-C_blue-200 rounded">
                　C++　
                <span class="align-sub material-icons">
                  close
                </span>
              </div>
              <div class="inline-block mr-4 bg-C_blue-200 rounded">
                　MySQL　
                <span class="align-sub material-icons">
                  close
                </span>
              </div>
              <div class="inline-block mr-4 bg-C_blue-200 rounded">
                　Java　
                <span class="align-sub material-icons">
                  close
                </span>
              </div>
              <div class="inline-block mr-4 bg-C_blue-200 rounded">
                　PHP　
                <span class="align-sub material-icons">
                  close
                </span>
              </div>
            </div>
          </div>
        </form>
        <form>
          <div class="flex justify-between items-center">
            <label
              for="selfIntroduction"
              class="mr-5 w-[96px] text-lg font-bold text-C_blue-500"
            >自我介紹</label>
            <textarea
              id="selfIntroduction"
              v-model="accountParams.selfIntroduction"
              class="nowside-textarea"
              name="selfIntroduction"
              rows="5"
              maxlength="1000"
              disabled
            ></textarea>
          </div>
        </form>
      </div>
      <div class="flex justify-center w-full">
        <button class="nowside-button-white-md">
          取消
        </button>
        <button class="nowside-button-lightGreen-md">
          <span class="align-sub material-icons">
            edit
          </span>
          編輯
        </button>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
