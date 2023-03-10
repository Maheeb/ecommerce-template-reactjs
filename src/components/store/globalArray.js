import {createSlice, current} from "@reduxjs/toolkit";
import {v4 as uuidv4} from 'uuid';
import {json} from "react-router-dom";

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
            name: 'Lorem ipsum dolor sit amet',
            catID:1,
            price: 10,
            image: 'product-1.jpg'
        },
        {
            id: 2,
            name: 'Suspendisse tempus',
            catID:1,
            price: 20,
            image: 'product-2.jpg'
        },
        {
            id: 3,
            name: 'Etiam elementum',
            catID:2,
            price: 30,
            image: 'product-3.jpg'
        },
        {
            id: 4,
            name: 'Proin a augue ligula',
            catID:2,
            price: 40,
            image: 'product-4.jpg'
        },
        {
            id: 5,
            name: 'Fusce vel vehicula',
            catID:3,
            price: 50,
            image: 'product-5.jpg'
        },
        {
            id: 6,
            name: 'Donec egestas ligula',
            catID:3,
            price: 60,
            image: 'product-6.jpg'
        },
        {
            id: 7,
            name: 'Sed in posuere diam',
            catID:4,
            price: 70,
            image: 'product-7.jpg'
        },
        {
            id: 8,
            name: 'Morbi tempor consectetur',
            catID:4,
            price: 80,
            image: 'product-8.jpg'
        },
        {
            id: 9,
            name: 'Sed ipsum augue',
            catID:5,
            price: 90,
            image: 'product-9.jpg'
        },
        {
            id: 10,
            name: 'Ut fermentum',
            catID:5,
            price: 100,
            image: 'product-10.jpg'
        },


    ],
    blogs: [
        {
            id:1,
            catId:1,
            title:'6 ways to prepare breakfast for 30',

        },
        {
            id:2,
            catId:1,
            title:'Cooking tips make cooking simple',

        },
        {
            id:3,
            catId:2,
            title:'The Moment You Need To Remove Garlic From The Menu',

        },
        {
            id:4,
            catId:2,
            title:'Visit the clean farm in the US',

        },
        {
            id:5,
            catId:3,
            title:'aliquet nunc non est tincidunt ',

        },
        {
            id:6,
            catId:3,
            title:'Suspendisse venenatis arcu non tellus',

        },
    ],
    cart:[],
    productTaken: []
};
const storeSlice = createSlice({
    name:"create",
    initialState: initialStoreState,
    reducers:{
        addItemsToCart: (state,action) => {

            let  items  = state.products.find(item => item.id === action.payload);
            items.count=1
            state.productTaken =[...state.productTaken,items]

        },
        updateSingleProduct: (state,action) => {
            let isExist = state.productTaken.find(element=>element.id == action.payload.product_id)
            if (isExist != undefined) {
                state.productTaken.find(function (item) {
                    if (item.id === action.payload.product_id) {
                        return item.count = action.payload.addedQuantity

                    }
                })
            }
            else
            {
                let  items  = state.products.find(item => item.id === action.payload.product_id);
                items.count=action.payload.addedQuantity
                state.productTaken =[...state.productTaken,items]

            }
        },
        removeCartItem: (state,action) => {

            let  items  = state.productTaken.filter(item => item.id != action.payload.product_id);
            state.productTaken =items;

        },
        clearCart: (state,action) => {

            if (action.payload.type=='yes') {
                state.productTaken = initialStoreState;
            }

        },
    }
})

export const { getGlobalArrays,addItemsToCart,updateSingleProduct,removeCartItem,clearCart } = storeSlice.actions
export default storeSlice.reducer;