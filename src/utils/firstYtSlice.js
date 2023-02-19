const { createSlice } = require("@reduxjs/toolkit");

const firstYtSlice = createSlice({
  name: "firstSlice",
  initialState: {
    isSidebarHidden: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSidebarHidden = !state.isSidebarHidden;
    },
  },
});

export const { toggleMenu } = firstYtSlice.actions;
export default firstYtSlice.reducer;
