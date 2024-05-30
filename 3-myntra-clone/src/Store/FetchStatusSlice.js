/*import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "FetchStatus",
  initialState: {
    FetchDone: false,
    currentlyFetching: false,
    fetchingFinished: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.FetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.fetchingFinished = true; 
    },
  },
});

export const { markFetchDone, markFetchingStarted, markFetchingFinished } = FetchStatusSlice.actions;
export const FetchStatusActions = FetchStatusSlice.actions;
export default FetchStatusSlice.reducer;*/




import {createSlice} from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // false: 'PENDING' and true: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    }
  }
});

export const FetchStatusActions = FetchStatusSlice.actions;

export default FetchStatusSlice;



