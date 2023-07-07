<script lang="ts" setup>
import {toggleDark} from "~/composables";
import {useI18n} from "vue-i18n";

const {locale} = useI18n({useScope: 'global'})
const switchLang = () => {
  locale.value === 'en' ? locale.value = 'ua' : locale.value = 'en'
  localStorage.setItem('lang', locale.value)

}
</script>

<template>
  <!--  <el-menu class="el-menu-demo" mode="horizontal">-->
  <!--    <el-menu-item index="1">-->
  <!--      <router-link :to="{ name: 'TheHomePage'}">-->
  <!--        <el-menu-item class="logo" index="1">{{ $t('logo') }}</el-menu-item>-->
  <!--      </router-link>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="2" h="full" @click="toggleDark()">-->
  <!--      <template #title>{{ $t('swithTheme') }}</template>-->
  <!--      <button-->
  <!--          class="border-none w-full bg-transparent cursor-pointer"-->
  <!--          style="height: var(&#45;&#45;ep-menu-item-height)">-->
  <!--        <i inline-flex i="dark:ep-moon ep-sunny"/>-->
  <!--      </button>-->
  <!--    </el-menu-item>-->
  <!--    <el-menu-item index="3" @click="switchLang">{{ $t('swithLang') }}</el-menu-item>-->
  <!--    <el-menu-item index="4">{{ $t('signIn') }}</el-menu-item>-->
  <!--    <el-menu-item index="5" class="btn-try-for-free">-->
  <!--      <router-link :to="{ name: 'Register'}">-->
  <!--        <el-button>{{ $t('tryForFree') }}</el-button>-->
  <!--      </router-link>-->
  <!--    </el-menu-item>-->

  <!--  </el-menu>-->

  <nav class="border-1 border-b-gray-150 bg-gray-50 dark:bg-gray-900">
    <div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <router-link class="flex items-center" :to="{ name: 'TheHomePage'}">
          <span class="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">{{ $t('logo') }}</span>
        </router-link>
      <div class="flex md:order-2">
        <button type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {{ $t('tryForFree') }}
        </button>
        <button data-collapse-toggle="navbar-cta" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#"
               class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
               aria-current="page">{{ $t('home') }}</a>
          </li>
          <li>
            <a href="#"
               class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{ $t('swithTheme') }}</a>
          </li>
          <li>
            <a href="#"
               class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{ $t('swithLang') }}</a>
          </li>
          <li>
            <a href="#"
               class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{{ $t('contact') }}</a>
          </li>
          <li>
            test
            <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
              <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
<style>
.logo {
  font-weight: bold;
}

.ep-menu--horizontal .ep-menu-item.btn-try-for-free:not(.is-disabled):hover {
  background-color: white;
}
</style>
