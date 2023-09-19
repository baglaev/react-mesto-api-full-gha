import React from 'react';

function PopupWithForm({name, title, titleButton, children, isOpen, onClose, onSubmit, isTransmit, isValid = true}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} onClick={onClose} >
            <div className="popup__container" onClick={(e => e.stopPropagation())}>
                <button className="popup__button-close" type="button" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" name={name} noValidate onSubmit={onSubmit}>
                    {children}
                    <button type="submit" className={`popup__button-save ${isValid ? 'popup__button-save_active' : ''}`}>{isTransmit ? '' : titleButton || 'Сохранить'}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;