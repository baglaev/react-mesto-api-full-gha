import React from 'react';

function ImagePopup({card, isOpen, onClose}) {
    return(
        // <div className="popup popup-image popup-image_background">
        <div className={`popup popup-image popup-image_background ${isOpen ? 'popup_opened' : ''}`} onClick={onClose}>
            <div className="popup-image__container" onClick={(e => e.stopPropagation())}>
                <button className="popup__button-close" type="button" onClick={onClose}></button>
                <img src={card.link ? card.link : '#'} alt={card.name ? `${card.name}` : '#'} className="popup-image__photo"/>
                <h2 className="popup-image__title">{card.name}</h2>
            </div>
        </div>
    )
}

export default ImagePopup;