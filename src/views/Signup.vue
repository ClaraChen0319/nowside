<script>
import Header from '@/components/Header.vue';
import SignupModalStart from '@/components/SignupModalStart.vue';
import SignupModalStep1 from '@/components/SignupModalStep1.vue';
import SignupModalStep2 from '@/components/SignupModalStep2.vue';
import SignupModalStep3 from '@/components/SignupModalStep3.vue';
import SignupModalStep4 from '@/components/SignupModalStep4.vue';
import { signup } from '@/http/api';


export default {
  name: 'Signup',
  components: {
    Header, SignupModalStart, SignupModalStep1, SignupModalStep2, SignupModalStep3, SignupModalStep4,
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
    };
  },
  computed: {},
  methods: {

    postSignup() {
      signup(this.signupParams)
      .then(res =>{
        console.log(res.data);
        localStorage.setItem('nowsideToken', res.data.token); // 使用 setItem 將 token 存入 localStorage
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
    <SignupModalStart></SignupModalStart>
    <SignupModalStep1></SignupModalStep1>
    <SignupModalStep2></SignupModalStep2>
    <SignupModalStep3></SignupModalStep3>
    <SignupModalStep4></SignupModalStep4>
    <button
      type="button"
      class="nowside-buttonForSignup-A"
      @click="postSignup"
    >
      登入
    </button>
  </div>
</template>
