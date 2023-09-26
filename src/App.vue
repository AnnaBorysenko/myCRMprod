<template>
  <el-config-provider namespace="ep">
    <BaseHeader class="fixed w-100% "/>
    <div class="h-screen flex pt-100px main-container dark:bg-gray-900 dark:text-gray-400">
      <div class="w-1/5">
        <BaseSide />
      </div>
      <div class="w-3/4">
        <router-view />
      </div>
    </div>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>

<script setup>
import {useI18n} from "vue-i18n";

</script>
