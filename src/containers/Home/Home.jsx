
import React from 'react';
import "./Home.css";

import Navigator from '../../components/Navigator/Navigator';

const Home = () => {

    return (
        <div className="homeDesign">soy Home
        
            <Navigator pathUno={"/login"} destinoUno={"Login"} pathDos={"/register"} destinoDos={"Register"}/>
        </div>
    )
}

export default Home;