<!--<template>-->
<!--  <div>-->
<!--    <button-->
<!--        @click="onToggle"-->
<!--        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">-->
<!--      {{ title }}-->
<!--    </button>-->
<!--  </div>-->
<!--  <transition name="show">-->
<!--    <div v-if="isModalVisible">-->
<!--      <div @click="onToggle" class="absolute bg-black opacity-90 inset-0 z-0 h-100%"></div>-->
<!--      <div class="w-full max-w-lg p-3 relative m-auto rounded-xl shadow-lg bg-[#FCFCFCFF] dark:bg-gray-900">-->
<!--        <div>-->
<!--          <div>-->
<!--            <div class=" border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-8">-->
<!--              <TheProductFormCreate :product="product"/>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="p-3 mt-2 text-center space-x-4 md:block">-->
<!--            <button @click="onToggle"-->
<!--                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">-->
<!--              {{ $t('buttons.close') }}-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </transition>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      isOpen: false-->
<!--    };-->
<!--  },-->
<!--  props: {-->
<!--    product: {-->
<!--      default: {},-->
<!--      type: Object-->
<!--    },-->
<!--    title: String-->
<!--  },-->
<!--  computed: {-->
<!--    isModalVisible() {-->
<!--      return this.isOpen;-->
<!--    }-->
<!--  },-->

<!--  methods: {-->
<!--    onToggle() {-->
<!--      this.isOpen = !this.isOpen;-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->
<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--}-->

<!--.fade-enter,-->
<!--.fade-leave-to {-->
<!--  opacity: 0;-->
<!--}-->

<!--.fade-enter-active,-->
<!--.fade-leave-active {-->
<!--  transition: opacity 500ms ease-out;-->
<!--  color: #fcfcfc;-->
<!--}-->
<!--</style>-->