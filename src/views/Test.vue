<script>
import Login from '@/components/LoginModal.vue';
import { S_uploadProfile, S_signup, S_checkUser } from '@/http/api';

export default {
  name: 'Test',
  components: {
    Login,
  },
  data() {
    return {
      signupParams: {
        account: '',
        password: '',
        nickName: '',
        gender: '',
        profilePicture: '',
        contactTime: '',
      },
    };
  },
  computed: {},
  methods: {
    // postLogin() {
    //   login(this.loginParams)
    //   .then(res =>{
    //     // this.$emit("emit-text", this.message);
    //     console.log(res.data);
    //     localStorage.setItem('nowsideToken', res.data.token);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     // this.signInProcess = false;
    //     // this.$notify({
    //     //   group: "error",
    //     //   title: "Error",
    //     //   text: `error`
    //     // }, 2500) ;
    //   });
    // },
    uploadImage(e) {
      // console.log(e);
      console.log(e.target.files[0]);
      const formdata = new FormData;
      formdata.append(e.target.files[0].name, e.target.files[0]);
      
      S_uploadProfile(formdata).then(res =>{
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
    postSignup() {
      S_signup(this.signupParams).then(res =>{
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
    checkToken() {
      S_checkUser().then(res =>{
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
  },
}
</script>

<template>
  <div class="flex justify-center">
    <Login class="mr-20"></Login>
    <form class="flex flex-col justify-center items-center space-x-6 h-screen">
      <label class="block mb-6">
        <span class="sr-only">Choose profile photo</span>
        <input
          type="file"
          class="block file:py-2 file:px-4 file:mr-4 w-full text-sm file:text-sm file:font-semibold text-slate-500 file:text-violet-700 file:bg-violet-50 hover:file:bg-violet-100 file:rounded-full file:border-0"
          @change="uploadImage"
        >
      </label>
      <button
        type="button"
        class="nowside-button-B"
        @click="checkToken"
      >
        註冊
      </button>
    </form>
  </div>
</template>
