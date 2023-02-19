import firstSliceReducer from "./firstYtSlice";
const { configureStore } = require("@reduxjs/toolkit");
const store = configureStore({
  reducer: {
    firstSlice: firstSliceReducer,
  },
});

export default store;
