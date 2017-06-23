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

export const updateAccountBadge = (id, count) => {
  return {
    type: 'UPDATE_ACCOUNT_BADGE',
    id,
    count
  };
};

export const deleteAccount = id => {
  return {
    type: 'DELETE_ACCOUNT',
    id
  };
};
