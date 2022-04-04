<script>
// import LoginModal from '@/components/LoginModal.vue';

export default {
  name: 'Home',
  components: {
  //   LoginModal,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
}
</script>

<template>
  <article class="pt-[60px] w-full h-full">
    <!-- banner -->
    <section class="flex relative justify-center mx-auto min-w-[1920px] min-h-[732px] bg-white dark:bg-C_black">
      <!-- 藍色波浪 -->
      <img
        class="absolute bottom-0 left-0"
        src="../assets/banner-01.svg"
        alt="banner-01"
      >
      <!-- 左半文字 + animation -->
      <div class="flex z-10 flex-col items-end w-[960px]">
        <h1 class="mt-40 mb-9 w-[646px] font-chillax text-[40px] font-medium text-C_blue-700 dark:text-C_blue-400">
          Who we are?
        </h1>
        <h1 class="w-[646px] font-chillax text-[60px] font-medium text-C_blue-700 dark:text-C_blue-400">
          We are<br><span class="text-C_green-500">Side Project Now.</span>
        </h1>
        <img
          class="mr-8 w-[612px]"
          src="../assets/banner-02.svg"
          alt="banner-02"
        >
        <div class="-mt-12 animate-bounce">
          <div class="mr-8 w-[48px] h-[48px] bg-C_green-700 rounded-full shadow-2xl"></div>
        </div>
      </div>
      <!-- 右半圖片 + input -->
      <div class="z-10 w-[960px]">
        <img
          class="mt-16"
          src="../assets/banner-03.svg"
          alt="banner-03"
        >
      </div>
    </section>
    <!-- step -->
    <section class="flex flex-col items-center py-20 mx-auto bg-white dark:bg-C_black">
      <!-- 使用步驟 -->
      <h2 class="mb-6 font-chillax text-4xl font-medium text-C_blue-500 dark:text-C_blue-200">
        STEP <span class="font-sans text-xl font-medium text-C_blue-600 dark:text-C_blue-400">使用步驟</span>
      </h2>
      <!-- 步驟卡片 -->
      <ul class="flex justify-between p-8 w-[1296px] rounded-[48px] border-[3px] border-C_green-500">
        <!-- STEP1 -->
        <li class="flex flex-col items-center w-[416px] h-[524px]">
          <img
            class="mt-16 mb-6 w-[248px] h-[254px]"
            src="../assets/card-01.svg"
            alt="step1"
          >
          <h3 class="mb-4 font-chillax text-xl font-medium text-C_blue-400">
            STEP1 <span class="font-sans text-xl font-medium text-C_green-500">瀏覽專案</span>
          </h3>
          <p class="text-center text-C_blue-700 dark:text-C_blue-200">
            登入會員後，點擊<span class="text-C_blue-400">瀏覽專案</span>尋找有興趣的<br>
            專案項目，將有興趣的專案項目點擊收藏<br>
            或直接點擊<span class="text-C_blue-400">參與專案</span>。
          </p>
        </li>
        <!-- STEP2 -->
        <li class="flex flex-col items-center w-[416px] h-[524px]">
          <img
            class="mt-16 mb-6 w-[248px] h-[254px]"
            src="../assets/card-02.svg"
            alt="step2"
          >
          <h3 class="mb-4 font-chillax text-xl font-medium text-C_blue-400">
            STEP2 <span class="font-sans text-xl font-medium text-C_green-500">等待媒合</span>
          </h3>
          <p class="text-center text-C_blue-700 dark:text-C_blue-200">
            點擊參與專案後請靜待待媒合結果，<br>
            點擊<span class="text-C_blue-400">會員中心的通知列表</span>可以查看專案進度。
          </p>
        </li>
        <!-- STEP3 -->
        <li class="flex flex-col items-center w-[416px] h-[524px]">
          <img
            class="mt-16 mb-6 w-[248px] h-[254px]"
            src="../assets/card-03.svg"
            alt="step3"
          >
          <h3 class="mb-4 font-chillax text-xl font-medium text-C_blue-400">
            STEP3 <span class="font-sans text-xl font-medium text-C_green-500">進行專案</span>
          </h3>
          <p class="text-center text-C_blue-700 dark:text-C_blue-200">
            恭喜你！媒合成功後可以<span class="text-C_blue-400">成功進行專案</span>，<br>
            和你的組員一起練功完成目標。
          </p>
        </li>
      </ul>
    </section>
    <!-- team -->
    <section class="flex flex-col items-center pt-32 pb-40 mx-auto bg-gray-100 dark:bg-[#333333]">
      <!-- 我們的團隊 -->
      <div class="flex flex-col items-center mb-40">
        <h2 class="pb-1 mb-14 w-fit text-[40px] font-bold text-center text-C_blue-600 dark:text-C_blue-200 border-4 border-x-transparent border-t-transparent border-b-C_green-500">
          我們的團隊
        </h2>
        <p class="text-xl font-medium text-C_blue-700 dark:text-C_blue-400">
          我們是一群力求新機會在火箭隊培訓的人員，由一位設計、前端、後端共同協作發想完成
        </p>
      </div>
      <!-- 組員圖片 -->
      <ul class="flex justify-between w-[1296px]">
        <!-- Sharon -->
        <li class="flex relative flex-col justify-between items-center w-[364px] h-[515px]">
          <h3 class="flex justify-center items-center py-1 px-3 font-chillax text-lg font-medium text-C_blue-500 dark:text-C_blue-200 rounded-full border-[3px] border-[#FFFF9C]">
            <span class="mr-2 text-lg material-icons">mail_outline</span>
            sharonwang.ichun@gmail.com
          </h3>
          <section class="flex justify-center items-center">
            <div class="relative w-[364px]">
              <div class="z-10 shadow-xl hovereffect">
                <img
                  class="object-cover h-[436px]"
                  src="../assets/Member-Sharon.png"
                  alt=""
                >
                <div class="overlay">
                  <h3>選擇障礙</h3>
                  <p>空瑜小萌新</p>
                  <p>傳說對決送頭達人</p>
                </div>
              </div>
              <div class="absolute top-8 left-9 w-[364px] h-[436px] bg-[#FFFF9C]"></div>
            </div>
          </section>
        </li>
        <!-- Dennis -->
        <li class="flex relative flex-col justify-between items-center w-[364px] h-[515px]">
          <h3 class="flex justify-center items-center py-1 px-3 font-chillax text-lg font-medium text-C_blue-500 dark:text-C_blue-200 rounded-full border-[3px] border-[#FFBA7B]">
            <span class="mr-2 text-lg material-icons">mail_outline</span>
            seon.kuraito@gmail.com
          </h3>
          <section class="flex justify-center items-center">
            <div class="relative w-[364px]">
              <div class="z-10 shadow-xl hovereffect">
                <img
                  class="object-cover h-[436px]"
                  src="../assets/Member-Dennis.png"
                  alt=""
                >
                <div class="overlay">
                  <h3>養老作息</h3>
                  <p>無情挖坑</p>
                  <p>愛鳥人士養成中</p>
                </div>
              </div>
              <div class="absolute top-8 left-9 w-[364px] h-[436px] bg-[#FFBA7B]"></div>
            </div>
          </section>
        </li>
        <!-- Clara -->
        <li class="flex relative flex-col justify-between items-center w-[364px] h-[515px]">
          <h3 class="flex justify-center items-center py-1 px-3 font-chillax text-lg font-medium text-C_blue-500 dark:text-C_blue-200 rounded-full border-[3px] border-[#FF7B7B]">
            <span class="mr-2 text-lg material-icons">mail_outline</span>
            clara014789@gmail.com
          </h3>
          <section class="flex justify-center items-center">
            <div class="relative w-[364px]">
              <div class="z-10 shadow-xl hovereffect">
                <img
                  class="object-cover h-[436px]"
                  src="../assets/Member-Clara.png"
                  alt=""
                >
                <div class="overlay">
                  <h3>咖啡成癮</h3>
                  <p>吃貨一名</p>
                  <p>Figma 愛好者</p>
                </div>
              </div>
              <div class="absolute top-8 left-9 w-[364px] h-[436px] bg-[#FF7B7B]"></div>
            </div>
          </section>
        </li>
      </ul>
    </section>
    <!-- feature -->
    <section class="flex flex-col items-center pt-32 pb-16 mx-auto bg-white dark:bg-C_black">
      <!-- 為什麼選擇我們 -->
      <div class="flex flex-col items-center mb-40">
        <h2 class="pb-1 mb-14 w-fit text-[40px] font-bold text-center text-C_blue-600 dark:text-C_blue-200 border-4 border-x-transparent border-t-transparent border-b-C_green-500">
          為什麼選擇我們
        </h2>
        <p class="text-xl font-medium text-C_blue-700 dark:text-C_blue-400">
          我們是一群力求新機會在火箭隊培訓的人員，由一位設計、前端、後端共同協作發想完成
        </p>
      </div>
      <!-- 特色 -->
      <ul>
        <!-- 具私密性 -->
        <li class="flex justify-center mb-6">
          <img
            class="w-[636px] h-[470px]"
            src="../assets/feature-01.svg"
            alt="feature-01"
          >
          <div class="flex flex-col justify-center items-center w-[636px] h-[470px]">
            <p class="mb-4 text-3xl font-medium text-C_blue-600 dark:text-C_blue-400">
              具私密性
            </p>
            <p class="font-medium text-center text-C_blue-700 dark:text-C_blue-200">
              除了發起者外一般人無法看到您的相關個人資料
            </p>
          </div>
        </li>
        <!-- 尋找適合您的專案 -->
        <li class="flex flex-row-reverse justify-center mb-6">
          <img
            class="w-[636px] h-[470px]"
            src="../assets/feature-02.svg"
            alt="feature-02"
          >
          <div class="flex flex-col justify-center items-center w-[636px] h-[470px]">
            <p class="mb-4 text-3xl font-medium text-C_blue-600 dark:text-C_blue-400">
              尋找適合您的專案
            </p>
            <p class="font-medium text-center text-C_blue-700 dark:text-C_blue-200">
              主要會根據您的技能等推送適合您的專案項目
            </p>
          </div>
        </li>
        <!-- 找不到適合的專案 -->
        <li class="flex justify-center">
          <img
            class="w-[636px] h-[470px]"
            src="../assets/feature-03.svg"
            alt="feature-03"
          >
          <div class="flex flex-col justify-center items-center w-[636px] h-[470px]">
            <p class="mb-4 text-3xl font-medium text-C_blue-600 dark:text-C_blue-400">
              找不到喜歡的專案
            </p>
            <p class="font-medium text-center text-C_blue-700 dark:text-C_blue-200">
              倘若找不到喜歡的專案嗎？<br>
              你有酷點子嗎？<br>
              那就自己發起專案尋找適合您的夥伴
            </p>
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>
