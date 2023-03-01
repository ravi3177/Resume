import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialThemeState = {
    mode: 'dark',
    uiColor: 'crimson',
    theme: {
        color: 'black',
        backgroundColor: "rgb(237, 249, 254)",
    },
    nonThemeColor: 'black'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        changeThemeColor(state, action) {
            state.theme.color = action.payload;
        },
        toggleMode(state) {
            if (state.mode === 'dark') {

                state.mode = 'light';
                state.theme = initialThemeState.theme;
                state.nonThemeColor = 'black';
            }
            else {
                state.mode = 'dark';
                state.theme.color = "#E6DDC4";
                state.theme.backgroundColor = 'black';
                state.nonThemeColor = 'white';
            }
        }
    }
});
const store = configureStore({
    reducer: themeSlice.reducer
});

export const themeActions = themeSlice.actions;
export default store;