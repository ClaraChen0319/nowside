<script>
import { S_getUserInfo, S_getApplyProject, S_getApplyProjectNoPage } from '@/http/api';
import moment from 'moment';

export default {
  name: 'AccountApply',
  components: {},
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
          ApplicantState: '', // 申請人的專案狀態
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.getAccountParams();
    this.getListParams();
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
    // 取得申請的專案資料
    getListParams() {
      S_getApplyProjectNoPage().then(res =>{
        console.log('申請的專案資料', res.data.data);
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
    <div class="flex justify-end mb-12 nowside-container-lg">
      <!-- 專案狀態 select -->
      <section>
        <select
          id="status"
          class="py-2 pr-6 pl-2 w-[140px] text-lg font-bold text-center text-white bg-C_blue-400 hover:bg-C_blue-300 rounded-full border-0 form-select"
          name="status"
        >
          <option selected>
            媒合中
          </option>
          <option>進行中</option>
          <option>已完成</option>
          <option>已關閉</option>
          <option>已廢棄</option>
        </select>
      </section>
    </div>
    <div class="flex justify-between nowside-container-lg">
      <!-- 【左】大頭貼 + 選單 -->
      <section class="flex flex-col items-center p-14 nowside-container-sm nowside-shadow">
        <div
          class="mb-8 w-[200px] h-[200px] rounded-full nowside-backgroundImage"
          :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/ProfilePicture/${accountParams.ProfilePicture}')` }"
        ></div>
        <ul class="text-lg text-center text-C_blue-700 dark:text-C_blue-400">
          <li class="mb-6 font-medium">
            {{ accountParams.NickName }}
          </li>
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <button class="font-medium">
              個人資料
            </button>
          </li>
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <button class="font-medium">
              發起的專案
            </button>
          </li>
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <button class="font-medium">
              申請的專案
            </button>
          </li>
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <button class="font-medium">
              參與的專案
            </button>
          </li>
          <li class="mb-6 hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <button class="font-medium">
              收藏的專案
            </button>
          </li>
          <li class=" hover:text-C_blue-400 dark:hover:text-C_blue-200">
            <button class="font-medium">
              通知
            </button>
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
              <li>
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
                    {{ project.ApplicantState }}
                  </p>
                </div>
              </li>
              <li class="mb-4">
                <p class="mr-2 font-medium text-C_blue-700 dark:text-C_blue-400">
                  發起日
                </p>
                <p class="dark:text-C_blue-200">
                  {{ timeFormat(project.InitDate) }}
                </p>
              </li>
              <li class="mb-4">
                <p class="mr-2 font-medium text-C_blue-700 dark:text-C_blue-400">
                  結束日
                </p>
                <p class="dark:text-C_blue-200">
                  {{ timeFormat(project.FinishedDeadline) }}
                </p>
              </li>
              <li class="flex items-center mb-4">
                <span class="mr-2 text-3xl text-C_blue-400 material-icons">account_circle</span>
                <span class="text-xl dark:text-C_blue-200">{{ project.GroupNum }}</span>
              </li>
              <li class="mb-4">
                <div class="flex overflow-y-hidden flex-wrap max-h-[68px]">
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
