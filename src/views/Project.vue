<script>
export default {
  name: 'Project',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
}
</script>

<template>
  <div
    class="fixed pb-[104px] w-screen h-screen"
    style="background-image: linear-gradient(45deg, #DFF5F1 5% , #ffffff 40%, #A7CBEA 150%);"
  >
    <div class="flex flex-col justify-center items-center py-12 h-[232px] nowside-container nowside-shadow">
      <div class="w-[1076px]">
        <label class="block relative mb-12">
          <span class="flex absolute inset-y-0 left-0 items-center pl-2">
            <span
              class="ml-12 text-3xl text-green-500 material-icons"
            >search</span>
          </span>
          <input
            class="block py-3 pr-3 pl-32 w-full placeholder:italic placeholder:text-gray-700 bg-white rounded border-2 border-blue-500 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 shadow-sm"
            placeholder="搜尋感興趣的side project"
            type="text"
            name="search"
          >
        </label>
        <form>
          <select
            id=""
            class="py-2 pr-10 pl-6 mr-8 text-blue-700 rounded-[4px] border-2 border-blue-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-right-[1rem] form-select"
            name=""
          >
            <option
              value=""
              disabled
              selected
            >
              專案類別
            </option>
          </select>
          <select
            id=""
            class="py-2 pr-10 pl-6 mr-8 text-blue-700 rounded-[4px] border-2 border-blue-400 focus:border-green-500 focus:ring-1 focus:ring-green-500 bg-right-[1rem] form-select"
            name=""
          >
            <option
              value=""
              disabled
              selected
            >
              媒合期限
            </option>
          </select>
          <select
            id=""
            class="py-2 pr-10 pl-6 mr-8 text-blue-700 rounded-[4px] border-2 border-blue-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 bg-right-[1rem] form-select"
            name=""
          >
            <option
              value=""
              disabled
              selected
            >
              團隊人數
            </option>
          </select>
          <select
            id=""
            class="py-2 pr-10 pl-6 mr-8 text-blue-700 rounded-[4px] border-2 border-blue-400 focus:border-green-500 focus:ring-2 focus:ring-green-500 bg-right-[1rem] form-select"
            name=""
          >
            <option
              value=""
              disabled
              selected
            >
              使用技術
            </option>
          </select>
        </form>
      </div>
    </div>
    <div class="nowside-container nowside-shadow">
    </div>
  </div>
</template>
