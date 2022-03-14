<script>
  // let toggleInputContainer = function (input) {
  //     if (input.value != "") {
  //         input.classList.add('filled');
  //     } else {
  //         input.classList.remove('filled');
  //     }
  // }

  // let labels = document.querySelectorAll('.label');
  // for (let i = 0; i < labels.length; i++) {
  //     labels[i].addEventListener('click', function () {
  //         this.previousElementSibling.focus();
  //     });
  // }

  // window.addEventListener("load", function () {
  //     let inputs = document.getElementsByClassName("input");
  //     for (let i = 0; i < inputs.length; i++) {
  //         console.log('looped');
  //         inputs[i].addEventListener('keyup', function () {
  //             toggleInputContainer(this);
  //         });
  //         toggleInputContainer(inputs[i]);
  //     }
  // });
</script>

<template>
  <div class="flex relative flex-col justify-center py-6 min-h-screen bg-gray-100 sm:py-12">
    <img
      src="https://play.tailwindcss.com/img/beams.jpg"
      alt=""
      class="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2"
    >
    <div class="relative px-6 pt-10 pb-8 min-w-[416px] bg-white ring-1 ring-gray-300 shadow-xl sm:px-10 sm:mx-auto sm:rounded">
      <div class="mx-auto max-w-md">
        <div class="divide-y divide-gray-300">
          <div class="py-8 space-y-6 text-base leading-7 text-gray-700">
            <div class="relative mb-8">
              <input
                id="email"
                class="nowside-input custom-input"
                type="text"
                autofocus
              >
              <label
                for="email"
                class="absolute nowside-label custom-label"
              >信箱</label>
            </div>
            <div class="relative mb-8">
              <input
                id="password"
                class="nowside-input custom-input"
                type="password"
                autofocus
              >
              <label
                for="password"
                class="absolute nowside-label custom-label"
              >密碼</label>
            </div>
            <div class="flex justify-between content-start">
              <div class="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  class="nowside-checkbox"
                >
                <label
                  for="remember"
                  class="text-sm"
                >記住帳號密碼</label>
              </div>
              <div>
                <span class="text-sm text-green-500">忘記密碼？</span>
              </div>
            </div>
          </div>
          <div class="pt-8 text-base font-semibold leading-7">
            <button class="py-4 px-6 mb-8 w-full text-white bg-blue-600 rounded">
              登入
            </button>
            <button class="py-4 px-6 mb-8 w-full text-blue-600 bg-blue-100 rounded border border-blue-300">
              立即註冊
            </button>
            <p class="flex justify-center text-xs text-blue-600">
              沒有信箱？立即註冊
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .custom-input {
    transition: border 0.2s ease-in-out;
    min-width: 280px
  }

  .custom-label {
    transition: all 0.2s ease-out;
    top: 0.4rem;
    left: 0;
  }

  .custom-input:focus+.custom-label,
  .custom-input:active+.custom-label,
  .custom-input.filled+.custom-label {
    font-size: .75rem;
    transition: all 0.2s ease-out;
    top: -0.5rem;
    color: #40C3A9;
  }
</style>
