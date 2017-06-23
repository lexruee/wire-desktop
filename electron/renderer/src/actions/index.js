export const addAccount = sessionID => {
  return {
    type: 'ADD_ACCOUNT',
    sessionID
  };
};

export const switchAccount = id => {
  return {
    type: 'SWITCH_ACCOUNT',
    id
  };
};

export const updateAccount = account => {
  return {
    type: 'UPDATE_ACCOUNT',
    account
  };
};

export const deleteAccount = id => {
  return {
    type: 'DELETE_ACCOUNT',
    id
  };
};
