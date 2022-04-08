<script>
import { S_getSkills, S_getProjectClass, S_addProject, S_uploadGroupPic, } from '@/http/api';
import moment from 'moment';

export default {
  name: 'Create',
  components: {},
  data() {
    return {
      skillsData: [
        {
          Id: 0,
          skill: '',
        },
      ],
      classData: [
        {
          Id: 0,
          ProjectType: '',
        },
      ],
      projectParams: {
        Id: 0, // 專案ID（不用顯示）
        ProjectName: '專案名稱',
        ProjectContext: '',
        GroupPhoto: '',
        InitDate: '', // 專案發起日（後端賦值）
        GroupDeadline: '', // 參加截止日（後端賦值）
        FinishedDeadline: '',
        GroupNum: 0,
        PartnerCondition: '',
        PartnerSkills: [0,], // 一定要有值（數字陣列）
        ProjectTypeId: 0,
        ProjectState: '', // 專案狀態（不用顯示）
        MembersId: 0, // 發起人ID（不用顯示） 
      },
    };
  },
  computed: {
    // 參加截止日（當前時間 +7 天）
    groupDeadline() {
      return moment().add(7, 'days').format('YYYY.MM.DD');
    },
    // 專案結束日 ISO 時間格式
    finishedDeadline: {
      set(newVal) {
        const formatDateResult = new Date(newVal).toISOString();
        console.log('set', formatDateResult);
        this.projectParams.FinishedDeadline = formatDateResult;
      },
      get() {
        return this.projectParams.FinishedDeadline;
      },
    },
  },
  mounted() {
    this.getSkillsParams();
    this.getClassParams();
  },
  methods: {
    // 取得技能列表
    getSkillsParams() {
      S_getSkills().then(res =>{
        console.log('技能列表', res.data.Skilldata);
        this.skillsData = res.data.Skilldata;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 取得專案類別列表
    getClassParams() {
      S_getProjectClass().then(res =>{
        console.log('專案類別列表', res.data.Classdata);
        this.classData = res.data.Classdata;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 新增專案資料 圖片上傳
    uploadImage(e) {
      console.log(e.target.files[0]);
      const formdata = new FormData;
      formdata.append(e.target.files[0].name, e.target.files[0]);
      
      S_uploadGroupPic(formdata).then(res =>{
        console.log('新增專案資料 圖片上傳', res.data);
        this.projectParams.GroupPhoto = res.data.data.ProfilePicture;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 新增專案資料
    postProjectParams() {
      S_addProject(this.projectParams).then(res =>{
        console.log('新增專案資料', res);
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
            :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${projectParams.GroupPhoto}')` }"
          ></div>
          <form>
            <input
              ref="uploadImage"
              type="file"
              class="hidden"
              @change="uploadImage"
            >
          </form>
          <button
            type="button"
            class="flex absolute right-16 bottom-0 justify-center items-center w-[48px] h-[48px] bg-C_green-500 hover:bg-C_green-400 rounded-full border-4 border-white nowside-backgroundImage"
            @click="$refs.uploadImage.click()"
          >
            <span class="text-2xl text-white align-sub material-icons">monochrome_photos</span>
          </button>
        </div>
        <form class="flex items-center w-[415px]">
          <input
            id="projectName"
            v-model="projectParams.ProjectName"
            name="projectName"
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
                for="projectTypeId"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >專案種類</label>
              <select
                id="projectTypeId"
                v-model="projectParams.ProjectTypeId"
                name="projectTypeId"
                class="w-full tracking-wide text-C_blue-600 dark:text-C_blue-200 bg-C_gray-100 dark:bg-[#333333] rounded border border-C_gray-300 focus:border-C_green-500 dark:border-C_gray-900 focus:ring-C_green-500 form-input"
              >
                <option
                  v-for="type in classData"
                  :key="type.Id"
                  :value="type.Id"
                >
                  {{ type.ProjectType }}
                </option>
              </select>
            </form>
            <form class="flex justify-between items-center w-[570px]">
              <label
                for="groupNum"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >團隊人數</label>
              <select
                id="projectTypeId"
                v-model="projectParams.GroupNum"
                name="projectTypeId"
                class="w-full tracking-wide text-C_blue-600 dark:text-C_blue-200 bg-C_gray-100 dark:bg-[#333333] rounded border border-C_gray-300 focus:border-C_green-500 dark:border-C_gray-900 focus:ring-C_green-500 form-input"
              >
                <option :value="1">
                  1 人
                </option>
                <option :value="2">
                  2 人
                </option>
                <option :value="3">
                  3 人
                </option>
                <option :value="4">
                  4 人
                </option>
                <option :value="5">
                  5 人
                </option>
                <option :value="6">
                  6 人
                </option>
                <option :value="7">
                  7 人
                </option>
                <option :value="8">
                  8 人
                </option>
                <option :value="9">
                  9 人
                </option>
                <option :value="10">
                  10 人
                </option>
                <option :value="11">
                  11 人
                </option>
                <option :value="12">
                  12 人
                </option>
                <option :value="13">
                  13 人
                </option>
                <option :value="14">
                  14 人
                </option>
              </select>
            </form>
          </li>
          <!-- 參加截止日 + 專案結束日 -->
          <li class="flex flex-nowrap justify-between mb-12 h-[40px]">
            <form class="flex justify-between items-center w-[570px]">
              <label
                for="groupDeadline"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >參加<br>截止日</label>
              <input
                id="groupDeadline"
                :value="groupDeadline"
                name="groupDeadline" 
                type="text"
                class="cursor-not-allowed nowside-input"
                disabled
              >
            </form>
            <form class="flex justify-between items-center w-[570px]">
              <label
                for="finishedDeadline"
                class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
              >專案<br>結束日</label>
              <input
                id="finishedDeadline"
                v-model="finishedDeadline"
                name="finishedDeadline"
                type="date" 
                class="nowside-input form-input"
              >
            </form>
          </li>
          <!-- 專案內容 -->
          <li class="flex justify-between items-center mb-12">
            <label
              for="projectContext"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >專案內容</label>
            <textarea
              id="projectContext"
              v-model="projectParams.ProjectContext"
              class="nowside-textarea"
              name="projectContext"
              rows="5"
              maxlength="1000"
            ></textarea>
          </li>
          <!-- 夥伴條件 -->
          <li class="flex justify-between items-center mb-12">
            <label
              for="PartnerCondition"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >夥伴條件</label>
            <textarea
              id="PartnerCondition"
              v-model="projectParams.PartnerCondition"
              class="nowside-textarea"
              name="PartnerCondition"
              rows="5"
              maxlength="1000"
            ></textarea>
          </li>
          <!-- 夥伴技能 -->
          <li class="flex justify-between items-center mb-12">
            <label
              for="PartnerSkills"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >夥伴技能</label>
            <div class="p-2 w-full h-[140px] text-lg text-C_blue-600 bg-C_gray-100 dark:bg-[#333333] rounded border border-C_gray-300 dark:border-C_gray-900">
            </div>
          </li>
        </ul>
      </section>
    </div>
    <div>
      <!-- 按鈕 -->
      <section class="flex justify-center">
        <router-link
          class="flex justify-center items-center py-2 mr-6 w-[196px] text-lg font-bold text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400 shadow-lg"
          to="/"
        >
          <span class="mr-1 material-icons">reply</span>
          取消
        </router-link>
        <router-link
          class="flex justify-center items-center py-2 w-[196px] text-lg font-bold text-white bg-C_green-500 hover:bg-C_green-400 rounded shadow-lg"
          to="/project"
          @click="postProjectParams"
        >
          <span class="mr-1 material-icons">ios_share</span>
          發起專案
        </router-link>
      </section>
    </div>
  </article>
</template>
