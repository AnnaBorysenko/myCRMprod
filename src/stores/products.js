// import {defineStore} from "pinia";
// import {apolloClient} from "../api/index"
// import gql from "graphql-tag";
//
//
// export const useProductsStore = defineStore('products', {
//     state: () => ({
//         prodData: null,
//     }),
//
//     actions: {
//         async fill() {
//             await apolloClient.resetStore();
//             this.fetchProds();
//             this.prodData = data.products;
//         },
//         fetchProds() {
//             apolloClient
//                 .query({
//                     query: gql`
//                           query {
//                             products{
//                               id
//                               name
//                               description
//                               count
//                               price
//                               imageUrl
//                               categories
//                                 {
//                                    name
//                                 }
//                                    }
//                                     }
//                                    `,
//                 })
//                 .then(({data}) => {
//                     this.prodData = data.products;
//
//                 });
//         },
//     },
//
//     getters: {},
// });