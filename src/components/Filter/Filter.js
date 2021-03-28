import { useSelector, useDispatch } from 'react-redux';
import * as phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import './Filter.scss';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import selectors from '../../redux/phoneBook/phoneBook-selectors';


export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(selectors.getFilter);
    const contacts = useSelector(selectors.getAllContacts);
    const onChange = e => dispatch(phoneBookActions.changeFilter(e.target.value));

    return (
    <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames="Filter-fade"
        unmountOnExit>
        
        <div className="FindForm">
            <label
                htmlFor="find"
                className="FindLabel">
            Find contact by name
            </label>
            <input
                type="text"
                value={value}
                id="find"
                className="FindInput"
                onChange={onChange}
                />
        </div>
     </CSSTransition>
    )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.object),
};
