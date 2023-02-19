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
    hideSidebar: (state) => {
      state.isSidebarHidden = true;
    },
  },
});

export const { toggleMenu, hideSidebar } = firstYtSlice.actions;
export default firstYtSlice.reducer;
