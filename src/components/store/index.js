
import {configureStore} from "@reduxjs/toolkit";
import getGlobalArrays from "./globalArray"

const store = configureStore({
    reducer: {
        create: getGlobalArrays
    }
});

export default store;