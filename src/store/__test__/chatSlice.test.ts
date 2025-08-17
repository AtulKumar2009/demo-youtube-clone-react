import { describe, it, expect } from 'vitest'
import chatReducer, { addMessage } from '../chatSlice'

const initialState = { messages: [] }

const testMessage = {
  name: 'User',
  message: 'Hello!',
  key: '1'
}

describe('chatSlice', () => {
  it('should return the initial state', () => {
    expect(chatReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle addMessage', () => {
    const state = { messages: [] }
    const action = addMessage(testMessage)
    const nextState = chatReducer(state, action)
    expect(nextState.messages[0]).toEqual(testMessage)
    expect(nextState.messages.length).toBe(1)
  })
})
