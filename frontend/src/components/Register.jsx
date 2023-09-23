import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as auth from "../utils/auth";

function Register({setSuccess, setIsInfoTooltip}) {
    const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
          });
    }

    function handleSubmit(e) {
        e.preventDefault();
        auth.register(formValue.email, formValue.password)
            .then(() => {
                navigate("/signin");
                setSuccess(true);
            })
            .catch((err) => {
                setSuccess(false);
                console.log(err.status);
            })
            .finally(() => {
                setIsInfoTooltip(true);
            });
      }

    return(
        <section className="login">
            <h2 className="login__title">Регистрация</h2>
            <form className="login__form" noValidate onSubmit={handleSubmit}>
                <input type="text" name="email" className="login__input" value={formValue.email || ''} onChange={handleChange} required />
                <input type="text" name="password" className="login__input" value={formValue.password || ''} onChange={handleChange} required />
                <button className="login__button" type="submit">Зарегистрироваться</button>
                <Link to="/signin" className="login__link">Уже зарегистрированы? Войти</Link>
            </form>
        </section>
    )
}

export default Register;