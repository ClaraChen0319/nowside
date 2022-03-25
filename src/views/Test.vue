<script>
// <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Login from '@/components/LoginModal.vue';
import { uploadProfile, signup } from '@/http/api';

export default {
  name: 'Test',
  components: {
    Header, Footer, Login,
  },
  data() {
    return {
      signupParams: {
        account: "test@gmail.com",
        password: "test",
        nickName: "Crystal Kay",
        gender: "女",
        profilePicture: "~/Upload/ProfilePicture/unnamed(0).jpg",
        contactTime: "09:00～12:00 PM",
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
      
      uploadProfile(formdata).then(res =>{
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
    postSignup() {
      signup(this.signupParams).then(res =>{
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
  <Header></Header>
  <div
    class="flex justify-center items-center w-full h-full"
    style="background-image: linear-gradient(45deg, #DFF5F1 5% , #ffffff 40%, #A7CBEA 150%); background-attachment: fixed;"
  >
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
        @click="postSignup"
      >
        註冊
      </button>
    </form>
  </div>
  <Footer></Footer>
</template>
