import React, { useRef } from 'react';
import useFormValidator from '../utils/useFormValidator';
import PopupWithForm from './PopupWithForm.jsx';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const input = useRef();
    const {values, errors, hideInput, isValid, handleChange, resetValidation} = useFormValidator();

    function resetOnClose() {
        onClose();
        resetValidation();
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({avatar: input.current.value}, resetValidation);
    }

    return (
        <PopupWithForm
            name='popup-avatar'
            title='Обновить аватар'
            isOpen={isOpen}
            onClose={resetOnClose}
            onSubmit={handleSubmit}
            isValid={isValid}
        >
            <input ref={input} type="url" name="avatar" className={`popup__input popup__input_image_avatar ${hideInput.avatar === undefined || hideInput.avatar ? '' : 'popup__input_border-underline'}`} placeholder="Ссылка на картинку" required value={values.avatar ? values.avatar : ''} onChange={handleChange} />
            <span className="popup__input-error popup__input-error_type_avatar">{errors.avatar}</span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;