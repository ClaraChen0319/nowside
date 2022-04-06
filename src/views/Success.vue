<script>
import { S_getSkills, S_getProjectClass, S_getSuccessProject, S_getSuccessProjectNoPage, } from '@/http/api';
import moment from 'moment';

export default {
  name: 'Success',
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
      listParams: [
        {
          Id: 0,
          ProjectName: '',
          ProjectContext: '',
          GroupPhoto: '',
          InitDate: '',
          GroupDeadline: '',
          FinishedDeadline: '',
          GroupNum: 0,
          PartnerSkills: [],
          ProjectTypeId: [],
          ProjectState: '',
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.getSkillsParams();
    this.getClassParams();
    this.getListParams();
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
    // 取得已完成專案列表（無分頁）
    getListParams() {
      S_getSuccessProjectNoPage().then(res =>{
        console.log('已完成專案列表（無分頁）', res.data.data);
        this.listParams = res.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    },
    // 收藏
    addFavorite(id) {
      console.log(id);
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
        src="https://picsum.photos/1920/560?random=1"
        alt="banner"
      >
    </section>
    <!-- 搜尋區塊 -->
    <section class="flex flex-col justify-center items-center py-12 mb-24 h-[232px] nowside-container-lg nowside-shadow">
      <div class="w-[1076px]">
        <!-- 搜尋 input -->
        <label class="block relative mb-10">
          <span class="flex absolute inset-y-0 left-0 items-center pl-2">
            <span
              class="ml-12 text-3xl text-C_green-500 material-icons"
            >search</span>
          </span>
          <input
            class="block py-3 pr-3 pl-28 w-full placeholder:italic placeholder:text-C_gray-700 bg-C_gray-100 dark:bg-[#333333] rounded-full border-2 border-C_blue-300 focus:border-C_green-500 focus:outline-none focus:ring-1 focus:ring-C_green-500 shadow-sm"
            placeholder="搜尋感興趣的 side project"
            type="text"
            name="search"
          >
        </label>
        <!-- 搜尋條件 select -->
        <form>
          <!-- 專案類別 -->
          <select
            id="skillsData"
            class="nowside-searchSelect"
            name="skillsData"
          >
            <option
              disabled
              selected
            >
              專案類別
            </option>
            <option
              v-for="type in classData"
              :key="type.Id"
              :value="type.Id"
            >
              {{ type.ProjectType }}
            </option>
          </select>
          <!-- 媒合期限 -->
          <select
            id=""
            class="nowside-searchSelect"
            name=""
          >
            <option
              disabled
              selected
            >
              媒合期限
            </option>
          </select>
          <!-- 團隊人數 -->
          <select
            id=""
            class="nowside-searchSelect"
            name=""
          >
            <option
              disabled
              selected
            >
              團隊人數
            </option>
          </select>
          <!-- 使用技術 -->
          <select
            id="classData"
            class="nowside-searchSelect"
            name="classData"
          >
            <option
              disabled
              selected
            >
              使用技術
            </option>
            <option
              v-for="skill in skillsData"
              :key="skill.Id"
              :value="skill.Id"
            >
              {{ skill.skill }}
            </option>
          </select>
        </form>
      </div>
    </section>

    <!-- 列表區塊 -->
    <div class="flex justify-between nowside-container-lg">
      <!-- 收藏專案 -->
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
      <!-- 專案列表 -->
      <section class="flex flex-col ml-6 nowside-container-md">
        <div
          v-for="project in listParams"
          :key="project.Id"
          class="flex justify-between py-10 px-6 mb-10 nowside-shadow"
        >
          <!-- 【左】圖片 -->
          <div
            class="mr-10 w-[132px] h-[132px] rounded-full border-2 border-C_gray-300 dark:border-C_gray-900 nowside-backgroundImage"
            :style="{ 'background-image': `url('http://sideprojectnow.rocket-coding.com/Upload/GroupPicture/${project.GroupPhoto}')` }"
          >
          </div>
          <!-- 【中】內容 -->
          <div class="mr-6 w-[482px]">
            <ul class="text-C_blue-800">
              <!-- 專案名稱 -->
              <li class="mb-4">
                <p class="text-xl font-medium text-C_blue-700 dark:text-C_blue-400">
                  {{ project.ProjectName }}
                </p>
              </li>
              <!-- 專案內容 -->
              <li class="mb-6">
                <p class="mb-1 text-lg font-medium text-C_blue-700 dark:text-C_blue-400">
                  專案內容
                </p><br>
                <p class="overflow-y-hidden h-[160px] dark:text-C_blue-200">
                  {{ project.ProjectContext }}
                </p>
              </li>
              <!-- 媒合期限 -->
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
            <ul>
              <!-- 種類 + 狀態 -->
              <li class="flex justify-between items-center mb-4">
                <div
                  v-for="type in project.ProjectTypeId"
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
                    {{ project.ProjectState }}
                  </p>
                </div>
              </li>
              <!-- 發起日 -->
              <li class="mb-4">
                <p class="mr-2 font-medium text-C_blue-700 dark:text-C_blue-400">
                  發起日
                </p>
                <p class="dark:text-C_blue-200">
                  {{ timeFormat(project.InitDate) }}
                </p>
              </li>
              <!-- 結束日 -->
              <li class="mb-4">
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
                  <router-link
                    class="flex justify-center items-center py-2 px-6 text-md font-medium text-white bg-C_green-500 hover:bg-C_green-400 rounded"
                    :to="{ name: 'SuccessView', params: { successId: project.Id, } }"
                  >
                    <span class="mr-1 material-icons">north_east</span>
                    查看
                  </router-link>
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
