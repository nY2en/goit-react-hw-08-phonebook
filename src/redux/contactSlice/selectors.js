export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filter;

export const selectVisibleContacts = state =>
  selectContacts(state).filter(el =>
    el.name.toLowerCase().includes(selectFilterValue(state))
  );

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
