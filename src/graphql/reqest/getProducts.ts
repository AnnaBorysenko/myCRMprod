import gql from 'graphql-tag'
import {Product} from "~/types/product";
export const GET_PRODUCTS = gql`
    query getProducts {
        products {
            totalCount
            totalPages
            currentPage
            items {
                id
                name
                description
                count
                price
                imageUrl
                categories {
                    name
                }
            }
        }
    }
`

export type GET_PRODUCTS_TYPE = {
    totalCount : number;
    totalPages : number;
    currentPage : number;
    items : Product[]
}



