import { Link, useNavigate  } from 'react-router-dom'; 
import React, { useState } from 'react';
import './Login.css';
import logoImage from '../../images/homeHLogo.png';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../actions/authActions';

const Login = () => {

    const [email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !user_password) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        try {
            const response = await fetch('http://localhost:8080/users/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    userPassword: user_password,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error al iniciar sesión: ${response.statusText}`);
            }

            const data = await response.json();
            
            dispatch(loginSuccess(data.access_token)); // Guardar el token JWT en el estado

            navigate('/userpage'); // Redirige a la página del usuario si la autenticación es exitosa

        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    };

    return (
        <> 
            
            <div className='login-container'>
                
                <div className='login-card_'>
                <Link to="/" className="goBack" style={{color:'rgb(117,127,126,1)'}} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" className="icon-submenu" fill="currentColor" >
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                    </svg>
                    Inicio
                </Link>
                <div className="logo">
                <img src={logoImage} alt="Logo" className='logoH' />
                <h3>Inicia sesión</h3>
            </div>                    


                    
            <form className="formulario" onSubmit={handleSubmit}>
                <div className= "wrap-input">
                    <span className="form-text">EMAIL</span>
                    <input type="text" placeholder='Ingrese su email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

    
                <div className= "wrap-input">
                    <span className="form-text">CONTRASEÑA</span>
                    <input type="password" placeholder='Ingrese su contraseña' value={user_password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Ir</button>
            </form>


                    
                <p>¿Recién nos conoces? <Link to="/register"style={{color:'rgb(117,127,126,1)'}}><b>REGISTRATE</b></Link></p>

                </div>
                
                <div className='login-image_' >
                    <img src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Imagen Login" className="imagen_"/>
                </div>
                
            </div>
        </>
    );
};

export default Login;