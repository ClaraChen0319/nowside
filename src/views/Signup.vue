<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { signup } from '@/http/api';


export default {
  name: 'Signup',
  components: {
    Header, Footer,
  },
  data() {
    return {
      signupParams: {
        account: "",
        password: "",
        nickName: "",
        gender: "",
        profilePicture: "",
        contactTime: "",
      },
      confirm: '',
    };
  },
  computed: {},
  methods: {
    postSignup() {
      signup(this.signupParams)
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
  <Header></Header>
  <div
    class="w-full h-full"
    style="background-image: linear-gradient(45deg, #DFF5F1 5% , #ffffff 40%, #A7CBEA 150%); background-attachment: fixed;"
  >
    <!-- Step1 暱稱 -->
    <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
      <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-C_gray-300 shadow-xl">
        <div class="mx-auto max-w-[384px]">
          <div class="my-8">
            <div class="mb-8">
              <img
                src="@/assets/logo.png"
                alt="logo"
                class="mx-auto max-h-[126px] align-middle"
              >
            </div>
            <div class="mb-12 font-bold text-center text-C_blue-700">
              <p class="mb-4 text-3xl">
                歡迎進入腦塞 project世界
              </p>
              <p class="mb-8 text-3xl">
                Mr. Sider <span class="material-icons">edit</span>
              </p>
              <p>
                以下所填寫的資訊將有助於<br>幫助我們推薦適合你的專案項目
              </p>
            </div>
            <div class="mb-8">
              <RouterLink
                class="nowside-button-A"
                to="/signup"
              >
                開始
              </RouterLink>
              <p class="flex justify-center text-xs text-C_blue-600">
                已經有腦塞project的帳戶了嗎？
                <RouterLink
                  class="text-C_green-500"
                  to="/"
                >
                  立即登入
                </RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Step2 帳密 -->
    <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
      <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-C_gray-300 shadow-xl">
        <div class="mx-auto max-w-[384px] divide-y divide-C_gray-300">
          <div class="my-8 font-bold text-center text-C_blue-700">
            <p class="text-3xl">
              請輸入註冊信箱、密碼
            </p>
          </div>
          <form class="mb-8">
            <div class="relative mb-8">
              <input
                id="account"
                v-model="signupParams.account"
                name="account" 
                type="text"
                class="peer nowside-loginInput"
                placeholder="信箱"
              >
              <label
                for="account"
                class="nowside-loginLabel"
                :class="[ signupParams.account ? 'nowside-loginFilled' : '' ]"
              >信箱</label>
            </div>
            <div class="relative mb-8">
              <input
                id="password"
                v-model="signupParams.password"
                type="password"
                name="password"     
                class="peer nowside-loginInput"
                placeholder="密碼"
              >
              <label
                for="password"
                class="nowside-loginLabel"
                :class="[ signupParams.password ? 'nowside-loginFilled' : '' ]"
              >密碼</label>
            </div>
            <div class="relative">
              <input
                id="confirm"
                v-model="confirm"
                type="confirm"
                name="confirm"     
                class="peer nowside-loginInput"
                placeholder="確認密碼"
              >
              <label
                for="confirm"
                class="nowside-loginLabel"
                :class="[ confirm ? 'nowside-loginFilled' : '' ]"
              >確認密碼</label>
            </div>
          </form>
          <div class="pt-8 mb-8">
            <button
              type="button"
              class="nowside-button-A"
            >
              下一步
            </button>
            <p class="flex justify-center text-xs text-C_blue-600">
              完成後，進一步填寫個人資料設定
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Step3 性別 -->
    <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
      <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-C_gray-300 shadow-xl">
        <div class="mx-auto max-w-[384px] divide-y divide-C_gray-300">
          <div class="my-8 font-bold text-center text-C_blue-700">
            <p class="mb-8 text-3xl">
              請問您的性別
            </p>
            <form class="flex flex-col items-center mb-8 text-lg">
              <div class="mb-8">
                <input
                  id="male"
                  v-model="signupParams.gender"
                  value="male"
                  name="gender"
                  class="nowside-signupRadio"
                  type="radio"
                >
                <label
                  for="male"
                  class="ml-2 text-C_blue-700"
                >男性</label>
              </div>
              <div class="mb-8">
                <input
                  id="female"
                  v-model="signupParams.gender"
                  value="female"
                  name="gender"
                  class="nowside-signupRadio"
                  type="radio"
                >
                <label
                  for="female"
                  class="ml-2 text-C_blue-700"
                >女性</label>
              </div>
              <div>
                <input
                  id="other" 
                  v-model="signupParams.gender"
                  value="other"
                  name="gender"
                  class="nowside-signupRadio"
                  type="radio"
                >
                <label
                  for="other"
                  class="ml-2 text-C_blue-700"
                >其他</label>
              </div>
            </form>
          </div>
          <div class="pt-8 mb-8">
            <button
              type="button"
              class="nowside-button-A"
            >
              下一步
            </button>
            <p class="flex justify-center text-xs text-C_blue-600">
              完成後，進一步填寫個人資料設定
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Step4 圖片 -->
    <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
      <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-C_gray-300 shadow-xl">
        <div class="mx-auto max-w-[384px] divide-y divide-C_gray-300">
          <div class="my-8 text-C_gray-700">
            <div class="flex justify-around items-center mb-14 w-full">
              <span class="text-3xl text-C_blue-700 material-icons">arrow_back_ios</span>
              <div class="flex overflow-hidden items-center max-w-[96px] max-h-[96px] rounded-full border-2 border-C_gray-300">
                <img
                  src="@/assets/poopoo.png"
                  alt="poopoo"
                  class="align-middle"
                >
              </div>
              <div class="overflow-hidden max-w-[96px] max-h-[96px] rounded-full border-2 border-C_gray-300">
                <img
                  src="@/assets/zombie.png"
                  alt="zombie"
                  class="align-middle"
                >
              </div>
              <div class="overflow-hidden max-w-[96px] max-h-[96px] rounded-full border-2 border-C_gray-300">
                <img
                  src="@/assets/ghost.png"
                  alt="ghost"
                  class="align-middle"
                >
              </div>
              <span class="text-3xl text-C_blue-700 material-icons">arrow_forward_ios</span>
            </div>
            <div class="mb-12 text-center">
              <p class="mb-6 text-3xl font-bold text-C_blue-700">
                請對您的大頭貼進行設定
              </p>
              <p class="text-lg font-bold text-C_blue-500">
                或是選擇我們提供的預設素材
              </p>
            </div>
          </div>
          <div class="pt-8 mb-8">
            <button
              type="button"
              class="nowside-button-A"
            >
              上傳
            </button>
            <RouterLink
              class="nowside-button-B"
              to="/signup"
            >
              下一步
            </RouterLink>
            <p class="flex justify-center text-xs text-C_blue-600">
              完成後，進一步填寫個人資料設定
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Step5 時間 -->
    <div class="flex overflow-hidden relative flex-col justify-center min-h-screen">
      <div class="relative mx-auto min-w-[464px] bg-white rounded ring-1 ring-C_gray-300 shadow-xl">
        <div class="mx-auto max-w-[384px] divide-y divide-C_gray-300">
          <div class="my-8 text-C_gray-700">
            <div class="flex justify-around items-center mb-14 w-full">
              <div class="flex overflow-hidden items-center max-w-[96px] max-h-[96px] rounded-full border-2 border-C_gray-300">
                <img
                  src="@/assets/poopoo.png"
                  alt="poopoo"
                  class="align-middle"
                >
              </div>
            </div>
            <div class="mb-12 text-center">
              <p class="mb-6 text-3xl font-bold text-C_blue-700">
                便便人，請提供您方便回復專案等相關問題的時段 :D
              </p>
            </div>
            <div class="relative">
              <select
                id="contactTime"
                v-model="signupParams.contactTime"
                name="contactTime"
                class="py-4 pl-6 w-full text-lg font-bold text-C_blue-700 indent-20 bg-C_gray-100 rounded border border-C_gray-700 focus:border-C_green-500 focus:outline-none active:outline-none focus:ring-C_green-500 form-select"
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
          </div>
          <div class="pt-8 mb-8">
            <button
              type="button"
              class="nowside-button-A"
            >
              完成
            </button>
            <p class="flex justify-center text-xs text-C_blue-600">
              完成後，進一步填寫個人資料設定
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
