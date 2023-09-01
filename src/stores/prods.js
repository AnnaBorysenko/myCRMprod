// import {defineStore} from "pinia";
// import {apolloClient} from "../api/index"
// import {GET_PRODUCTS} from "../reqest/getProducts";
//
//
// export const useProdsStore = defineStore('prods', {
//     state: () => ({
//         prodData: null,
//     }),
//     actions: {
//         async fetchProd() {
//             console.log("fetchProd")
//             try {
//                 this.prodData = await apolloClient.query({
//                     query: GET_PRODUCTS
//                 })
//
//             } catch (error) {
//                 console.log("er", error)
//             }
//         },
//         fill() {
//             this.prodData = ["aaa", "ddd"]
//         }
//
//     },
//
// })


