<script>
import { S_attendProject } from '@/http/api';

export default {
  name: 'ProjectApply',
  components: {},
  props: {
    projectId: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      attendParams: {
        ApplicantState: '',
        // ApplicantMessage: '',
        // ApplicantSelfIntro: '',
        MembersId: 0,
        ProjectsId: 0,
        InitDate: null,
      },
    };
  },
  computed: {},
  methods: {
    // 參與專案
    postAttendParams(){
      S_attendProject(this.projectId, this.attendParams).then(res =>{
        console.log('參與專案', res.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
}
</script>

<template>
  <article class="py-[180px] w-full h-full">
    <section class="flex flex-col justify-center items-center py-20 px-10 nowside-container-lg nowside-shadow">
      <!-- Logo -->
      <div class="mb-14 w-[415px] h-[195px]">
        <img
          src="../assets/logo-apply.svg"
          alt="logo-apply"
        >
      </div>
      <!-- Title -->
      <h2 class="pb-1 mb-14 w-fit text-xl font-medium text-center text-C_blue-600 dark:text-C_blue-200 border-4 border-x-transparent border-t-transparent border-b-C_green-500">
        填寫進一步資訊讓發起者更了解你吧 :D
      </h2>
      <!-- 留言 + 自我介紹 -->
      <ul class="mb-14 w-full">
        <li class="mb-12">
          <form class="flex justify-between items-center">
            <label
              for="applicantMessage"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >留言</label>
            <textarea
              id="applicantMessage"
              v-model="attendParams.ApplicantMessage"
              class="nowside-textarea"
              name="applicantMessage"
              rows="5"
              maxlength="1000"
            ></textarea>
          </form>
        </li>
        <li>
          <form class="flex justify-between items-center">
            <label
              for="applicantSelfIntro"
              class="mr-5 min-w-[96px] text-lg font-medium text-C_blue-500 dark:text-C_blue-400"
            >自我介紹</label>
            <textarea
              id="applicantSelfIntro"
              v-model="attendParams.ApplicantSelfIntro"
              class="nowside-textarea"
              name="applicantSelfIntro"
              rows="5"
              maxlength="1000"
            ></textarea>
          </form>
        </li>
      </ul>
      <!-- 按鈕 -->
      <div class="flex justify-center w-full">
        <router-link
          class="flex justify-center items-center nowside-button-white-md"
          to="/account"
        >
          取消
        </router-link>
        <button
          class="flex justify-center items-center nowside-button-lightGreen-md"
          @click="postAttendParams"
        >
          確認
        </button>
      </div>
    </section>
  </article>
</template>
