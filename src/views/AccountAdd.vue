<script>
import { S_getAddProject, S_getAddProjectNoPage } from '@/http/api';
import moment from 'moment';

export default {
  name: 'AccountAdd',
  components: {},
  data() {
    return {
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
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.getListParams();
  },
  methods: {
    // 取得發起的專案資料
    getListParams() {
      S_getAddProjectNoPage().then(res =>{
        console.log('發起的專案資料', res.data.data);
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
    <div class="nowside-container-lg">
      <!-- 專案狀態 select -->
      <section class="mb-12">
        <ul class="flex justify-end">
          <li>
            <button class="text-lg text-C_blue-700 hover:text-C_blue-500 dark:text-C_blue-200 dark:hover:text-C_blue-300">
              最新
            </button>
          </li>
          <li class="ml-10">
            <button class="text-lg text-C_blue-700 hover:text-C_blue-500 dark:text-C_blue-200 dark:hover:text-C_blue-300">
              熱門
            </button>
          </li>
          <li class="ml-10">
            <button class="text-lg text-C_blue-700 hover:text-C_blue-500 dark:text-C_blue-200 dark:hover:text-C_blue-300">
              組團
            </button>
          </li>
        </ul>
      </section>
    </div>
    <div class="flex justify-between nowside-container-lg">
      <!-- 【左】大頭貼 + 選單 -->
      <section class="h-fit nowside-container-sm nowside-shadow">
        <!-- 標題 -->
        <div class="flex justify-center items-center py-4 w-full bg-C_blue-700 rounded-t-lg">
          <span class="text-lg font-medium text-C_blue-100">收藏的專案</span>
        </div>
        <!-- 列表 -->
        <div class="py-12 px-6 w-full bg-white dark:bg-C_black rounded-b-lg">
          <ul class="w-[258px]">
            <li class="flex items-center mb-8">
              <div
                class="w-[80px] h-[80px] rounded-full nowside-backgroundImage"
                style="background-image: url('https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80')"
              ></div>
              <div>
                <p class="ml-6 font-medium text-C_blue-500 dark:text-C_blue-200">
                  尋找貓
                </p>
              </div>
            </li>
            <li class="flex items-center mb-8">
              <div
                class="w-[80px] h-[80px] rounded-full nowside-backgroundImage"
                style="background-image: url('https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
              ></div>
              <div>
                <p class="ml-6 font-medium text-C_blue-500 dark:text-C_blue-200">
                  天然 a 食譜
                </p>
              </div>
            </li>
            <li class="flex items-center">
              <div
                class="w-[80px] h-[80px] rounded-full nowside-backgroundImage"
                style="background-image: url('https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')"
              ></div>
              <div>
                <p class="ml-6 font-medium text-C_blue-500 dark:text-C_blue-200">
                  植萃分析
                </p>
              </div>
            </li>
          </ul>
        </div>
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
                    {{ project.ProjectState }}
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
