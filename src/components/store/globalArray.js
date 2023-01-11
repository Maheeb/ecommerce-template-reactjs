import {createSlice, current} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';

function generateSlug(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}
const initialStoreState ={
    categories:[
        {
            id: 1,
            text: 'Fresh Meat',
            slug: generateSlug('Fresh Meat')
        },
        {
            id: 2,
            text: 'Vegetables',
            slug: generateSlug('Vegetables')
        },
        {
            id: 3,
            text: 'Fruit & Nut Gifts',
            slug: generateSlug('Fruit & Nut Gifts')
        },
        {
            id: 4,
            text: 'Fresh Berries',
            slug: generateSlug('Fresh Berries')
        },
        {
            id: 5,
            text: 'Ocean Foods',
            slug: generateSlug('Ocean Foods')
        },


    ],
    products:[
        {
            id: 1,
            name: 'Crab Pool Security',
            catID:1,
            price: 10,
            image: 'product-1.jpg'
        },
        {
            id: 2,
            name: 'Crab Pool Security',
            catID:1,
            price: 20,
            image: 'product-2.jpg'
        },
        {
            id: 3,
            name: 'Crab Pool Security',
            catID:2,
            price: 30,
            image: 'product-3.jpg'
        },
        {
            id: 4,
            name: 'Crab Pool Security',
            catID:2,
            price: 40,
            image: 'product-4.jpg'
        },
        {
            id: 5,
            name: 'Crab Pool Security',
            catID:3,
            price: 50,
            image: 'product-5.jpg'
        },
        {
            id: 6,
            name: 'Crab Pool Security',
            catID:3,
            price: 60,
            image: 'product-6.jpg'
        },
        {
            id: 7,
            name: 'Crab Pool Security',
            catID:4,
            price: 70,
            image: 'product-7.jpg'
        },
        {
            id: 8,
            name: 'Crab Pool Security',
            catID:4,
            price: 80,
            image: 'product-8.jpg'
        },
        {
            id: 9,
            name: 'Crab Pool Security',
            catID:5,
            price: 90,
            image: 'product-9.jpg'
        },
        {
            id: 10,
            name: 'Crab Pool Security',
            catID:5,
            price: 100,
            image: 'product-10.jpg'
        },


    ],
    cart:[]
};
const storeSlice = createSlice({
    name:"create",
    initialState: initialStoreState,
    reducers:{
        addItemsToCart: (state,action) => {

            // let cartProducts = state.products.filter(product => product.catID == action.payload);

            let commonElements = state.products.filter(element => action.payload.includes(element.id));

            // console.log(action.payload)
            state.cart =[ commonElements ];
        }
    }
})

export const { getGlobalArrays,addItemsToCart } = storeSlice.actions
export default storeSlice.reducer;