<script>
import LoginModal from '@/components/LoginModal.vue';

export default {
  name: 'Home',
  components: {
    LoginModal,
  },
  data() {
    return {};
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
    <LoginModal></LoginModal>
  </div>
</template>
