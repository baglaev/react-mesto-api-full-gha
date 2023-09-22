import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import { useContext } from 'react';
import LikeButton from './LikeButton.jsx';

function Card({card, onCardClick, onDelete}) {
    const currentUser = useContext(CurrentUserContext);

    const isOwn = card.owner === currentUser._id;
    // const isLiked = card.likes.some((i) => i === currentUser._id);

    return(
        <article className="element">
            {/* {currentUser._id === card.owner._id && <button className="element__button-delete" type="button" aria-label="Удалить" onClick={() => onDelete(card._id)}></button>} */}
            {isOwn && <button className="element__button-delete" type="button" aria-label="Удалить" onClick={() => onDelete(card._id)}></button>}
            <img src={card.link} alt={card.name} className="element__image" onClick={() => onCardClick({link: card.link, name: card.name})}/>
            <div className="element__title">
                <h2 className="element__name">{card.name}</h2>
                <div className="element__group-like">
                    <LikeButton likes={card.likes} userId={currentUser.id} cardId={card._id} />
                    {/* <button className="element__button-like" type="button" aria-label="Лайкнуть"></button>
                    <p className="element__counter-like">{card.likes.length}</p> */}
                </div>
            </div>
        </article>
    )
}

export default Card;