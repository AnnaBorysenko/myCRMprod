<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="w-4 p-4">
      <div class="flex items-center">
        <input :id="cake.id" type="checkbox"
               class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label :for="cake.id" class="sr-only">checkbox</label>
      </div>
    </td>
    <td scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
      <img class="w-10 h-10 rounded-full" :src="cake.imageUrl" alt="cake"/>
      <div class="pl-3">
        {{ cake.name }}
      </div>
    </td>
    <td class="px-6 py-4">
      {{ cake.count }}
    </td>
    <td class="px-6 py-4">
      ${{ cake.price }}
    </td>
    <td class="px-6 py-4">
      <div v-if="cake.isActive === true" class="flex items-center">
        <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 cursor-pointer"
        ></div>
        {{ $t('active') }}
      </div>
      <div v-else class="flex items-center cursor-pointer"
           >
        <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
        {{ $t('inactive') }}
      </div>
    </td>
    <td class="px-6 py-4">
      <TheModal :cake="cake"></TheModal>
    </td>
    <td class="px-6 py-4">
      <button type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >{{ $t('buttons.archive') }}</button>
    </td>
  </tr>
</template>


<script setup>

const props = defineProps({
  cake: {
    type: Object,
    required: true,
    default: () => {},
  },

});
</script>




