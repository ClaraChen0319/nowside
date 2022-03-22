<script>
export default {
  name: 'AccountView',
  components: {},
  data() {
    return {
      accountParams: {
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
    };
  },
  computed: {},
  methods: {
    getAccount(){},
    postAccount(){},
  },
}
</script>

<template>
  <div
    class="pb-[104px] w-full h-full"
    style="background-image: linear-gradient(45deg, #DFF5F1 5% , #ffffff 40%, #A7CBEA 150%); background-attachment: fixed;"
  >
    <div class="py-14 px-10 nowside-container nowside-shadow">
      <div class="flex justify-between mb-[72px]">
        <div class="flex relative flex-col justify-center ml-4">
          <div
            class="w-[320px] h-[320px] rounded-full nowside-backgroundImage"
            style="background-image: url('https://lh3.googleusercontent.com/bbR_o6X9VgjiJKsRcu-ESXwz5M9do7eFs4CSUvgPCpmxe7pm8d6jw4s5XLcDBIFfhTbRo-qKMljPJ6Y=w1920-h800-p-l90-rj')"
          ></div>
          <button
            class="flex absolute right-8 bottom-28 justify-center items-center w-[60px] h-[60px] bg-green-500 rounded-full border-4 border-white nowside-backgroundImage"
          >
            <span class="text-3xl text-white align-sub material-icons">
              monochrome_photos
            </span>
          </button>
        </div>
        <div class="flex flex-col items-end min-w-[864px]">
          <div class="mb-12 w-full text-xl font-bold text-blue-600 border-b-2 border-blue-400">
            個人資料
          </div>
          <div class="w-[808px]">
            <form class="flex flex-nowrap justify-between">
              <div class="flex flex-initial justify-between items-center mb-12 w-[576px] h-10">
                <label
                  for="nickName"
                  class="mr-6 w-24 text-lg font-bold text-blue-500"
                >暱稱</label>
                <input
                  id="nickName"
                  v-model="accountParams.nickName"
                  name="nickName" 
                  type="text"
                  class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
                >
              </div>
              <div class="flex flex-initial justify-between items-center mb-12 w-[206px] h-10">
                <label
                  for="gender"
                  class="mr-6 w-24 text-lg font-bold text-blue-500"
                >性別</label>
                <input
                  id="gender"
                  v-model="accountParams.gender"
                  name="gender" 
                  type="text"
                  class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
                >
              </div>
            </form>
            <form>
              <div class="flex justify-between items-center mb-12 h-10">
                <label
                  for="account"
                  class="mr-6 w-24 text-lg font-bold text-blue-500"
                >信箱</label>
                <input
                  id="account"
                  v-model="accountParams.account"
                  name="account" 
                  type="text"
                  class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
                >
              </div>
            </form>
            <form>
              <div class="flex justify-between items-center mb-12 h-10">
                <label
                  for="fb"
                  class="mr-6 w-24 text-lg font-bold text-blue-500"
                >FB</label>
                <input
                  id="fb"
                  v-model="accountParams.fb"
                  name="fb" 
                  type="text"
                  class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
                >
              </div>
            </form>
            <form>
              <div class="flex justify-between items-center mb-12 h-10">
                <label
                  for="ig"
                  class="mr-6 w-24 text-lg font-bold text-blue-500"
                >IG</label>
                <input
                  id="ig"
                  v-model="accountParams.ig"
                  name="ig" 
                  type="text"
                  class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
                >
              </div>
            </form>
            <form>
              <div class="flex justify-between items-center mb-12 h-10">
                <label
                  for="profileWebsite"
                  class="mr-6 w-24 text-lg font-bold text-blue-500"
                >個人網站</label>
                <input
                  id="profileWebsite"
                  v-model="accountParams.profileWebsite"
                  name="profileWebsite" 
                  type="text"
                  class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
                >
              </div>
            </form>
            <form>
              <div class="flex justify-between items-center h-10">
                <label
                  for="contactTime"
                  class="mr-6 w-24 text-lg font-bold text-blue-500"
                >聯絡時間</label>
                <input
                  id="contactTime"
                  v-model="accountParams.contactTime"
                  name="contactTime" 
                  type="text"
                  class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
                >
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-end">
        <div class="mb-12 w-full text-xl font-bold text-blue-600 border-b-2 border-blue-400">
          專業背景
        </div>
        <div class="mb-14 w-[1160px]">
          <form class="flex flex-nowrap justify-between">
            <div class="flex flex-initial justify-between items-center mb-12 w-[728px] h-10">
              <label
                for="workState"
                class="mr-6 w-24 text-lg font-bold text-blue-500"
              >目前狀態</label>
              <input
                id="workState"
                v-model="accountParams.workState"
                name="workState" 
                type="text"
                class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
              >
            </div>
            <div class="flex flex-initial justify-between items-center mb-12 w-[384px] h-10">
              <label
                for="language"
                class="mr-6 w-24 text-lg font-bold text-blue-500"
              >語言</label>
              <input
                id="language"
                v-model="accountParams.language"
                name="language" 
                type="text"
                class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
              >
            </div>
          </form>
          <form class="flex flex-nowrap justify-between">
            <div class="flex flex-initial justify-between items-center mb-12 w-[728px] h-10">
              <label
                for="company"
                class="mr-6 w-24 text-lg font-bold text-blue-500"
              >公司</label>
              <input
                id="company"
                v-model="accountParams.company"
                name="company" 
                type="text"
                class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
              >
            </div>
            <div class="flex flex-initial justify-between items-center mb-12 w-[384px] h-10">
              <label
                for="industry"
                class="mr-6 w-24 text-lg font-bold text-blue-500"
              >產業</label>
              <input
                id="industry"
                v-model="accountParams.industry"
                name="industry" 
                type="text"
                class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
              >
            </div>
          </form>
          <form class="flex flex-nowrap justify-between">
            <div class="flex flex-initial justify-between items-center mb-12 w-[728px] h-10">
              <label
                for="position"
                class="mr-6 w-24 text-lg font-bold text-blue-500"
              >工作內容</label>
              <input
                id="position"
                v-model="accountParams.position"
                name="position" 
                type="text"
                class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
              >
            </div>
            <div class="flex flex-initial justify-between items-center mb-12 w-[384px] h-10">
              <label
                for="jobDescription"
                class="mr-6 w-24 text-lg font-bold text-blue-500"
              >職務</label>
              <input
                id="jobDescription"
                v-model="accountParams.jobDescription"
                name="jobDescription" 
                type="text"
                class="w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300 form-input"
              >
            </div>
          </form>
          <form>
            <div class="flex justify-between items-center mb-12 h-10">
              <label
                for="profileWebsite"
                class="mr-6 w-24 text-lg font-bold text-blue-500"
              >技能</label>
              <div class="p-2 w-full text-lg text-blue-600 bg-gray-100 rounded border border-gray-300">
                <div class="inline-block mr-4 bg-blue-200 rounded">
                  　Vue　
                  <span class="align-sub material-icons">
                    close
                  </span>
                </div>
                <div class="inline-block mr-4 bg-blue-200 rounded">
                  　C++　
                  <span class="align-sub material-icons">
                    close
                  </span>
                </div>
                <div class="inline-block mr-4 bg-blue-200 rounded">
                  　MySQL　
                  <span class="align-sub material-icons">
                    close
                  </span>
                </div>
                <div class="inline-block mr-4 bg-blue-200 rounded">
                  　Java　
                  <span class="align-sub material-icons">
                    close
                  </span>
                </div>
                <div class="inline-block mr-4 bg-blue-200 rounded">
                  　PHP　
                  <span class="align-sub material-icons">
                    close
                  </span>
                </div>
              </div>
            </div>
          </form>
          <form>
            <div class="flex justify-between items-center">
              <label
                for="selfIntroduction"
                class="mr-6 w-24 text-lg font-bold text-blue-500"
              >自我介紹</label>
              <textarea
                id="selfIntroduction"
                v-model="accountParams.selfIntroduction"
                class="p-2 w-full text-blue-600 bg-gray-100 rounded border border-gray-300 focus:outline-none"
                name="selfIntroduction"
                rows="5"
                maxlength="1000"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="flex justify-center w-full">
          <button class="py-2 mr-6 w-[196px] text-lg font-bold text-blue-700 bg-white hover:bg-gray-100 rounded border-2 border-blue-400">
            取消
          </button>
          <button class="py-2 w-[196px] text-lg font-bold text-white bg-blue-400 hover:bg-blue-300 rounded">
            <span class="align-sub material-icons">
              bookmark_border
            </span>
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
