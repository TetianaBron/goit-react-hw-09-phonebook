import axios from 'axios';
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    removeContactRequest,
    removeContactSuccess,
    removeContactError
} from './phoneBook-actions';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch (error => dispatch(fetchContactError(error.message)));
};

// Option with async/await, try/catch

// const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactRequest());

//     try {
//         const { data } = await axios.get('/contacts');

//         dispatch(fetchContactSuccess(data));
//     } catch (error) {
//         dispatch(fetchContactSuccess(error));
//     }
// }

const addContact = (name, number) => dispatch => {
    const contact = {
        name,
        number,
    };

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)));
};

const removeContact = (contactId) => dispatch => {
    dispatch(removeContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(removeContactSuccess(contactId)))
        .catch(error => dispatch(removeContactError(error.message)));
};

const operations = {
    fetchContacts,
    addContact,
    removeContact
};

export default operations;