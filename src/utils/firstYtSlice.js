const { createSlice } = require("@reduxjs/toolkit");

const firstYtSlice = createSlice({
  name: "firstSlice",
  initialState: {
    isSidebarHidden: false,
    selectedGenres: 0,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isSidebarHidden = !state.isSidebarHidden;
    },
    hideSidebar: (state) => {
      state.isSidebarHidden = true;
    },
    updateVideos: (state, action) => {
      state.selectedGenres = +action.payload;
    },
  },
});

export const { toggleMenu, hideSidebar, updateVideos } = firstYtSlice.actions;
export default firstYtSlice.reducer;
