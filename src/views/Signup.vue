<script>
import { S_signup } from '@/http/api';

export default {
  name: 'Signup',
  components: {},
  data() {
    return {
      isDark: false,
      signupParams: {
        account: '',
        password: '',
        nickName: 'Mr. / Miss Sider',
        gender: '',
        profilePicture: '',
        contactTime: '09:00～12:00 PM',
      },
      confirm: '',
    };
  },
  computed: {},
  methods: {
    postSignup() {
      S_signup(this.signupParams)
      .then(res =>{
        console.log(res.data);
        // 使用 setItem 將 token 存入 localStorage
        localStorage.setItem('nowsideToken', res.data.token);
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
}
</script>

<template>
  <!-- Step1 暱稱 -->
  <article class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] nowside-shadow">
      <div class="mx-auto max-w-[384px]">
        <section class="my-8">
          <!-- LOGO -->
          <div class="my-12">
            <img
              src="@/assets/logo.png"
              alt="logo"
              class="mx-auto max-h-[126px] align-middle"
            >
          </div>
          <!-- 暱稱 input -->
          <div class="flex flex-col justify-center items-center mb-14 text-C_blue-700 dark:text-C_blue-400">
            <p class="mb-8 text-3xl font-medium">
              歡迎進入腦塞 project世界
            </p>
            <div class="flex relative justify-center items-center mb-8">
              <input
                v-model="signupParams.nickName"
                type="text"
                class="w-4/5 text-3xl font-medium text-center dark:bg-C_black focus:border-0 focus:outline-none focus:ring-0"
              ><span class="inline-block absolute right-4 bottom-2 ml-1 text-3xl text-C_green-500 rounded material-icons">edit</span>
            </div>
            <p class="text-lg text-center text-C_blue-500 dark:text-C_blue-200">
              以下所填寫的資訊將有助於<br>幫助我們推薦適合你的專案項目
            </p>
          </div>
          <!-- 按鈕 -->
          <div>
            <RouterLink
              class="mb-12 nowside-button-darkBlue-lg"
              to="/signup"
            >
              開始
            </RouterLink>
            <p class="flex justify-center text-sm text-C_blue-600 dark:text-C_blue-200">
              已經有腦塞project的帳戶了嗎？
              <RouterLink
                class="text-C_green-500"
                to="/"
              >
                立即登入
              </RouterLink>
            </p>
          </div>
        </section>
      </div>
    </div>
  </article>
  <!-- Step2 帳密 -->
  <article class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] nowside-shadow">
      <div class="mx-auto max-w-[384px]">
        <section class="my-8">
          <!-- 標題 -->
          <div class="my-12 text-center text-C_blue-700 dark:text-C_blue-400">
            <p class="text-3xl font-medium">
              請輸入註冊信箱、密碼
            </p>
          </div>
          <!-- 信箱密碼 input -->
          <div class="mb-14">
            <form>
              <div class="relative mb-8">
                <input
                  id="account"
                  v-model="signupParams.account"
                  name="account" 
                  type="text"
                  class="peer nowside-peerInput"
                  placeholder="信箱"
                >
                <label
                  for="account"
                  class="nowside-peerLabel"
                  :class="[ signupParams.account ? 'nowside-peerFilled' : '' ]"
                >信箱</label>
              </div>
              <div class="relative mb-8">
                <input
                  id="password"
                  v-model="signupParams.password"
                  type="password"
                  name="password"     
                  class="peer nowside-peerInput"
                  placeholder="密碼"
                >
                <label
                  for="password"
                  class="nowside-peerLabel"
                  :class="[ signupParams.password ? 'nowside-peerFilled' : '' ]"
                >密碼</label>
              </div>
              <div class="relative">
                <input
                  id="confirm"
                  v-model="confirm"
                  type="confirm"
                  name="confirm"     
                  class="peer nowside-peerInput"
                  placeholder="確認密碼"
                >
                <label
                  for="confirm"
                  class="nowside-peerLabel"
                  :class="[ confirm ? 'nowside-peerFilled' : '' ]"
                >確認密碼</label>
              </div>
            </form>
          </div>
          <!-- 按鈕 -->
          <div>
            <button
              type="button"
              class="mb-12 nowside-button-darkBlue-lg"
            >
              下一步
            </button>
            <p class="flex justify-center text-xs text-C_blue-600 dark:text-C_blue-200">
              完成後，進一步填寫個人資料設定
            </p>
          </div>
        </section>
      </div>
    </div>
  </article>
  <!-- Step3 性別 -->
  <article class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] nowside-shadow">
      <div class="mx-auto max-w-[384px]">
        <section class="my-8">
          <!-- 標題 -->
          <div class="my-12 text-center text-C_blue-700 dark:text-C_blue-400">
            <p class="text-3xl font-medium">
              請問您的性別
            </p>
          </div>
          <!-- 性別 radio -->
          <div class="flex flex-col items-center mb-14 text-lg">
            <form class="mb-8">
              <input
                id="male"
                v-model="signupParams.gender"
                value="male"
                name="gender"
                class="nowside-genderRadio"
                type="radio"
              >
              <label
                for="male"
                class="ml-2 text-C_blue-700 dark:text-C_blue-400"
              >男性</label>
            </form>
            <form class="mb-8">
              <input
                id="female"
                v-model="signupParams.gender"
                value="female"
                name="gender"
                class="nowside-genderRadio"
                type="radio"
              >
              <label
                for="female"
                class="ml-2 text-C_blue-700 dark:text-C_blue-400"
              >女性</label>
            </form>
            <form>
              <input
                id="other" 
                v-model="signupParams.gender"
                value="other"
                name="gender"
                class="nowside-genderRadio"
                type="radio"
              >
              <label
                for="other"
                class="ml-2 text-C_blue-700 dark:text-C_blue-400"
              >其他</label>
            </form>
          </div>
          <!-- 按鈕 -->
          <div>
            <button
              type="button"
              class="mb-12 nowside-button-darkBlue-lg"
            >
              下一步
            </button>
            <p class="flex justify-center text-xs text-C_blue-600 dark:text-C_blue-200">
              完成後，進一步填寫個人資料設定
            </p>
          </div>
        </section>
      </div>
    </div>
  </article>
  <!-- Step4 圖片 -->
  <article class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] nowside-shadow">
      <div class="mx-auto max-w-[384px]">
        <section class="my-8">
          <!-- 圖片輪播 -->
          <div class="my-12 text-C_gray-700">
            <div class="flex justify-around items-center mb-14 w-full">
              <span class="text-3xl text-C_blue-700 material-icons">arrow_back_ios</span>
              <div class="flex overflow-hidden items-center max-w-[96px] max-h-[96px] rounded-full border-2 border-C_gray-300 dark:border-C_gray-900">
                <img
                  src="@/assets/poopoo.png"
                  alt="poopoo"
                  class="align-middle"
                >
              </div>
              <div class="overflow-hidden max-w-[96px] max-h-[96px] rounded-full border-2 border-C_gray-300 dark:border-C_gray-900">
                <img
                  src="@/assets/zombie.png"
                  alt="zombie"
                  class="align-middle"
                >
              </div>
              <div class="overflow-hidden max-w-[96px] max-h-[96px] rounded-full border-2 border-C_gray-300 dark:border-C_gray-900">
                <img
                  src="@/assets/ghost.png"
                  alt="ghost"
                  class="align-middle"
                >
              </div>
              <span class="text-3xl text-C_blue-700 material-icons">arrow_forward_ios</span>
            </div>
          </div>
          <!-- 內容 -->
          <div class="mb-14 text-center">
            <p class="mb-6 text-3xl font-medium text-C_blue-700 dark:text-C_blue-400">
              請對您的大頭貼進行設定
            </p>
            <p class="text-lg text-C_blue-500 dark:text-C_blue-200">
              或是選擇我們提供的預設素材
            </p>
          </div>
          <!-- 按鈕 -->
          <div>
            <button
              type="button"
              class="nowside-button-darkBlue-lg"
            >
              上傳
            </button>
            <RouterLink
              class="mb-12 nowside-button-lightBlue-lg"
              to="/signup"
            >
              下一步
            </RouterLink>
            <p class="flex justify-center text-xs text-C_blue-600 dark:text-C_blue-200">
              完成後，進一步填寫個人資料設定
            </p>
          </div>
        </section>
      </div>
    </div>
  </article>
  <!-- Step5 時間 -->
  <article class="flex overflow-hidden relative flex-col justify-center min-h-screen">
    <div class="relative mx-auto min-w-[464px] nowside-shadow">
      <div class="mx-auto max-w-[384px]">
        <section class="my-8">
          <!-- 大頭貼 -->
          <div class="flex justify-around items-center my-12 w-full">
            <div class="flex overflow-hidden items-center max-w-[96px] max-h-[96px] rounded-full border-2 border-C_gray-300 dark:border-C_gray-900">
              <img
                src="@/assets/poopoo.png"
                alt="poopoo"
                class="align-middle"
              >
            </div>
          </div>
          <!-- 內容 -->
          <div class="mb-12 text-center">
            <p class="text-3xl font-medium text-C_blue-700 dark:text-C_blue-400">
              便便人，請提供您方便回復專案等相關問題的時段 :D
            </p>
          </div>
          <!-- 聯絡時間 input -->
          <div class="mb-14">
            <select
              id="contactTime"
              v-model="signupParams.contactTime"
              name="contactTime"
              class="py-4 pl-6 w-full text-lg font-bold text-C_blue-700 dark:text-C_blue-200 indent-20 bg-C_gray-100 dark:bg-[#333333] rounded border border-C_gray-700 focus:border-C_green-500 dark:border-C_gray-900 focus:outline-none active:outline-none focus:ring-C_green-500 form-select"
            >
              <option value="00:00～03:00 AM">
                00:00～03:00 AM
              </option>
              <option value="03:00～06:00 AM">
                03:00～06:00 AM
              </option>
              <option value="06:00～09:00 AM">
                06:00～09:00 AM
              </option>
              <option value="09:00～12:00 AM">
                09:00～12:00 AM
              </option>
              <option value="12:00～03:00 PM">
                12:00～03:00 PM
              </option>
              <option value="03:00～06:00 PM">
                03:00～06:00 PM
              </option>
              <option value="06:00～09:00 PM">
                06:00～09:00 PM
              </option>
              <option value="09:00～12:00 PM">
                09:00～12:00 PM
              </option>
            </select>
          </div>
          <!-- 按鈕 -->
          <div>
            <button
              type="button"
              class="mb-12 nowside-button-darkBlue-lg"
            >
              完成
            </button>
            <p class="flex justify-center text-xs text-C_blue-600 dark:text-C_blue-200">
              完成後，進一步填寫個人資料設定
            </p>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>
