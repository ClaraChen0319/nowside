<script>
import { S_getSuccessProjectDetail, } from '@/http/api';
import moment from 'moment';

export default {
  name: 'SuccessView',
  components: {},
  props: {
    successId: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      detailParams: {
        Id: 0,
        ProjectName: '',
        ProjectContext: '',
        GroupPhoto: '',
        InitDate: '',
        FinishedDeadline: '',
        GroupNum: 0,
        PartnerSkills: [],
        ProjectTypeId: [],
        ProjectState: '',
        Organizer: [], // 發起人資訊
        Applicants: [], // 參與人資訊
        ProjectBanner: '',
        ProjectPictures: [],
        ProjectExperience: '',
      },
    };
  },
  computed: {},
  mounted() {
    this.getDetailParams();
  },
  methods: {
    // 取得專案詳細
    getDetailParams() {
      S_getSuccessProjectDetail(this.successId).then(res =>{
        console.log('專案詳細', res.data.userdata);
        this.detailParams = res.data.userdata;
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
  <article class="pt-[60px] pb-[180px] w-full h-full">
    <!-- Banner -->
    <section class="flex justify-center mb-28 bg-C_gray-100">
      <img
        class="object-cover w-screen h-[560px]"
        :src="`http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${detailParams.ProjectBanner}`"
        alt="banner"
      >
    </section>
    <!-- 內容 -->
    <section class="flex relative flex-col py-20 px-24 mb-12 nowside-container-lg nowside-shadow">
      <!-- 圖片 + 標題 + 狀態選單 -->
      <div class="flex flex-col justify-center items-center mb-14 w-full">
        <!-- 圖片 -->
        <div
          class="mb-12 w-[304px] h-[304px] rounded-full border-2 border-C_gray-300 dark:border-C_gray-900 shadow-xl nowside-backgroundImage"
          :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${detailParams.GroupPhoto}')` }"
        ></div>
        <!-- 標題 -->
        <span class="text-xl font-medium text-C_blue-700 dark:text-C_blue-300">{{ detailParams.ProjectName }}</span>
        <!-- 狀態選單 -->
        <ul class="absolute top-20 right-12 w-[256px]">
          <!-- 按鈕 -->
          <li class="mb-4">
            <div class="flex justify-between w-full">
              <button
                class="flex justify-center items-center py-2 px-6 text-md font-medium text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_gray-300"
                @click="addFavorite(detailParams.Id)"
              >
                <span class="mr-1 material-icons">favorite_border</span>
                收藏
              </button>
              <router-link
                class="flex justify-center items-center py-2 px-6 text-md font-medium text-white bg-C_green-500 hover:bg-C_green-400 rounded"
                :to="{ name: 'ProjectView', params: { projectId: detailParams.Id, }, hash: '#XXX' }"
              >
                <span class="mr-1 material-icons">north_east</span>
                前往
              </router-link>
            </div>
          </li>
          <!-- 種類 + 狀態 -->
          <li class="flex justify-between items-center mb-4">
            <div
              v-for="type in detailParams.ProjectTypeId"
              :key="type.Id"
              class="flex items-center"
            >
              <p class="max-w-[144px] font-medium text-C_blue-500 dark:text-C_blue-200 truncate border-b-2 border-C_blue-300 dark:border-C_blue-200">
                {{ type.ProjectType }}
              </p>
            </div>
            <div class="flex items-center">
              <span class="mr-1 text-xl text-orange-500 material-icons">adjust</span>
              <p class="font-medium text-C_blue-700 dark:text-C_blue-200">
                {{ detailParams.ProjectState }}
              </p>
            </div>
          </li>
          <!-- 發起日 -->
          <li class="mb-4">
            <p class="mr-2 font-medium text-C_blue-700 dark:text-C_blue-400">
              發起日
            </p>
            <p class="dark:text-C_blue-200">
              {{ timeFormat(detailParams.InitDate) }}
            </p>
          </li>
          <!-- 結束日 -->
          <li class="mb-4">
            <p class="mr-2 font-medium text-C_blue-700 dark:text-C_blue-400">
              結束日
            </p>
            <p class="dark:text-C_blue-200">
              {{ timeFormat(detailParams.FinishedDeadline) }}
            </p>
          </li>
          <!-- 團隊人數 -->
          <li class="flex items-center mb-4">
            <span class="mr-2 text-3xl text-C_blue-400 material-icons">account_circle</span>
            <span class="text-xl dark:text-C_blue-200">{{ detailParams.GroupNum }}</span>
          </li>
        </ul>
      </div>
      <!-- 內容區塊 -->
      <div>
        <ul class="text-C_blue-800">
          <!-- 內容圖片 -->
          <li class="overflow-y-scroll mb-10 max-h-[234px] snap-y snap-mandatory snap">
            <div class="w-full h-[234px] bg-red-100 snap-start"></div>
            <div class="w-full h-[234px] bg-red-200 snap-start"></div>
            <div class="w-full h-[234px] bg-red-300 snap-start"></div>
            <div class="w-full h-[234px] bg-red-400 snap-start"></div>
            <div class="w-full h-[234px] bg-red-500 snap-start"></div>
            <div class="w-full h-[234px] bg-red-600 snap-start"></div>
            <div class="w-full h-[234px] bg-red-700 snap-start"></div>
            <div class="w-full h-[234px] bg-red-800 snap-start"></div>
            <div class="w-full h-[234px] bg-red-900 snap-start"></div>
          </li>
          <!-- 專案內容 -->
          <li class="mb-10">
            <p class="inline-block mb-4 text-lg font-medium text-C_blue-700 dark:text-C_blue-400">
              專案內容
            </p><br>
            <p class="dark:text-C_blue-200">
              {{ detailParams.ProjectContext }}
            </p>
          </li>
          <!-- 學到什麼 -->
          <li class="mb-10">
            <p class="inline-block mb-4 text-lg font-medium text-C_blue-700 dark:text-C_blue-400">
              學到什麼
            </p><br>
            <p class="dark:text-C_blue-200">
              {{ detailParams.ProjectExperience }}
            </p>
          </li>
          <!-- 夥伴技能 -->
          <li class="mb-10">
            <p class="inline-block mb-4 text-lg font-medium text-C_blue-700 dark:text-C_blue-400">
              夥伴技能
            </p><br>
            <div class="flex overflow-y-hidden flex-wrap max-h-[68px]">
              <div
                v-for="skill in detailParams.PartnerSkills"
                :key="skill.Id"
                class="inline-block mr-2 mb-4 bg-C_blue-200 rounded"
              >
                <p class="px-4">
                  {{ skill.skill }}
                </p>
              </div>
            </div>
          </li>
          <!-- 分享 -->
          <li class="mb-10">
            <p class="inline-block mr-8 mb-4 text-lg font-medium text-C_blue-700 dark:text-C_blue-400">
              分享
            </p>
            <div class="inline-block">
              <button class="nowside-button-blue-md">
                複製連結
              </button>
            </div>
          </li>
          <!-- 參加人員 -->
          <li>
            <p class="inline-block mb-9 text-lg font-medium text-C_blue-700 dark:text-C_blue-400">
              參加人員
            </p><br>
            <ul class="flex flex-wrap items-center">
              <!-- 發起人 -->
              <li
                v-for="member in detailParams.Organizer"
                :key="member.NickName"
                class="flex items-center mr-6 mb-10 w-[196px]"
              >
                <div
                  class="mr-6 min-w-[72px] min-h-[72px] rounded-full nowside-backgroundImage"
                  :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${member.ProfilePicture}')` }"
                ></div>
                <div class="flex flex-col max-w-[100px]">
                  <p class="mb-1 text-C_blue-700 dark:text-C_blue-200 truncate">
                    {{ member.NickName }}
                  </p>
                  <p class="text-C_blue-500 dark:text-C_blue-300">
                    發起人
                  </p>
                </div>
              </li>
              <!-- 申請人 -->
              <li
                v-for="member in detailParams.Applicants"
                :key="member.NickName"
                class="flex items-center mr-6 mb-10 w-[196px]"
              >
                <div
                  class="mr-6 min-w-[72px] min-h-[72px] rounded-full nowside-backgroundImage"
                  :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${member.ProfilePicture}')` }"
                ></div>
                <div class="flex flex-col max-w-[100px]">
                  <p class="mb-1 text-C_blue-700 dark:text-C_blue-200 truncate">
                    {{ member.NickName }}
                  </p>
                  <p class="text-C_blue-500 dark:text-C_blue-300">
                    組員
                  </p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>
