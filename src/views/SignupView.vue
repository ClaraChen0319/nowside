<script setup>
import SignupModalStart from '@/components/SignupModalStart.vue';
import SignupModalStep1 from '@/components/SignupModalStep1.vue';
import SignupModalStep2 from '@/components/SignupModalStep2.vue';
import SignupModalStep3 from '@/components/SignupModalStep3.vue';
import SignupModalStep4 from '@/components/SignupModalStep4.vue';
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
  </div>
</template>
