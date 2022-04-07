<script>
import { S_getProjectDetail, S_getApplicant, S_getApplicantInfo, S_passApplicant, S_rejectApplicant, } from '@/http/api';
import moment from 'moment';

export default {
  name: 'ProjectMatch',
  components: {},
  props: {
    projectId: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      detailParams: {
        ProjectName: '',
        GroupPhoto: '',
      },
      listParams: [
        {
          // ProjectsId: 0,
          // ApplicantState: '',
          // InitDate: '',
          // NickName: '',
          // ApplicantMessage: '',
          // MembersId: 0,
        },
      ],
      applicantParams: [
        {
          // ProfilePicture: '',
          // NickName: '',
          // Gender: '',
          // Account: '',
          // Fb: null,
          // Ig: null,
          // ProfileWebsite: null,
          // ContactTime: '',
          // WorkState: null,
          // Language: null,
          // Company: null,
          // Industry: null,
          // JobDescription: null,
          // Position: null,
          Skills: null,
          // SelfIntoduction: [
          //   '',
          // ],
        },
      ],
      tableStatus: false,
      userStatus: 'userInfo',
    };
  },
  computed: {},
  mounted() {
    this.getDetailParams();
    this.getListParams();
  },
  methods: {
    // 取得專案詳細
    getDetailParams() {
      S_getProjectDetail(this.projectId).then(res =>{
        console.log('專案詳細', res.data.userdata);
        this.detailParams = res.data.userdata;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 取得申請人列表
    getListParams() {
      S_getApplicant(this.projectId).then(res =>{
        console.log('取得申請人列表', res.data.data);
        this.listParams = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 取得申請人資料
    getApplicantParams(projectId, memberId) {
      this.tableStatus = !this.tableStatus;
      if (this.tableStatus === false) this.applicantParams = {};

      S_getApplicantInfo(projectId, memberId).then(res =>{
        console.log('取得申請人資料', res.data.applicantData);
        this.applicantParams = res.data.applicantData;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 通過申請人
    postPass(projectId, memberId) {
      S_passApplicant(projectId, memberId).then(res =>{
        console.log('通過申請人', res.data.status);
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 不通過申請人
    postReject(projectId, memberId) {
      S_rejectApplicant(projectId, memberId).then(res =>{
        console.log('不通過申請人', res.data.status);
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
    <!-- 圖片 -->
    <section class="flex flex-col justify-center items-center mb-12">
      <div
        class="mb-20 w-[415px] h-[415px] rounded-full shadow-xl dark:shadow-gray-800 nowside-backgroundImage"
        :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${detailParams.GroupPhoto}')` }"
      ></div>
      <span class="text-3xl font-medium text-C_blue-700 dark:text-C_blue-400">{{ detailParams.ProjectName }}</span><br>
    </section>
    <!-- 表格 -->
    <section class="flex flex-col justify-center items-center mb-28">
      <span class="text-lg text-C_blue-700 dark:text-C_blue-400">申請名單</span><br>
      <table class="w-[1296px] table-fixed nowside-shadow">
        <thead class="text-lg text-C_blue-200 bg-C_blue-900 dark:bg-C_blue-500">
          <tr class="font-medium text-center">
            <th class="py-4 font-medium rounded-tl-lg">
              狀態
            </th>
            <th class="py-4 font-medium">
              日期
            </th>
            <th class="py-4 font-medium">
              申請者
            </th>
            <th class="py-4 font-medium">
              留言
            </th>
            <th class="py-4 font-medium rounded-tr-lg">
              查看
            </th>
          </tr>
        </thead>
        <tbody
          v-for="list in listParams"
          :key="list.InitDate"
          class="text-C_blue-800 dark:text-C_blue-200"
        >
          <tr class="text-center">
            <!-- 狀態 -->
            <td class="py-6">
              <span>{{ list.ApplicantState }}</span>
            </td>
            <!-- 日期 -->
            <td class="py-6">
              <span>{{ timeFormat(list.InitDate) }}</span>
            </td>
            <!-- 申請者 -->
            <td class="py-6">
              <span>{{ list.NickName }}</span>
            </td>
            <!-- 留言 -->
            <td class="py-6 text-left">
              <span>{{ list.ApplicantMessage }}</span>
            </td>
            <!-- 查看 -->
            <td class="py-6">
              <button
                class="py-2 px-6 font-medium text-C_blue-700 hover:bg-C_gray-100 dark:bg-white rounded-sm border-2 border-C_blue-400"
                @click="getApplicantParams(projectId, list.MembersId)"
              >
                查看檔案
              </button>
            </td>
          </tr>
          <!-- 收合選單 -->
          <template v-if="tableStatus === true">
            <tr
              v-for="applicant in applicantParams"
              :key="applicant.Account"
              class="flex"
            >
              <td class="pt-11 pb-20">
                <div class="flex mb-12">
                  <!-- 大頭貼 -->
                  <div class="flex flex-col">                    
                    <div
                      class="mt-[108px] ml-[40px] w-[344px] h-[344px] rounded-full shadow-xl dark:shadow-gray-800 nowside-backgroundImage"
                      :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/ProfilePicture/${applicantParams.ProfilePicture}')` }"
                    ></div>
                  </div>
                  <!-- 欄位區塊 -->
                  <div class="flex flex-col items-end mr-[43px] mb-12 w-[866px]">
                    <!-- 頂部選單 -->
                    <div class="mb-12 w-full text-C_blue-600 dark:text-C_blue-400 border-b-2 border-C_blue-400">
                      <button
                        class="mr-8 text-xl font-medium hover:text-C_blue-400 dark:hover:text-C_blue-200 hover:rounded"
                        @click="userStatus = 'userInfo'"
                      >
                        個人資料
                      </button>
                      <button
                        class="mr-8 text-xl font-medium hover:text-C_blue-400 dark:hover:text-C_blue-200 hover:rounded"
                        @click="userStatus = 'userBackground'"
                      >
                        專業背景
                      </button>
                      <button
                        class="text-xl font-medium hover:text-C_blue-400 dark:hover:text-C_blue-200 hover:rounded"
                        @click="userStatus = 'userSelfIntroduction'"
                      >
                        自我介紹
                      </button>
                    </div>
                    <!-- 個人資料 -->
                    <ul
                      v-if="userStatus === 'userInfo'"
                      class="w-[808px]"
                    >
                      <!-- 暱稱 + 性別 -->
                      <li class="flex flex-nowrap justify-between mb-12 h-[40px]">
                        <form class="flex flex-initial justify-between items-center w-[560px]">
                          <label
                            for="nickName"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >暱稱</label>
                          <input
                            id="nickName"
                            v-model="applicant.NickName"
                            name="nickName" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </form>
                        <form class="flex flex-initial justify-between items-center w-[224px]">
                          <label
                            for="gender"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >性別</label>
                          <input
                            id="gender"
                            v-model="applicant.Gender"
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
                            v-model="applicant.Account"
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
                            v-model="applicant.Fb"
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
                            v-model="applicant.Ig"
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
                            v-model="applicant.ProfileWebsite"
                            name="profileWebsite" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </form>
                      </li>
                      <!-- 聯絡時間 -->
                      <li class="mb-12 h-[40px]">
                        <form class="flex justify-between items-center">
                          <label
                            for="contactTime"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >聯絡時間</label>
                          <input
                            id="contactTime"
                            v-model="applicant.ContactTime"
                            name="contactTime" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </form>
                      </li>
                    </ul>
                    <!-- 專業背景 -->
                    <ul
                      v-if="userStatus === 'userBackground'"
                      class="w-[808px]"
                    >
                      <!-- 目前狀態 -->
                      <li>
                        <form class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="workState"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >目前狀態</label>
                          <input
                            id="workState"
                            v-model="applicant.WorkState"
                            name="workState" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </form>
                      </li>
                      <!-- 語言 -->
                      <li>
                        <form class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="language"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >語言</label>
                          <input
                            id="language"
                            v-model="applicant.Language"
                            name="language" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </form>
                      </li>
                      <!-- 公司 -->
                      <li>
                        <form class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="company"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >公司</label>
                          <input
                            id="company"
                            v-model="applicant.Company"
                            name="company" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </form>
                      </li>
                      <!-- 產業 -->
                      <li>
                        <form class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="industry"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >產業</label>
                          <input
                            id="industry"
                            v-model="applicant.Industry"
                            name="industry" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </form>
                      </li>
                      <!-- 職務 -->
                      <li>
                        <form class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="jobDescription"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >職務</label>
                          <input
                            id="jobDescription"
                            v-model="applicant.JobDescription"
                            name="jobDescription" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </form>
                      </li>
                      <!-- 工作內容 -->
                      <li>
                        <form class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="position"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >工作內容</label>
                          <input
                            id="position"
                            v-model="applicant.Position"
                            name="position" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </form>
                      </li>
                      <!-- 技能 -->
                      <li>
                        <form class="flex justify-between items-center">
                          <label
                            for="profileWebsite"
                            class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >技能</label>
                          <div class="p-2 w-full h-[140px] text-lg text-C_blue-600 bg-C_gray-100 dark:bg-[#333333] rounded border border-C_gray-300">
                            <div
                              v-for="skill in applicant"
                              :key="skill.Id"
                              class="inline-block mr-4 bg-C_blue-200 rounded"
                            >
                              <p class="px-4">
                                {{ skill.skill }}
                              </p>
                            </div>
                          </div>
                        </form>
                      </li>
                    </ul>
                    <!-- 自我介紹 -->
                    <div
                      v-if="userStatus === 'userSelfIntroduction'"
                      class="w-[808px]"
                    >
                      <form>
                        <textarea
                          id="selfIntroduction"
                          v-model="applicant.SelfIntroduction"
                          class="nowside-textarea"
                          name="selfIntroduction"
                          rows="5"
                          maxlength="1000"
                          disabled
                        ></textarea>
                      </form>
                    </div>
                  </div>
                </div>
                <!-- 通過未通過按鈕 -->
                <div class="flex justify-center">
                  <button
                    class="py-2 mr-6 w-32 text-lg font-medium text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400"
                    @click="postReject(projectId, list.MembersId)"
                  >
                    <span class="align-sub material-icons">
                      close
                    </span>
                    未通過
                  </button>
                  <button
                    class="py-2 w-32 text-lg font-medium text-white bg-C_green-500 hover:bg-C_green-400 rounded"
                    @click="postPass(projectId, list.MembersId)"
                  >
                    <span class="align-sub material-icons">
                      done
                    </span>
                    通過
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
    <!-- 按鈕 -->
    <section class="flex justify-center">
      <button class="py-2 mr-6 w-[196px] text-lg font-bold text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400 shadow-lg">
        <span class="align-sub material-icons">reply</span>
        回上一步
      </button>
      <button class="py-2 w-[196px] text-lg font-bold text-white bg-C_green-500 hover:bg-C_green-400 rounded shadow-lg">
        <span class="align-sub material-icons">ios_share</span>
        確認媒合
      </button>
    </section>
  </article>
</template>
