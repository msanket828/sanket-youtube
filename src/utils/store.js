import firstSliceReducer from "./firstYtSlice";
import searchSliceReducer from "./searchSlice";
const { configureStore } = require("@reduxjs/toolkit");
const store = configureStore({
  reducer: {
    firstSlice: firstSliceReducer,
    search: searchSliceReducer,
  },
});

export default store;
