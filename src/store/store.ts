import create from 'vue-zustand'
import {useQuery} from '@vue/apollo-composable';
import {GET_PRODUCTS} from "~/reqest/getProducts";

interface Product {
    id: number,
    name: string,
    count: number,
    cost: number,
    description: string,
    imageUrl: string,
    categories: string[]

}

interface BearState {
    cakes: Product[]
    addCake: () => void,
    removeCake: () => void,
    increaseCount: () => void,
    decreaseCount: () => void,
}


export const useStore = create<BearState>(set => ({
    cakes: [],
    addCake: (cake) =>
        set((state) => ({
            cakes: [
                {name: cake.name, id: Math.random() * 100},
                ...state.cakes,
            ]
        })),
    removeCake: (id) =>
        set((state) => ({
            cakes: state.cakes.filter((cake) => cake.id !== id),
        })),
    increaseCount: (id) =>
        set((state) => {
            return {
                cakes: state.cakes.map(cake => {
                        console.log('cake', cake)
                        if (cake.id === id) {
                            if (cake.count === 10) {
                                alert('Maximum available for ordering')
                            } else {
                                cake.count = cake.count + 1
                            }
                        }
                        return cake
                    }
                )
            }
        }),
    decreaseCount: (id) =>
        set((state) => {
            console.log('id', id)
            return {
                cakes: state.cakes.map(cake => {
                        if (cake.id === id) {
                            if (cake.count === 1) {
                                alert('Negative quantity not allowed')
                            } else {
                                cake.count = cake.count - 1
                            }
                        }
                        return cake

                    }
                )
            }
        }),
}));
