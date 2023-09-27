<script>
import {useMutation} from "@vue/apollo-composable";
import {onMounted, ref} from 'vue'
import {initModals} from 'flowbite'
import gql from 'graphql-tag'

export default {
  props: {
    product: Object
  },
  setup(props) {
// initialize components based on data attribute selectors
    onMounted(() => {
      initModals();
    })

    let dataProduct = props.product

// const ProductFields = reactive(props.product)

    const updateProductFields = ref({
      name: dataProduct.name,
      description: dataProduct.description,
      price: Number(dataProduct.price),
      count: Number(dataProduct.count),
      categories: ["test1", "test2"],
      imageUrl: dataProduct.imageUrl,
      id: dataProduct.id
    })


    const {mutate: updateProduct} = useMutation(gql`
mutation updateProduct(
    $id: String!
    $name: String!
    $description: String!
    $count: Int!
    $price: Float!
    $categories: [String!]
    $imageUrl: String!
    $isPunlish: Boolean
) {
  updateProduct(
      id: $id
  isPublished: $isPunlish
  name: $name
  description: $description
  price: $price
  count: $count
  categories: $categories
  imageUrl: $imageUrl
) {
    name
    description
    price
    id
    count
    imageUrl
    categories {
      name
    }
  }
}

`, () => ({
      variables: {
        name: updateProductFields.value.name,
        description:  updateProductFields.value.description,
        price: Number(updateProductFields.value.price),
        count: Number(updateProductFields.value.count),
        categories: ["random", "categories"],
        imageUrl: "https://picsum.photos/200",
        id: updateProductFields.value.id
      }
    }))
    return {
      updateProductFields,
      updateProduct
    }


  }

}


// async function handleSubmit(e) {
//
//   // modal.hide()
// console.log("updateProductFields", updateProductFields.value)
//   await updateProduct()
//
// },


</script>

<template>
  <div class="h-auto max-w-lg mx-auto">
    <form @submit.prevent class="p-6">
      <img class="w-20 h-20 mx-auto mb-5 rounded-full" src="https://picsum.photos/200" alt="product"/>
      <div class="mb-6 ">
        <label for="product_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Product name :
        </label>
        <input
            v-model="updateProductFields.name"
            type="text"
            id="product_name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        >
      </div>
      <div class="mb-6">
        <label for="product_count" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product count
          :</label>
        <input
            v-model="updateProductFields.count"
            type="text"
            id="product_count"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        >
      </div>
      <div class="mb-6">
        <label for="product_price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product price
          :</label>
        <input
            v-model="updateProductFields.price"
            type="text"
            id="product_price"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        >
      </div>
      <div class="mb-6">
        <label for="product_description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product
          description :</label>
        <textarea
            v-model="updateProductFields.description"
            id="product_description"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ></textarea>
      </div>
      <!--      <div class="mb-6">-->
      <!--        <label for="product_categories" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product-->
      <!--          categories :</label>-->
      <!--        <input-->
      <!--               v-model="updateProductFields.categories.name"-->
      <!--               type="text"-->
      <!--               id="product_categories"-->
      <!--               class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"-->
      <!--               >-->
      <!--      </div>-->
      <!--      <div class="flex items-start mb-6">-->
      <!--        <div class="flex items-center h-5">-->
      <!--          <input id="terms" type="checkbox" value=""-->
      <!--                 class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"-->
      <!--                 required>-->
      <!--        </div>-->
      <!--        <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ $t('active') }} <a-->
      <!--            href="#" class="text-blue-600 hover:underline dark:text-blue-500"></a></label>-->
      <!--      </div>-->
      <button
          data-modal-hide="popup-modal"
          @click="updateProduct()"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {{ $t('buttons.save') }}
      </button>
    </form>
  </div>
</template>
