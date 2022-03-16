<script>
  export default {
      name: "ThinWithSteps",
  };
</script>

<template>
  <div class="pt-96 w-full h-full bg-gray-100">
    <div class="container mx-auto">
      <div class="mx-auto w-11/12 lg:w-2/6">
        <div class="flex justify-between items-center h-1 bg-gray-200">
          <div class="flex items-center w-1/3 h-1 bg-blue-700">
            <div class="flex justify-center items-center w-6 h-6 bg-blue-700 rounded-full shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-check"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FFFFFF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                ></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
          </div>
          <div class="flex relative justify-between items-center w-1/3 h-1 bg-blue-700">
            <div class="absolute right-5">
              <div class="relative py-1 px-2 mt-16 -mr-12 bg-white rounded shadow-lg">
                <svg
                  class="absolute inset-x-0 top-0 -mt-1 w-full"
                  width="16px"
                  height="8px"
                  viewBox="0 0 16 8"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Progress-Bars"
                      transform="translate(-322.000000, -198.000000)"
                      fill="#FFFFFF"
                    >
                      <g
                        id="Group-4"
                        transform="translate(310.000000, 198.000000)"
                      >
                        <polygon
                          id="Triangle"
                          points="20 0 28 8 12 8"
                        ></polygon>
                      </g>
                    </g>
                  </g>
                </svg>
                <p class="text-xs font-bold text-blue-700">
                  Step 1
                </p>
              </div>
            </div>
            <div class="flex justify-center items-center -ml-2 w-6 h-6 bg-blue-700 rounded-full shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-check"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#FFFFFF"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  stroke="none"
                  d="M0 0h24v24H0z"
                ></path>
                <path d="M5 12l5 5l10 -10"></path>
              </svg>
            </div>
            <div class="flex relative justify-center items-center -mr-3 w-6 h-6 bg-white rounded-full shadow">
              <div class="w-3 h-3 bg-blue-700 rounded-full"></div>
            </div>
          </div>
          <div class="flex justify-end w-1/3">
            <div class="w-6 h-6 bg-white rounded-full shadow"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
