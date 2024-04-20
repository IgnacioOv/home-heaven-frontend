import React from 'react';
import './Login.css';


const Login = () => {
    return (
        <> 
            
            <div className='login-container'>
                
                <div className='login-card'>
                    <h1 className="cambiar">Home heaven</h1>
                    <h3>Inicia sesión</h3>


                    
            <form class="formulario">
                <div class= "wrap-input">
                    <span class="form-text">EMAIL</span>
                    <input type="text" placeholder='Ingrese su email'/>
                </div>

    
                <div class= "wrap-input">
                    <span class="form-text">CONTRASEÑA</span>
                    <input type="password" placeholder='Ingrese su contraseña'/>
                </div>
                <button type="submit">Ir</button>
            </form>


                    
                    <p>¿Recién nos conoces? <b>REGISTRATE</b></p>

                </div>
                
                <div className='login-image' >
                    <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen Login" className="imagen"/>
                </div>
                
            </div>
        </>
    );
};

export default Login;