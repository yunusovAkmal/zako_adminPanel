import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./reducers/modalSlice";
import menuReducer from "./reducers/menuSlice";
import rowReducer from "./reducers/rowSlice";
import drawerReducer from "./reducers/drawerSlice";
import dataReducer from "./reducers/dataSlice";

export default configureStore({
  reducer: {
    modal: modalReducer,
    menu: menuReducer,
    row: rowReducer,
    drawer: drawerReducer,
    data: dataReducer,
  },
});

