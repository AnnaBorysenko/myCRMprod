<script setup>
import {GET_PRODUCT} from "~/graphql/reqest/getProduct";
import  {useRoute} from "vue-router"
import {useQuery} from "@vue/apollo-composable";
import {computed} from "vue";
import { onMounted } from 'vue'
import {initModals} from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initModals();
})

const route = useRoute()
const { result, loading } = useQuery(GET_PRODUCT, {id: route.params.id})
const product = computed(() => result.value?.product ?? {})

console.log("prodView,", product)


</script>
<template>
  <div class="h-auto max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="h-auto m-5 max-w-lg mx-auto" src="https://picsum.photos/300" alt="product" />
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ product.name}}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ product.description}}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> count : {{ product.count}}</p>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">$ {{ product.price}}</p>
      <a href="#" data-modal-target="popup-modal" data-modal-toggle="popup-modal"  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ $t('edit.product') }}
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
      <div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
            <div class="p-6 text-center">
              <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">Update product</h3>
              <div v-if="!loading"><TheProductForm :product="product"/></div>
              <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">{{ $t('buttons.close') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>