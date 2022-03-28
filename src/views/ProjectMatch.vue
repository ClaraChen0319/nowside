<script>
export default {
  name: 'ProjectView',
  components: {},
  data() {
    return {
      listParams: {
        status: '',
        date: '',
        applicant: '',
        message: '',
      },
      applicantParams: {
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
      tableStatus: false,
      userStatus: 'userInfo',
    };
  },
  computed: {},
  methods: {
    tableDisplay() {
      this.tableStatus = !this.tableStatus;
      if (this.tableStatus === false) this.applicantParams = {};
      console.log(this.tableStatus);
      console.log(this.applicantParams);
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
        style="background-image: url('https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80')"
      ></div>
      <span class="text-3xl font-medium text-C_blue-700 dark:text-C_blue-400">家務分配</span><br>
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
        <tbody class="text-C_blue-800 dark:text-C_blue-200">
          <tr class="text-center">
            <td class="py-6">
              <span>已通過</span>
            </td>
            <td class="py-6">
              <span>2022.01.01</span>
            </td>
            <td class="py-6">
              <span>Mandy</span>
            </td>
            <td class="py-6 text-left">
              <span>Hi~Christie我對你提出的專案內容非常有興趣！拜託選我～這個專案真的太有趣了:D</span>
            </td>
            <td class="py-6">
              <button
                class="py-2 px-6 font-medium text-C_blue-700 hover:bg-C_gray-100 dark:bg-white rounded-sm border-2 border-C_blue-400"
                @click="tableDisplay"
              >
                查看檔案
              </button>
            </td>
          </tr>
          <!-- 收合選單 -->
          <template v-if="tableStatus === true">
            <tr class="flex">
              <td class="pt-11 pb-20">
                <div class="flex mb-12">
                  <!-- 大頭貼 -->
                  <div class="flex flex-col">                    
                    <div
                      class="mt-[108px] ml-[40px] w-[344px] h-[344px] rounded-full shadow-xl dark:shadow-gray-800 nowside-backgroundImage"
                      style="background-image: url('https://lh3.googleusercontent.com/bbR_o6X9VgjiJKsRcu-ESXwz5M9do7eFs4CSUvgPCpmxe7pm8d6jw4s5XLcDBIFfhTbRo-qKMljPJ6Y=w1920-h800-p-l90-rj')"
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
                    <!-- 個人資料欄位 -->
                    <div
                      v-if="userStatus === 'userInfo'"
                      class="w-[808px]"
                    >
                      <form class="flex flex-nowrap justify-between mb-12 h-[40px]">
                        <div class="flex flex-initial justify-between items-center w-[560px]">
                          <label
                            for="nickName"
                            class="mr-5 w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >暱稱</label>
                          <input
                            id="nickName"
                            v-model="applicantParams.nickName"
                            name="nickName" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </div>
                        <div class="flex flex-initial justify-between items-center w-[224px]">
                          <label
                            for="gender"
                            class="mr-5 w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >性別</label>
                          <input
                            id="gender"
                            v-model="applicantParams.gender"
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
                            class="mr-5 w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >信箱</label>
                          <input
                            id="account"
                            v-model="applicantParams.account"
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
                            class="mr-5 w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >FB</label>
                          <input
                            id="fb"
                            v-model="applicantParams.fb"
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
                            class="mr-5 w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >IG</label>
                          <input
                            id="ig"
                            v-model="applicantParams.ig"
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
                            class="mr-5 w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >個人網站</label>
                          <input
                            id="profileWebsite"
                            v-model="applicantParams.profileWebsite"
                            name="profileWebsite" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </div>
                      </form>
                      <form class="mb-12 h-[40px]">
                        <div class="flex justify-between items-center">
                          <label
                            for="contactTime"
                            class="mr-5 w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >聯絡時間</label>
                          <input
                            id="contactTime"
                            v-model="applicantParams.contactTime"
                            name="contactTime" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </div>
                      </form>
                    </div>
                    <!-- 專業背景欄位 -->
                    <div
                      v-if="userStatus === 'userBackground'"
                      class="w-[808px]"
                    >
                      <form>
                        <div class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="workState"
                            class="mr-6 w-24 text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >目前狀態</label>
                          <input
                            id="workState"
                            v-model="applicantParams.workState"
                            name="workState" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </div>
                      </form>
                      <form>
                        <div class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="language"
                            class="mr-6 w-24 text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >語言</label>
                          <input
                            id="language"
                            v-model="applicantParams.language"
                            name="language" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </div>
                      </form>
                      <form>
                        <div class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="company"
                            class="mr-6 w-24 text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >公司</label>
                          <input
                            id="company"
                            v-model="applicantParams.company"
                            name="company" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </div>
                      </form>
                      <form>
                        <div class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="industry"
                            class="mr-6 w-24 text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >產業</label>
                          <input
                            id="industry"
                            v-model="applicantParams.industry"
                            name="industry" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </div>
                      </form>
                      <form>
                        <div class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="jobDescription"
                            class="mr-6 w-24 text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >職務</label>
                          <input
                            id="jobDescription"
                            v-model="applicantParams.jobDescription"
                            name="jobDescription" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </div>
                      </form>
                      <form>
                        <div class="flex justify-between items-center mb-12 h-10">
                          <label
                            for="position"
                            class="mr-6 w-24 text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >工作內容</label>
                          <input
                            id="position"
                            v-model="applicantParams.position"
                            name="position" 
                            type="text"
                            class="nowside-input"
                            disabled
                          >
                        </div>
                      </form>
                      <form>
                        <div class="flex justify-between items-center">
                          <label
                            for="profileWebsite"
                            class="mr-6 w-24 text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
                          >技能</label>
                          <div class="p-2 w-full h-[140px] text-lg text-C_blue-600 bg-C_gray-100 dark:bg-[#333333] rounded border border-C_gray-300">
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
                    </div>
                    <!-- 自我介紹欄位 -->
                    <div
                      v-if="userStatus === 'userSelfIntroduction'"
                      class="w-[808px]"
                    >
                      <form>
                        <textarea
                          id="selfIntroduction"
                          v-model="applicantParams.selfIntroduction"
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
                  <button class="py-2 mr-6 w-32 text-lg font-medium text-C_blue-700 bg-white hover:bg-C_gray-100 rounded border-2 border-C_blue-400">
                    <span class="align-sub material-icons">
                      close
                    </span>
                    未通過
                  </button>
                  <button class="py-2 w-32 text-lg font-medium text-white bg-C_green-500 hover:bg-C_green-400 rounded">
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
