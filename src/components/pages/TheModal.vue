<template>
  <div>
    <div class="flex items-left justify-center p-3 min-h-full">
      <button
          @click="onToggle"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {{ $t('edit.product') }}
      </button>
    </div>
    <transition name="show">
      <div v-if="isModalVisible">
        <div
            @click="onToggle"
            class="absolute bg-black opacity-90 inset-0 z-0"
        ></div>
        <div class="w-full max-w-lg p-3 relative right-50% mx-auto my-auto rounded-xl shadow-lg bg-white dark:bg-gray-900">
          <div>
            <div>
              <div class=" border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8">
                <form class="w-96 flex-auto m-6">
                  <a href="#">
                    <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt=""/>
                  </a>
                  <h5 class="m-6 text-3xl font-bold  text-gray-900 dark:text-white"> {{ cake.name }}</h5>
                  <label for="message" class="block text-sm text-left m-2 font-medium text-gray-900 dark:text-white">Change
                    description :</label>
                  <textarea id="message" rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Change description">{{cake.description}}</textarea>
                  <label for="small-input-count" class="block m-2 text-sm text-left font-medium text-gray-900 dark:text-white">Change count : </label>
                  <input type="text" id="small-input-count"
                         class="block w-full p-2 px-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         :placeholder="cake.count">
                  <label for="small-input-price" class="block m-2 text-sm text-left font-medium text-gray-900 dark:text-white">Change price : </label>
                  <input type="text" id="small-input-price"
                         class="block w-full p-2 px-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         :placeholder="`$ ${cake.price}`">
                  <label for="countries" class="block m-2 text-sm text-left font-medium text-gray-900 dark:text-white">Select category : </label>
                  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose category</option>
                    <option value="US">Cakes classic</option>
                    <option value="CA">Milk sweets</option>
                  </select>
                  <div class="flex items-center m-4">
                    <input id="default-radio-1" type="checkbox" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                  </div>
                </form>

              </div>
            </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
              >
                {{ $t('buttons.save') }}
              </button>
              <button
                  @click="onToggle"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {{ $t('buttons.close') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
props : {
    cake : Object,
},
  computed: {
    isModalVisible() {
      return this.isOpen;
    }
  },

  methods: {
    onToggle() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>