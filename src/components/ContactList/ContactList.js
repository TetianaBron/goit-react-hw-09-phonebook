import React from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/phoneBook/phoneBook-operations';
import selectors from '../../redux/phoneBook/phoneBook-selectors';
import './ContactList.scss';
import PropTypes from 'prop-types';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ContactList = ({ contacts, onRemoveContact }) => {
    return (
            <TransitionGroup component="ul">
                {contacts.map(({ id, name, number }, i) => (
                    <CSSTransition
                        key={id}
                        timeout={250}
                        classNames="ContactItem-fade">
                        <li className="ContactItem">
                        {i + 1}. {name}: {number}
                        <IconButton
                            onClick={() => onRemoveContact(id)}
                            aria-label="Удалить контакт">
                            <DeleteIcon
                                width="17"
                                height="17"
                                fill="#fff" />
                        </IconButton>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
    );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
    contacts: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onRemoveContact: id => dispatch(operations.removeContact(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
