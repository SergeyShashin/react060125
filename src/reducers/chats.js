import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { load, send } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

export const chatsReducers = handleActions({
  [load]: (state, action) => {
    return state.set('entries', fromJS({
      'Chat1': {
        id: 1,
        name: "Chat1",
        messages: [{ author: 'друг', text: `Привет!) Это чат 1. ` }]
      },
      'Chat2': {
        id: 2,
        name: "Chat2",
        messages: [{ author: 'друг', text: `Привет!) Это чат 2. ` }]
      },
      'Chat3': {
        id: 3,
        name: "Chat3",
        messages: [{ author: 'друг', text: `Привет!) Это чат 3. ` }]
      },
      'Chat4': {
        id: 4,
        name: "Chat4",
        messages: [{ author: 'друг', text: `Привет!) Это чат 4. ` }]
      },
      'Chat5': {
        id: 5,
        name: "Chat5",
        messages: [{ author: 'друг', text: `Привет!) Это чат 5. ` }]
      },
      'Chat6': {
        id: 6,
        name: "Chat6",
        messages: [{ author: 'друг', text: `Привет!) Это чат 6. ` }]
      },
      'Chat7': {
        id: 7,
        name: "Chat7",
        messages: [{ author: 'друг', text: `Привет!) Это чат 7. ` }]
      },
      'Chat8': {
        id: 8,
        name: "Chat8",
        messages: [{ author: 'друг', text: `Привет!) Это чат 8. ` }]
      }
    }
    ))
  }, //state=prevState
  [send]: (state, action) => {

  }
},
  initialState);