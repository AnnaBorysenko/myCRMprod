<script setup>
import {reactive} from "vue";

const props = defineProps({
  product: Object,
  default: {}
})
const updateProduct = reactive({...props.product})
</script>

<template>
  <div v-if="product">TEST {{ JSON.stringify(product) }}</div>
  <div class="h-auto max-w-lg mx-auto">
    <form class="p-6">
      <img class="w-20 h-20 mx-auto mb-5 rounded-full" src="https://picsum.photos/200" alt="product"/>
      <div class="mb-6 ">
        <label for="product_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product name
          : </label>
        <input
               v-model="updateProduct.name"
               type="text"
               id="product_name"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                >
      </div>
      <div class="mb-6">
        <label for="product_count" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product count
          :</label>
        <input
               v-model="updateProduct.count"
               type="text"
               id="product_count"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              >
      </div>
      <div class="mb-6">
        <label for="product_price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product price
          :</label>
        <input
               v-model="updateProduct.price"
               type="text"
               id="product_price"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              >
      </div>
      <div class="mb-6">
        <label for="product_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product
          description :</label>
        <textarea
                  v-model="updateProduct.description"
                  id="product_description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 ></textarea>
      </div>
      <div class="mb-6">
        <label for="product_categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product
          categories :</label>
        <input
               v-model="updateProduct.categories.name"
               type="text"
               id="product_categories"
               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
               >
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input id="terms" type="checkbox" value=""
                 class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                 required>
        </div>
        <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $t('active') }} <a
            href="#" class="text-blue-600 hover:underline dark:text-blue-500"></a></label>
      </div>
      <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ $t('buttons.save') }}
      </button>
    </form>
  </div>
</template>
