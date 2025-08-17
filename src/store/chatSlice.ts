import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../utils/constants";


interface Message {
    name: string,
    message: string,
    key: string
}
interface ChatState {
    messages : Message[]
}

const initialState: ChatState = {
  messages: [],
}


const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.messages.splice(OFFSET_LIVE_CHAT, 1);
            state.messages.unshift(action.payload);
        }
    }
})

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;