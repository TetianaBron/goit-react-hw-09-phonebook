import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.phoneBook.loading;

const getFilter = state => state.phoneBook.filter;

const getAllContacts = state => state.phoneBook.contacts;

const getError = state => state.phoneBook.error;

//Без мемоизации
// const getVisibleContacts = state => {
//     const contacts = getAllContacts(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//         name.toLowerCase().includes(normalizedFilter),
//     );
// };

//С мемоизацией
const getVisibleContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => { 
         const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
    },
);

const selectors = {
    getLoading,
    getFilter,
    getVisibleContacts,
    getAllContacts,
    getError
};

export default selectors;