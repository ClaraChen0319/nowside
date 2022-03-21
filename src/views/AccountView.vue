<script>
// import LoginModal from '@/components/LoginModal.vue';

export default {
  name: 'AccountView',
  components: {
    // LoginModal,
  },
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
        workState: '',
        language: '',
        company: '',
        industry: '',
        position: '',
        jobDescription: '',
        skills: '',
        selfIntroduction: '',
      },
    };
  },
  computed: {},
  methods: {},
}
</script>

<template>
  <div
    class="w-full h-full"
    style="background-image: linear-gradient(45deg, #DFF5F1 5% , #ffffff 40%, #A7CBEA 150%); background-attachment: fixed;"
  >
    <div class="flex justify-between mb-[72px] nowside-container">
      <div class="flex flex-col items-center py-16 px-14 min-w-[416px] nowside-shadow">
        <div
          class="mb-6 w-[280px] h-[280px] rounded-full nowside-backgroundImage"
          style="background-image: url('https://lh3.googleusercontent.com/bbR_o6X9VgjiJKsRcu-ESXwz5M9do7eFs4CSUvgPCpmxe7pm8d6jw4s5XLcDBIFfhTbRo-qKMljPJ6Y=w1920-h800-p-l90-rj')"
        ></div>
        <ul class="text-lg text-center text-blue-700">
          <li class="mb-6 font-bold">
            Crystal Kay
          </li>
          <li class="mb-6 hover:text-blue-400">
            <button class="font-bold">
              個人資料
            </button>
          </li>
          <li class="mb-6 hover:text-blue-400">
            <button class="font-bold">
              發起的專案
            </button>
          </li>
          <li class="mb-6 hover:text-blue-400">
            <button class="font-bold">
              參與的專案
            </button>
          </li>
          <li class="mb-6 hover:text-blue-400">
            <button class="font-bold">
              收藏的專案
            </button>
          </li>
          <li class=" hover:text-blue-400">
            <button class="font-bold">
              通知
            </button>
          </li>
        </ul>
      </div>
      <div class="p-10 min-w-[856px] nowside-shadow">
        <div class="mb-12 text-xl font-bold text-blue-600 border-b-2 border-blue-400">
          個人資料
        </div>
        <form class="flex flex-nowrap">
          <div class="flex flex-initial justify-between items-center mb-12 ml-9 w-[600px] h-10">
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
              disabled
            >
          </div>
          <div class="flex flex-initial justify-between items-center mb-12 ml-9 w-[200px] h-10">
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
              disabled
            >
          </div>
        </form>
        <form>
          <div class="flex justify-between items-center mb-12 ml-9 h-10">
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
              disabled
            >
          </div>
        </form>
        <form>
          <div class="flex justify-between items-center mb-12 ml-9 h-10">
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
              disabled
            >
          </div>
        </form>
        <form>
          <div class="flex justify-between items-center mb-12 ml-9 h-10">
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
              disabled
            >
          </div>
        </form>
        <form>
          <div class="flex justify-between items-center mb-12 ml-9 h-10">
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
              disabled
            >
          </div>
        </form>
        <form>
          <div class="flex justify-between items-center ml-9 h-10">
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
              disabled
            >
          </div>
        </form>
      </div>
    </div>
    <div class="nowside-shadow nowside-container">
      CCC
    </div>
  </div>
</template>
