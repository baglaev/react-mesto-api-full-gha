import React, { useContext, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.jsx';
import useFormValidator from '../utils/useFormValidator.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditProfilePopup({isOpen, onClose, onHandleUser}) {
    const currentUser = useContext(CurrentUserContext);
    const {values, errors, hideInput, isValid, handleChange, resetValidation, setValue} = useFormValidator();

    useEffect(() => {
        setValue('name', currentUser.name)
        setValue('about', currentUser.about)
    }, [currentUser, setValue, isOpen])

    function resetOnClose() {
        onClose();
        resetValidation({name: currentUser.name, about: currentUser.about});
    }

    function handleSubmit(e) {
        e.preventDefault();
        onHandleUser({name: values.name, about: values.about}, resetValidation);
    }

    return (
        <PopupWithForm
            name='popup-profile'
            title='Редактировать профиль'
            isOpen={isOpen}
            onClose={resetOnClose}
            isValid={isValid}
            onSubmit={handleSubmit}
        >
            <input type="text" name="name" className={`popup__input popup__input_profile_name ${hideInput.name === undefined || hideInput.name ? '' : 'popup__input_border-underline'}`} placeholder="Имя" minLength={2} maxLength={40} required onChange={handleChange} value={values.name ? values.name : ''} />
            <span className="popup__input-error popup__input-error_type_name">{errors.name}</span>
            <input type="text" name="about" className={`popup__input popup__input_profile_about ${hideInput.about === undefined || hideInput.about ? '' : 'popup__input_border-underline'}`} placeholder="Должность" minLength={2} maxLength={200} required onChange={handleChange} value={values.about ? values.about : ''} />
            <span className="popup__input-error popup__input-error_type_about">{errors.about}</span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;