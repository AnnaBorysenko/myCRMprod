<script setup>
import {GET_PRODUCTS} from "~/graphql/reqest/getProducts";
import {useQuery} from '@vue/apollo-composable'
import {computed, onMounted} from "vue"
import {initFlowbite} from "flowbite";

const {result} = useQuery(GET_PRODUCTS)
const products = computed(() => result.value?.products.items ?? [])

onMounted(() => {
  initFlowbite();
})


</script>

<template>
  <div class="p-4 ">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div
          class="flex items-center justify-between border-1 border-t-gray-150 p-2 bg-white dark:border-gray-700 dark:bg-gray-900">
        <div>
          <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction"
                  class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button">
            <span class="sr-only"></span>
            {{ $t('action.button') }}
            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownAction"
               class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
              <li>
                <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {{ $t('activate.button') }}</span>
              </li>
              <li>
                <span class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{
                    $t('inactive.button')
                  }}</span>
              </li>
            </ul>
            <div class="py-1">
              <span
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">{{
                  $t('delete.button')
                }}</span>
            </div>
          </div>
        </div>
        <label for="table-search" class="sr-only">{{ $t('search') }}</label>
        <div class="relative z-0">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" id="table-search-users"
                 class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 :placeholder="$t('search')">
        </div>
      </div>
      <div class="flex p-4 text-left">
        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
          {{ $t('add.new.product') }}
        </button>
        <div id="popup-modal" tabindex="-1"
             class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
          <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button type="button"
                      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="popup-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
              </button>
              <div class="p-6 text-center">
                <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">Create product</h3>
<!--                <TheProductForm />-->
                <button data-modal-hide="popup-modal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  {{ $t('buttons.close') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input id="checkbox-all-search" type="checkbox"
                     class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('name') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('count') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('price') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('status') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('action.button') }}
          </th>
          <th scope="col" class="px-6 py-3">
          </th>
        </tr>
        </thead>
        <tbody>
        <TheProductPrewPage
            v-for="product in products"
            :key="product.id"
            :product="product">
        </TheProductPrewPage>
        </tbody>
      </table>
    </div>
  </div>
</template>
