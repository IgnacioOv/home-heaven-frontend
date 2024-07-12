import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserPage.css';
import HeaderUser from '../HeaderUser/HeaderUser';
import {jwtDecode} from 'jwt-decode';
import { fetchWithAuth } from '../utils/fetchWithAuth';

const UserPage = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const [isEditing, setIsEditing] = useState({
        name: false,
        surname: false,
        username: false,
        email: false,
        password: false,
        role: false
    });

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    const response = await fetch(`http://localhost:8080/users/${decodedToken.userId}`, {
                        method: 'GET',
                        headers: {
                            'Access-Control-Allow-Origin': 'http://localhost:5173',
                            'Access-Control-Request-Method': 'GET',
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }

                    const userData = await response.json();

                    setName(userData.firstName);
                    setSurname(userData.lastName);
                    setUsername(userData.username);
                    setEmail(userData.email);
                    setPassword(userData.password);
                    setRole(userData.role);
                } catch (error) {
                    console.error('Error fetching user data', error);
                }
            }
        };

        fetchUserData();
    }, []);

    const handleEdit = (field) => {
        setIsEditing({ ...isEditing, [field]: true });
    };

    const handleSave = async () => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const decodedToken = jwtDecode(token);
            const updatedUser = {
                userId: decodedToken.userId,
                firstName: name,
                lastName: surname,
                username: username,
                email: email,
                password: password,
                role: role,
            };

            try {
                const response = await fetchWithAuth('http://localhost:8080/users/edit', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedUser),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                // Aquí podrías actualizar el estado de edición para todos los campos a false
                setIsEditing({
                    name: false,
                    surname: false,
                    username: false,
                    email: false,
                    password: false,
                    role: false
                });
            } catch (error) {
                console.error('Error updating user data', error);
            }
        }
    };

    return (
        <>
            <HeaderUser name={name} />
            <div className="container">
                <h2 className="title">Datos Personales</h2>
                <div className="user-info">
                    <div className="field">
                        <label htmlFor="name">Nombre:</label>
                        {isEditing.name ? (
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        ) : (
                            <span>{name}</span>
                        )}
                        {isEditing.name ? (
                            <button onClick={handleSave}>Guardar</button>
                        ) : (
                            <button onClick={() => handleEdit('name')}>Modificar</button>
                        )}
                    </div>
                    <div className="field">
                        <label htmlFor="surname">Apellido:</label>
                        {isEditing.surname ? (
                            <input
                                type="text"
                                id="surname"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}
                            />
                        ) : (
                            <span>{surname}</span>
                        )}
                        {isEditing.surname ? (
                            <button onClick={handleSave}>Guardar</button>
                        ) : (
                            <button onClick={() => handleEdit('surname')}>Modificar</button>
                        )}
                    </div>
                    <div className="field">
                        <label htmlFor="username">Username:</label>
                        {isEditing.username ? (
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        ) : (
                            <span>{username}</span>
                        )}
                        {isEditing.username ? (
                            <button onClick={handleSave}>Guardar</button>
                        ) : (
                            <button onClick={() => handleEdit('username')}>Modificar</button>
                        )}
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email:</label>
                        {isEditing.email ? (
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        ) : (
                            <span>{email}</span>
                        )}
                        {isEditing.email ? (
                            <button onClick={handleSave}>Guardar</button>
                        ) : (
                            <button onClick={() => handleEdit('email')}>Modificar</button>
                        )}
                    </div>
                    <div className="field">
                        <label htmlFor="password">Contraseña:</label>
                        {isEditing.password ? (
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        ) : (
                            <span>******</span>
                        )}
                        {isEditing.password ? (
                            <button onClick={handleSave}>Guardar</button>
                        ) : (
                            <button onClick={() => handleEdit('password')}>Modificar</button>
                        )}
                    </div>
                    <div className="field">
                        <label htmlFor="role">Rol:</label>
                        {isEditing.role ? (
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="BUYER">Comprador</option>
                                <option value="SELLER">Vendedor</option>
                            </select>
                        ) : (
                            <span>{role}</span>
                        )}
                        {isEditing.role ? (
                            <button onClick={handleSave}>Guardar</button>
                        ) : (
                            <button onClick={() => handleEdit('role')}>Modificar</button>
                        )}
                    </div>
                </div>
            </div>
            <div className="action-button">
                <Link to="/myorders">
                    <button className="role-button">
                        {role === 'BUYER' ? 'VER COMPRAS' : 'VER COMPRAS'}
                    </button>
                </Link >
                <div className='space'></div>
                {role === 'SELLER' && (
                <Link to="/myorders">
                        <button className="role-button">VER VENTAS</button>
                    </Link>)}
            </div>
        </>
    );
};

export default UserPage;