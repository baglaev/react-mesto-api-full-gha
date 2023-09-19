import React, { useEffect, useState } from 'react';
import api from '../utils/api.js';

function LikeButton({likes, userId, cardId}) {
    const[isLike, setIsLike] = useState(false);
    const[count, setCount] = useState(likes.length);

    useEffect(() => {
        setIsLike(likes.some(item => userId === item._id))
    }, [likes, userId])

    function handleLike() {
        if (isLike) {
            api.deleteLike(cardId)
            .then(res => {
                setIsLike(false)
                setCount(res.likes.length)
            })
            .catch((error) => {
                console.log(`Ошибка ${error}`)
            });
        } else {
            api.addLike(cardId)
            .then(res =>{
                setIsLike(true)
                setCount(res.likes.length)
            })
            .catch((error) => {
                console.log(`Ошибка ${error}`)
            })
        }
    }

    return (
        <>
            <button className={`element__button-like ${isLike ? 'element__button-like_active' : ''}`} type="button" aria-label="Лайкнуть" onClick={handleLike}></button>
            <p className="element__counter-like">{count}</p>
        </>
    );
}

export default LikeButton;