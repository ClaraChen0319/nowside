<script>
import {
  S_getUserInfo,
  S_getAddProject,
  S_getAddProjectNoPage,
  S_getApplyProject,
  S_getApplyProjectNoPage,
  S_getAttendProject,
  S_getAttendProjectNoPage,
  S_getSaveProject,
  S_getSaveProjectNoPage,
} from '@/http/api';
import moment from 'moment';

export default {
  name: 'AccountProject',
  components: {},
  props: {
    projectType: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      accountParams: {
        Account: '',
        NickName: '',
        Gender: '',
        ProfilePicture: '',
        Ig: '',
        Fb: '',
        ProfileWebsite: '',
        ContactTime: '',
        SelfIntroduction: '',
        WorkState: '',
        Language: '',
        Company: '',
        Industry: '',
        Position: '',
        Skills: [], // 無資料的話為 null
        JobDescription: '',
      },
      listParams: [
        {
          Id: 0,
          ProjectName: '',
          ProjectContext: '',
          GroupPhoto: '',
          InitDate: '',
          GroupDeadline: '',
          FinishedDeadline: '',
          GroupNum: null,
          PartnerSkills: [],
          ProjectTypeId: [],
          ProjectState: '', // 專案狀態
          ApplicantState: '', // 申請人的專案狀態
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.getAccountParams();
    switch (this.projectType) {
      case 'add':
        this.getAddListParams();
        break
      case 'apply':
        this.getApplyListParams();
        break
      case 'attend':
        this.getAttendListParams();
        break
      case 'save':
        this.getSaveListParams();
        break
    };
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
    // 取得發起的專案資料
    getAddListParams() {
      S_getAddProjectNoPage().then(res =>{
        console.log('發起的專案資料', res.data.data);
        this.listParams = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 取得申請的專案資料
    getApplyListParams() {
      S_getApplyProjectNoPage().then(res =>{
        console.log('申請的專案資料', res.data.data);
        this.listParams = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 取得參與的專案資料
    getAttendListParams() {
      S_getAttendProjectNoPage().then(res =>{
        console.log('參與的專案資料', res.data.data);
        this.listParams = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 取得收藏的專案資料
    getSaveListParams() {
      S_getSaveProjectNoPage().then(res =>{
        console.log('收藏的專案資料', res.data.data);
        this.listParams = res.data.data;
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
    <div class="flex justify-between nowside-container-lg">
      <!-- 【左】大頭貼 + 選單 -->
      <section class="flex flex-col items-center p-14 h-fit nowside-container-sm nowside-shadow">
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
            <button
              class="font-medium"
              @click="getAddListParams"
            >
              發起的專案
            </button>
          </li>
          <!-- 申請的專案 -->
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <button
              class="font-medium"
              @click="getApplyListParams"
            >
              申請的專案
            </button>
          </li>
          <!-- 參與的專案 -->
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <button
              class="font-medium"
              @click="getAttendListParams"
            >
              參與的專案
            </button>
          </li>
          <!-- 收藏的專案 -->
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <button
              class="font-medium"
              @click="getSaveListParams"
            >
              收藏的專案
            </button>
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
      </section>
      <!-- 【右】專案列表 -->
      <section class="flex flex-col ml-6 nowside-container-md">
        <div
          v-for="project in listParams"
          :key="project.Id"
          class="flex justify-between py-10 px-6 mb-10 nowside-shadow"
        >
          <!-- 【左】圖片 -->
          <div
            class="mr-10 w-[132px] h-[132px] rounded-full nowside-backgroundImage"
            :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${project.GroupPhoto}')` }"
          >
          </div>
          <!-- 【中】內容 -->
          <div class="mr-6 w-[482px]">
            <ul class="text-C_blue-800">
              <li class="mb-4">
                <p class="text-xl font-medium text-C_blue-700 dark:text-C_blue-400">
                  {{ project.ProjectName }}
                </p>
              </li>
              <li class="mb-6">
                <p class="mb-1 text-lg font-medium text-C_blue-700 dark:text-C_blue-400">
                  專案內容
                </p><br>
                <p class="overflow-y-hidden h-[160px] dark:text-C_blue-200">
                  {{ project.ProjectContext }}
                </p>
              </li>
              <li class="flex">
                <p class="font-medium text-C_blue-700 dark:text-C_blue-400">
                  媒合期限
                </p>　
                <p class="dark:text-C_blue-200">
                  {{ timeFormat(project.GroupDeadline) }}
                </p>
              </li>
            </ul>
          </div>
          <!-- 【右】狀態 -->
          <div class="w-[256px]">
            <ul class="text-C_blue-800">
              <!-- 種類 + 狀態 -->
              <li class="flex justify-between items-center mb-4">
                <div
                  v-for="type in project.ProjectTypeId"
                  :key="type.Id"
                  class="flex items-center"
                >
                  <p class="max-w-[144px] font-medium text-C_blue-500 dark:text-C_blue-200 truncate">
                    {{ type.ProjectType }}
                  </p>
                </div>
                <div class="flex items-center">
                  <span class="mr-1 text-xl text-orange-500 material-icons">adjust</span>
                  <p class="font-medium text-C_blue-700 dark:text-C_blue-200">
                    {{ project.ProjectState }}
                  </p>
                </div>
              </li>
              <!-- 發起日 -->
              <li class="flex mb-4">
                <p class="mr-2 font-medium text-C_blue-700 dark:text-C_blue-400">
                  發起日
                </p>
                <p class="dark:text-C_blue-200">
                  {{ timeFormat(project.InitDate) }}
                </p>
              </li>
              <!-- 結束日 -->
              <li class="flex mb-4">
                <p class="mr-2 font-medium text-C_blue-700 dark:text-C_blue-400">
                  結束日
                </p>
                <p class="dark:text-C_blue-200">
                  {{ timeFormat(project.FinishedDeadline) }}
                </p>
              </li>
              <!-- 團隊人數 -->
              <li class="flex items-center mb-4">
                <span class="mr-2 text-3xl text-C_blue-400 material-icons">account_circle</span>
                <span class="text-xl dark:text-C_blue-200">{{ project.GroupNum }}</span>
              </li>
              <!-- 夥伴技能 -->
              <li class="mb-4">
                <div class="inline-block overflow-y-hidden h-[80px]">
                  <div
                    v-for="skill in project.PartnerSkills"
                    :key="skill.Id"
                    class="inline-block mr-2 mb-4 bg-C_blue-200 rounded"
                  >
                    <p class="px-4">
                      {{ skill.skill }}
                    </p>
                  </div>
                </div>
              </li>
              <!-- 按鈕 -->
              <li>
                <div class="flex justify-between w-full">
                  <button
                    class="flex justify-center items-center py-2 px-6 text-md font-medium text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_gray-300"
                    @click="addFavorite(project.Id)"
                  >
                    <span class="mr-1 material-icons">favorite_border</span>
                    收藏
                  </button>
                  <button
                    class="flex justify-center items-center py-2 px-6 text-md font-medium text-white bg-C_green-500 hover:bg-C_green-400 rounded"
                    @click="goProjectView(project.Id)"
                  >
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
