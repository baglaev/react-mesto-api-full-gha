import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as auth from '../utils/auth';

function Login({handleLogin, setEmail}) {
    const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
        password: '',
        email: ''
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
        handleLogin();


        auth.login(formValue.email, formValue.password)
            .then((res) => {
                localStorage.setItem("jwt", res.token);
                setEmail(formValue.email)
                handleLogin();
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
      }

    return(
        <section className="login">
            <h2 className="login__title">Вход</h2>
            <form className="login__form" noValidate onSubmit={handleSubmit}>
                <input type="text" name="email" className="login__input" value={formValue.email || ''} onChange={handleChange} />
                <input type="text" name="password" className="login__input" value={formValue.password || ''} onChange={handleChange} />
                <button className="login__button" type="submit">Войти</button>
            </form>
        </section>
    )
}

export default Login;