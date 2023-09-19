import React, { useContext } from 'react';
import useFormValidator from '../utils/useFormValidator.js';
import PopupWithForm from './PopupWithForm.jsx';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const {values, errors, hideInput, isValid, handleChange, resetValidation} = useFormValidator();

    function resetOnClose() {
        onClose();
        resetValidation();
    }

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({name: values.name, link: values.link}, resetValidation);
    }

    return(
        <PopupWithForm
            name='popup-card'
            title='Новое место'
            titleButton='Создать'
            isOpen={isOpen}
            onClose={resetOnClose}
            isValid={isValid}
            onSubmit={handleSubmit}
        >
            <input type="text" name="name" className={`popup__input popup__input_image_name ${hideInput.name === undefined || hideInput.name ? '' : 'popup__input_border-underline'}`} placeholder="Название" minLength={2} maxLength={30} required onChange={handleChange} value={values.name ? values.name : ''} />
            <span className="popup__input-error popup__input-error_type_name">{errors.name}</span>
            <input type="url" name="link" className={`popup__input popup__input_image_link ${hideInput.link === undefined || hideInput.link ? '' : 'popup__input_border-underline'}`} placeholder="Ссылка на картинку" required onChange={handleChange} value={values.link ? values.link : ''} />
            <span className="popup__input-error popup__input-error_type_link">{errors.link}</span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;