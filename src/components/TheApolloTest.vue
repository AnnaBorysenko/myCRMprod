<!--<script setup lang="ts">-->
<!--// import {useStore} from '~/store/store'-->
<!--import {GET_PRODUCTS} from "~/reqest/getProducts";-->
<!--import {-->
<!--  useResult,-->
<!--  useQuery-->

<!--} from '@vue/apollo-composable';-->

<!--// const {cakes, removeCake, increaseCount, decreaseCount} = useStore()-->




<!--    const { result, loading, error } = useQuery(GET_PRODUCTS);-->
<!--    console.log({result})-->


<!--</script>-->

<!--<template>-->
<!--&lt;!&ndash;  <div>{{JSON.stringify(result, null, 2)}}</div>&ndash;&gt;-->
<!--&lt;!&ndash;  <div></div>&ndash;&gt;-->

<!--  <p v-if="error">Something went wrong...</p>-->
<!--  <p v-if="loading">Loading...</p>-->
<!--  <div v-else v-for="product in result.products" :key="product.id">-->
<!--  <div>{{ product.name }}</div>-->
<!--    <br>-->
<!--  <div>{{ product.count }}</div>-->
<!--    <br>-->
<!--  <div>{{ product.price}}</div>-->
<!--    <br>-->
<!--    <div>categories :</div>-->
<!--    <div v-for="category in product.categories" :key="category.name">-->
<!--      <div>{{ category.name }}</div>-->
<!--    </div>-->

<!--    <br>-->
<!--  <div>{{ product.imageUrl }}</div>-->
<!--  </div>-->
<!--  <div></div>-->


<!--    <h1 class="text-3xl font-bold underline">-->
<!--      Hello world!-->
<!--    </h1>-->


<!--</template>-->

<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <button @click="fetchProducts()">start fetch</button>&ndash;&gt;-->
<!--&lt;!&ndash;  <div v-for="cake in cakes" :key="cake.id">&ndash;&gt;-->
<!--&lt;!&ndash;    <div class="cakes">&ndash;&gt;-->
<!--&lt;!&ndash;      <div>{{ cake.name }}</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="quantity-toggle">&ndash;&gt;-->
<!--&lt;!&ndash;        <button class="button" @click="decreaseCount(cake.id)">-</button>&ndash;&gt;-->

<!--&lt;!&ndash;        <input type="text" :value="cake.count" readonly>&ndash;&gt;-->
<!--&lt;!&ndash;        <button class="button" @click="increaseCount(cake.id)">+</button>&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->

<!--&lt;!&ndash;      <div> $ {{ cake.price }}</div>&ndash;&gt;-->
<!--&lt;!&ndash;      <button class="btn" @click="removeCake(cake.id)">remove</button>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--<style>-->

<!--.cakes {-->
<!--  border: 1px solid #589ef8;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  flex-direction: column;-->
<!--  height: 150px;-->
<!--  width: 300px;-->
<!--  margin: 10px auto;-->
<!--  padding: 20px 0;-->
<!--}-->

<!--.btn {-->
<!--  padding: 10px;-->
<!--  max-width: 100px;-->
<!--  margin: 10px auto;-->
<!--  border: 2px solid #ddd;-->
<!--}-->

<!--pre {-->
<!--  background: #eee;-->
<!--  padding: 1rem;-->
<!--  border-radius: 5px;-->
<!--}-->

<!--.quantity-toggle {-->
<!--  display: flex;-->
<!--  margin: auto;-->
<!--  padding: 10px;-->
<!--}-->

<!--input {-->
<!--  border: 0;-->
<!--  border-top: 2px solid #ddd;-->
<!--  border-bottom: 2px solid #ddd;-->
<!--  width: 2.5rem;-->
<!--  text-align: center;-->
<!--  padding: 0 .5rem;-->
<!--}-->

<!--.button {-->
<!--  border: 2px solid #ddd;-->
<!--  padding: .5rem;-->
<!--  background: #f5f5f5;-->
<!--  color: #888;-->
<!--  font-size: 1rem;-->
<!--  cursor: pointer;-->
<!--}-->


<!--</style>-->



<template>

<test></test>

</template>

<script>
const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default {
  setup() {
    return {
      people,
    }
  },
}
</script>
