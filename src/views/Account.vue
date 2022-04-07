<script>
import { S_getUserInfo } from '@/http/api';

export default {
  name: 'Account',
  components: {},
  data() {
    return {
      accountParams: {
        ProfilePicture: '',
        NickName: '',
        Gender: '',
        Account: '',
        Fb: '',
        Ig: '',
        ProfileWebsite: '',
        ContactTime: '',
        WorkState: '',
        Language: '',
        Company: '',
        Industry: '',
        Position: '',
        JobDescription: '',
        Skills: [], // 無資料的話為 null
        SelfIntroduction: '',
      },
    };
  },
  computed: {},
  mounted() {
    this.getAccountParams();
  },
  methods: {
    // 取得會員資料
    getAccountParams() {
      S_getUserInfo().then(res =>{
        console.log('會員資料', res.data.userdata);
        this.accountParams = res.data.userdata;
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
}
</script>

<template>
  <article class="py-[180px] w-full h-full">
    <!-- 大頭貼 + 個人資料 -->
    <section class="flex justify-between mb-[72px] h-fit nowside-container-lg">
      <!-- 【左】大頭貼 + 選單 -->
      <div class="flex flex-col items-center p-14 nowside-container-sm nowside-shadow">
        <!-- 大頭貼 -->
        <div
          class="mb-8 w-[200px] h-[200px] rounded-full nowside-backgroundImage"
          :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/ProfilePicture/${accountParams.ProfilePicture}')` }"
        ></div>
        <!-- 選單 -->
        <ul class="text-lg text-center text-C_blue-700 dark:text-C_blue-400">
          <!-- 暱稱 -->
          <li class="mb-6 font-medium">
            {{ accountParams.NickName }}
          </li>
          <!-- 個人資料 -->
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <router-link
              class="font-medium"
              to="/account"
            >
              個人資料
            </router-link>
          </li>
          <!-- 發起的專案 -->
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <router-link
              class="font-medium"
              :to="{ name: 'AccountProject', params: { projectType: 'add', } }"
            >
              發起的專案
            </router-link>
          </li>
          <!-- 申請的專案 -->
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <router-link
              class="font-medium"
              :to="{ name: 'AccountProject', params: { projectType: 'apply', } }"
            >
              申請的專案
            </router-link>
          </li>
          <!-- 參與的專案 -->
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <router-link
              class="font-medium"
              :to="{ name: 'AccountProject', params: { projectType: 'attend', } }"
            >
              參與的專案
            </router-link>
          </li>
          <!-- 收藏的專案 -->
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <router-link
              class="font-medium"
              :to="{ name: 'AccountProject', params: { projectType: 'save', } }"
            >
              收藏的專案
            </router-link>
          </li>
          <!-- 通知 -->
          <li class=" hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <router-link
              class="font-medium"
              to="/accountmessage"
            >
              通知
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 【右】個人資料 -->
      <div class="flex flex-col justify-center items-end py-7 px-10 nowside-container-md nowside-shadow">
        <!-- 寬度撐滿 -->
        <div class="mb-12 w-full text-xl font-medium text-C_blue-600 border-b-2 border-C_blue-400">
          個人資料
        </div>
        <!-- 寬度 854px 靠右 -->
        <ul class="w-[854px]">
          <!-- 暱稱 + 性別 -->
          <li class="flex flex-nowrap justify-between mb-12 h-[40px]">
            <form class="flex justify-between items-center w-[606px]">
              <label
                for="nickName"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >暱稱</label>
              <input
                id="nickName"
                v-model="accountParams.NickName"
                name="nickName" 
                type="text"
                class="nowside-input"
                disabled
              >
            </form>
            <form class="flex justify-between items-center w-[224px]">
              <label
                for="gender"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >性別</label>
              <input
                id="gender"
                v-model="accountParams.Gender"
                name="gender" 
                type="text"
                class="nowside-input"
                disabled
              >
            </form>
          </li>
          <!-- 信箱 -->
          <li class="mb-12 h-[40px]">
            <form class="flex justify-between items-center">
              <label
                for="account"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >信箱</label>
              <input
                id="account"
                v-model="accountParams.Account"
                name="account"
                type="text"
                class="nowside-input"
                disabled
              >
            </form>
          </li>
          <!-- FB -->
          <li class="mb-12 h-[40px]">
            <form class="flex justify-between items-center">
              <label
                for="fb"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >FB</label>
              <input
                id="fb"
                v-model="accountParams.Fb"
                name="fb" 
                type="text"
                class="nowside-input"
                disabled
              >
            </form>
          </li>
          <!-- IG -->
          <li class="mb-12 h-[40px]">
            <form class="flex justify-between items-center">
              <label
                for="ig"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >IG</label>
              <input
                id="ig"
                v-model="accountParams.Ig"
                name="ig" 
                type="text"
                class="nowside-input"
                disabled
              >
            </form>
          </li>
          <!-- 個人網站 -->
          <li class="mb-12 h-[40px]">
            <form class="flex justify-between items-center">
              <label
                for="profileWebsite"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >個人網站</label>
              <input
                id="profileWebsite"
                v-model="accountParams.ProfileWebsite"
                name="profileWebsite" 
                type="text"
                class="nowside-input"
                disabled
              >
            </form>
          </li>
          <!-- 聯絡時間 -->
          <li class="h-[40px]">
            <form class="flex justify-between items-center">
              <label
                for="contactTime"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >聯絡時間</label>
              <input
                id="contactTime"
                v-model="accountParams.ContactTime"
                name="contactTime" 
                type="text"
                class="nowside-input"
                disabled
              >
            </form>
          </li>
        </ul>
      </div>
    </section>
    <!-- 專業背景 -->
    <section class="flex flex-col items-end py-14 px-10 nowside-shadow nowside-container-lg">
      <!-- 寬度撐滿 -->
      <div class="mb-12 w-full text-xl font-medium text-C_blue-600 border-b-2 border-C_blue-400">
        專業背景
      </div>
      <!-- 寬度 1176px 靠右 -->
      <ul class="mb-14 w-[1176px]">
        <!-- 目前狀態 + 語言 -->
        <li class="flex flex-nowrap justify-between mb-12 h-[40px]">
          <form class="flex justify-between items-center w-[728px]">
            <label
              for="workState"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >目前狀態</label>
            <input
              id="workState"
              v-model="accountParams.WorkState"
              name="workState" 
              type="text"
              class="nowside-input"
              disabled
            >
          </form>
          <form class="flex justify-between items-center w-[424px]">
            <label
              for="language"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >語言</label>
            <input
              id="language"
              v-model="accountParams.Language"
              name="language" 
              type="text"
              class="nowside-input"
              disabled
            >
          </form>
        </li>
        <!-- 公司 + 產業 -->
        <li class="flex flex-nowrap justify-between mb-12 h-[40px]">
          <form class="flex justify-between items-center w-[728px]">
            <label
              for="company"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >公司</label>
            <input
              id="company"
              v-model="accountParams.Company"
              name="company" 
              type="text"
              class="nowside-input"
              disabled
            >
          </form>
          <form class="flex justify-between items-center w-[424px]">
            <label
              for="industry"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >產業</label>
            <input
              id="industry"
              v-model="accountParams.Industry"
              name="industry" 
              type="text"
              class="nowside-input"
              disabled
            >
          </form>
        </li>
        <!-- 工作內容 + 職務 -->
        <li class="flex flex-nowrap justify-between mb-12 h-[40px]">
          <form class="flex justify-between items-center w-[728px]">
            <label
              for="position"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >工作內容</label>
            <input
              id="position"
              v-model="accountParams.Position"
              name="position" 
              type="text"
              class="nowside-input"
              disabled
            >
          </form>
          <form class="flex justify-between items-center w-[424px]">
            <label
              for="jobDescription"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >職務</label>
            <input
              id="jobDescription"
              v-model="accountParams.JobDescription"
              name="jobDescription" 
              type="text"
              class="nowside-input"
              disabled
            >
          </form>
        </li>
        <!-- 技能 -->
        <li class="mb-12">
          <form class="flex justify-between items-center">
            <label
              for="profileWebsite"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >技能</label>
            <div class="p-2 w-full h-[140px] text-lg text-C_blue-600 bg-C_gray-100 dark:bg-[#333333] rounded border border-C_gray-300 dark:border-C_gray-900">
              <div
                v-for="skill in accountParams.Skills"
                :key="skill.Id"
                class="inline-block mr-2 mb-4 bg-C_blue-200 rounded"
              >
                <span class="px-4">{{ skill.skill }}</span>
              </div>
            </div>
          </form>
        </li>
        <!-- 自我介紹 -->
        <li>
          <form class="flex justify-between items-center">
            <label
              for="selfIntroduction"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >自我介紹</label>
            <textarea
              id="selfIntroduction"
              v-model="accountParams.SelfIntroduction"
              class="nowside-textarea"
              name="selfIntroduction"
              rows="5"
              maxlength="1000"
              disabled
            ></textarea>
          </form>
        </li>
      </ul>
      <!-- 編輯按鈕 -->
      <div class="flex justify-center w-full">
        <router-link
          class="flex justify-center items-center nowside-button-lightGreen-md"
          to="/accountedit"
        >
          <span class="mr-1 material-icons">edit</span>
          編輯
        </router-link>
      </div>
    </section>
  </article>
</template>
