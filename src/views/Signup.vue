<script>
import SignupModalStart from '@/components/SignupModalStart.vue';
import SignupModalStep1 from '@/components/SignupModalStep1.vue';
import SignupModalStep2 from '@/components/SignupModalStep2.vue';
import SignupModalStep3 from '@/components/SignupModalStep3.vue';
import SignupModalStep4 from '@/components/SignupModalStep4.vue';
import { signup } from '@/http/api';


export default {
  name: 'Signup',
  components: {
    SignupModalStart, SignupModalStep1, SignupModalStep2, SignupModalStep3, SignupModalStep4,
  },
  data() {
    return {
      signupParams: {
        account: "abc.@gmail.com",
        password: "123",
        nickName: "123",
        gender: "男",
        defaultPicture: "default-01.jpg",
        uploadPicture: "",
        contactTime: "9:00~12:00 PM",
      },
    };
  },
  computed: {},
  methods: {
    postSignup() {
      signup(this.signupParams)
      .then(res =>{
        // this.$emit("emit-text", this.message);
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
        // this.signInProcess = false;
        // this.$notify({
        //   group: "error",
        //   title: "Error",
        //   text: `error`
        // }, 2500) ;
      });
    },
  },
}
</script>

<template>
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
