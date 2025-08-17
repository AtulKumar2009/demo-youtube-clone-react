import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



type SearchState = Record<string, string[]>;

interface CacheResultsPayload {
    query: string;
    suggestions: string[];
}

const initialState: SearchState = {};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        cacheResults: (state, action: PayloadAction<CacheResultsPayload>) => {
            state[action.payload.query] = action.payload.suggestions;
        },
    },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
