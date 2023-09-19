import React, { useContext } from 'react';
import imagePencil from '../images/image_pencil.svg';
import Card from './Card.jsx';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
// import api from '../utils/api.js';


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDelete, cards}) {
    const currentUser = useContext(CurrentUserContext);
    // const [userName, setUserName] = useState('');
    // const [userDescription, setUserDescription] = useState('');
    // const [userAvatar, setUserAvatar] = useState('');
    // const [cards, setCards] = useState([]);

    // useEffect(() => {
    //     Promise.all([api.getProfile(), api.getInitialCards()])
    //         .then(([userInfo, cards]) => {
    //             setUserName(userInfo.name)
    //             setUserDescription(userInfo.about)
    //             setUserAvatar(userInfo.avatar)
    //             cards.forEach(userId => userId = userInfo._id)
    //             setCards(cards)
    //         })
    //         .catch((error) => {
    //             console.log(`Ошибка ${error}`)
    //         });
    // }, [])

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__container">
                        <img src={currentUser.avatar ? currentUser.avatar : '#'} alt="аватар пользователя" className="profile__image"/>
                        <div className="profile__image-overlay">
                            <img src={imagePencil} alt="кнопка смены аватара пользователя" className="profile__image-editing" onClick={onEditAvatar}/>
                        </div>
                    </div>
                    <div className="profile__biography">
                        <div className="profile__name">
                            <h1 className="profile__title">{currentUser.name ? currentUser.name : ''}</h1>
                            <button className="profile__button-edit" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
                        </div>
                        <p className="profile__job-title">{currentUser.about ? currentUser.about : ''}</p>
                    </div>
                </div>
                <button className="profile__button-add" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map(data => {
                    return (
                    <Card key = {data._id} card={data} onCardClick={onCardClick} onDelete={onDelete} />
                    // <Card card={data} />
                    )
                })}
            </section>
        </main>
    );
}

export default Main;