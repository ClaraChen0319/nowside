<script>
  var toggleInputContainer = function (input) {
      if (input.value != "") {
          input.classList.add('filled');
      } else {
          input.classList.remove('filled');
      }
  }

  var labels = document.querySelectorAll('.label');
  for (var i = 0; i < labels.length; i++) {
      labels[i].addEventListener('click', function () {
          this.previousElementSibling.focus();
      });
  }

  window.addEventListener("load", function () {
      var inputs = document.getElementsByClassName("input");
      for (var i = 0; i < inputs.length; i++) {
          console.log('looped');
          inputs[i].addEventListener('keyup', function () {
              toggleInputContainer(this);
          });
          toggleInputContainer(inputs[i]);
      }
  });
</script>

<template>
  <div class="flex relative flex-col justify-center py-6 min-h-screen bg-gray-100 sm:py-12">
    <img
      src="https://play.tailwindcss.com/img/beams.jpg"
      alt=""
      class="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2 h-scerrn"
    >

    <div class="relative px-6 pt-10 pb-8 bg-white ring-1 ring-gray-900/5 shadow-xl sm:px-10 sm:mx-auto sm:min-w-[416px] sm:rounded">
      <div class="mx-auto max-w-md">
        <h1 class="flex justify-center text-2xl">
          LOGO
        </h1>

        <div class="divide-y divide-gray-300">
          <div class="py-8 space-y-6 text-base leading-7 text-gray-700">
            <div class="relative mb-8">
              <input
                id="email"
                class="p-3 pt-5 pb-2 w-full rounded border border-gray-700 focus:border-green-500 active:border-green-500 focus:outline-none active:outline-none appearance-none input focus"
                type="text"
                autofocus
              >
              <label
                for="email"
                class="absolute pt-4 pl-3 -mt-2 mt-2 mb-0 text-base cursor-text label leading-tighter text-gray-400"
              >信箱</label>
            </div>
            <div class="relative mb-8">
              <input
                id="password"
                class="p-3 pt-5 pb-2 w-full rounded border border-gray-700 focus:border-green-500 active:border-green-500 focus:outline-none active:outline-none appearance-none input focus"
                type="password"
                autofocus
              >
              <label
                for="password"
                class="absolute pt-4 pl-3 -mt-2 mt-2 mb-0 text-base cursor-text label leading-tighter text-gray-400"
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
            <button class="py-4 px-6 mb-8 w-full text-blue-600 bg-blue-100 rounded border border-[#89AECD]">
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
  .input {
    transition: border 0.2s ease-in-out;
    min-width: 280px
  }

  .input:focus+.label,
  .input:active+.label,
  .input.filled+.label {
    font-size: .75rem;
    transition: all 0.2s ease-out;
    top: -0.1rem;
    color: #40C3A9;
  }

  .label {
    transition: all 0.2s ease-out;
    top: 0.4rem;
    left: 0;
  }
</style>
