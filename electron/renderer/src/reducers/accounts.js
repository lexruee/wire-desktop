import uuid from 'uuid/v4'

const accounts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      return [...state, {
        id: uuid,
        teamID: undefined,
        userID: undefined,
        sessionID: action.sessionID,
        picture: undefined,
        name: undefined,
        visible: false,
        accentId: undefined
      }];
    case 'UPDATE_ACCOUNT':
      return state; // TODO update
    case 'SWITCH_ACCOUNT':
      return state.map(account => {
        return {
          ...account,
          visible: account.id === action.id
        };
      });
    case 'DELETE_ACCOUNT':
      return [
        ...state.slice(0, action.payload.id), 
        ...state.slice(action.payload.id + 1)
      ];
    default:
      return state;
  }
};

export default accounts;