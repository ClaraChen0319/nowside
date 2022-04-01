<script>
import { S_addProject, } from '@/http/api';
import moment from 'moment';

export default {
  name: 'Create',
  components: {},
  data() {
    return {
      projectParams: {
        // Id: 0, // 專案ID（不用顯示）
        ProjectName: '專案名稱',
        // ProjectContext: '',
        GroupPhoto: '',
        // InitDate: '', // 專案發起日（後端會賦值）
        // GroupDeadline: '', // 參加截止日（後端會賦值）
        // FinishedDeadline: '',
        // GroupNum: 0,
        // PartnerCondition: '',
        PartnerSkills: [],
        // ProjectTypeId: 0,
        // ProjectState: '', // 專案狀態（不用顯示）
        // MembersId: 0, // 發起人ID（不用顯示） 
      },
    };
  },
  computed: {
    // 參加截止日（當前時間 +7 天）
    groupDeadline() {
      return moment().add(7, 'days').format('YYYY.MM.DD');
    },
  },
  methods: {
    // 取得會員資料
    postProjectParams() {
      S_addProject(this.projectParams).then(res =>{
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 時間格式
    timeFormat(date) {
      const time = moment(date).format('YYYY.MM.DD');
      return time;
    },
  },
}
</script>

<template>
  <article class="py-[180px] w-full h-full">
    <div class="py-24 px-14 mb-28 nowside-container-lg nowside-shadow">
      <!-- 專案圖片 -->
      <section class="flex flex-col justify-center items-center mb-24">
        <div class="relative mb-20 h-[415px]">
          <div
            class="w-[415px] h-[415px] rounded-full shadow-xl dark:shadow-gray-800 nowside-backgroundImage"
            style="background-image: url('https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80')"
          ></div>
          <button
            class="flex absolute right-16 bottom-0 justify-center items-center w-[48px] h-[48px] bg-C_green-500 hover:bg-C_green-400 rounded-full border-4 border-white nowside-backgroundImage"
          >
            <span class="text-2xl text-white align-sub material-icons">monochrome_photos</span>
          </button>
        </div>
        <form class="flex items-center w-[415px]">
          <input
            id="ProjectName"
            v-model="projectParams.ProjectName"
            name="ProjectName"
            type="text"
            class="w-[383px] text-3xl font-medium text-center text-C_blue-400 dark:bg-C_black focus:outline-none focus:ring-0"
          >
          <span class="inline-block right-4 bottom-2 text-3xl text-C_green-500 rounded material-icons">edit</span>
        </form>
      </section>
      <!-- 專案詳細 -->
      <section>
        <ul>
          <!-- 專案種類 select + 團隊人數 select -->
          <li class="flex flex-nowrap justify-between mb-12 h-[40px]">
            <form class="flex justify-between items-center w-[570px]">
              <label
                for="jobDescription"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >專案種類</label>
              <input
                id="jobDescription"
                v-model="projectParams.ProjectTypeId"
                name="jobDescription" 
                type="text"
                class="nowside-input"
              >
            </form>
            <form class="flex justify-between items-center w-[570px]">
              <label
                for="position"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >團隊人數</label>
              <input
                id="position"
                v-model="projectParams.GroupNum"
                name="position"
                type="text"
                class="nowside-input"
              >
            </form>
          </li>
          <!-- 參加截止日 + 專案結束日 -->
          <li class="flex flex-nowrap justify-between mb-12 h-[40px]">
            <form class="flex justify-between items-center w-[570px]">
              <label
                for="position"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >參加<br>截止日</label>
              <input
                id="position"
                :value="groupDeadline"
                name="position" 
                type="text"
                class="nowside-input"
                disabled
              >
            </form>
            <form class="flex justify-between items-center w-[570px]">
              <label
                for="jobDescription"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >專案<br>結束日</label>
              <input
                id="jobDescription"
                v-model="projectParams.FinishedDeadline"
                name="jobDescription" 
                type="text"
                class="nowside-input"
              >
            </form>
          </li>
          <!-- 專案內容 -->
          <li class="flex justify-between items-center mb-12">
            <label
              for="selfIntroduction"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >專案內容</label>
            <textarea
              id="selfIntroduction"
              v-model="projectParams.ProjectContext"
              class="nowside-textarea"
              name="selfIntroduction"
              rows="5"
              maxlength="1000"
            ></textarea>
          </li>
          <!-- 夥伴條件 -->
          <li class="flex justify-between items-center mb-12">
            <label
              for="selfIntroduction"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >夥伴條件</label>
            <textarea
              id="selfIntroduction"
              v-model="projectParams.PartnerCondition"
              class="nowside-textarea"
              name="selfIntroduction"
              rows="5"
              maxlength="1000"
            ></textarea>
          </li>
          <!-- 夥伴技能 -->
          <li class="flex justify-between items-center mb-12">
            <label
              for="profileWebsite"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >夥伴技能</label>
            <div class="p-2 w-full h-[140px] text-lg text-C_blue-600 bg-C_gray-100 dark:bg-[#333333] rounded border border-C_gray-300 dark:border-C_gray-900">
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
          </li>
        </ul>
      </section>
    </div>
    <div>
      <!-- 按鈕 -->
      <section class="flex justify-center">
        <button class="py-2 mr-6 w-[196px] text-lg font-bold text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400 shadow-lg">
          <span class="align-sub material-icons">reply</span>
          回上一步
        </button>
        <button class="py-2 w-[196px] text-lg font-bold text-white bg-C_green-500 hover:bg-C_green-400 rounded shadow-lg">
          <span class="align-sub material-icons">ios_share</span>
          發起專案
        </button>
      </section>
    </div>
  </article>
</template>
