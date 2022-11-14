
import React, { useState, useEffect } from 'react';

import "./Register.css";

import { errorCheck } from '../../services/useful';

// import InputForm from '../../components/InputForm/InputForm';

import Navigator from '../../components/Navigator/Navigator';
import "./Register.css";

const Register = () => {

    //Hooks

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        paypal: "",
        password: "",
        password2: ""
    });

    const [userError, setUserError] = useState({
        nameError: "",
        surnameError: "",
        emailError: "",
        phoneError: "",
        paypalError: "",
        passwordError: "",
        password2Error: ""
    });

    //Handler inputs usuario

    const inputHandler = (e) => {

        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }));

    }

    const errorHandler = (field, value, type) => {

        let error = "";

        error = errorCheck(value, type);

        setUserError(((prevState) => ({
            ...prevState,
            [field + "Error"]: error

        })));

    }


    return (
        <div className='registerDesign'>soy Register
            <pre>{JSON.stringify(user, null, 2)}</pre>


            <Navigator pathUno={"/"} destinoUno={"Home"} pathDos={"/login"} destinoDos={"Login"} />

            <input type="text" className="inputDesign" placeholder="Name" name="name" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")} />
            <div className='errorInput'>{userError.nameError}</div>
            <input type="text" className="inputDesign" placeholder="Surname" name="surname" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")} />
            <div className='errorInput'>{userError.surnameError}</div>
            <input type="text" className="inputDesign" placeholder="E-mail" name="email" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")} />
            <div className='errorInput'>{userError.emailError}</div>
            <input type="text" className="inputDesign" placeholder="Phone number" name="phone" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "phone")} />
            <div className='errorInput'>{userError.phoneError}</div>
            <input type="text" className="inputDesign" placeholder="Paypal address" name="paypal" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")} />
            <div className='errorInput'>{userError.paypalError}</div>
            <input type="password" className="inputDesign" placeholder="Password" name="password" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} />
            <div className='errorInput'>{userError.passwordError}</div>
            <input type="password" className="inputDesign" placeholder="Verify password" name="password2" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} />
            <div className='errorInput'>{userError.password2Error}</div>
            <div className='registerButtonDesign'>Register me!</div>
        </div>
    )
}
export default Register;