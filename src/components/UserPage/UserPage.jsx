import { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserPage.css';
import HeaderUser from '../HeaderUser/HeaderUser';
const UserPage = () => {
    const [name, setName] = useState('Jane');
    const [surname, setSurname] = useState('Doe');
    const [username, setUsername] = useState('janedoe');
    const [email, setEmail] = useState('janedoe@gmail.com');
    const [password, setPassword] = useState('password');
    const [role, setRole] = useState('Vendedor');

    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingSurname, setIsEditingSurname] = useState(false);
    const [isEditingUsername, setIsEditingUsername] = useState(false);
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [isEditingRole, setIsEditingRole] = useState(false);

    const handleEditName = () => {
        setIsEditingName(true);
    };

    const handleSaveName = () => {
        setIsEditingName(false);
    };

    const handleEditSurname = () => {
        setIsEditingSurname(true);
    };

    const handleSaveSurname = () => {
        setIsEditingSurname(false);
    };

    const handleEditUsername = () => {
        setIsEditingUsername(true);
    };

    const handleSaveUsername = () => {
        setIsEditingUsername(false);
    };

    const handleEditEmail = () => {
        setIsEditingEmail(true);
    };

    const handleSaveEmail = () => {
        setIsEditingEmail(false);
    };

    const handleEditPassword = () => {
        setIsEditingPassword(true);
    };

    const handleSavePassword = () => {
        setIsEditingPassword(false);
    };

    const handleEditRole = () => {
        setIsEditingRole(true);
    };

    const handleSaveRole = () => {
        setIsEditingRole(false);
    };

    return (
        <>
        <HeaderUser name={name}/>
        <div className="container">
            <h2 className="title">Datos Personales</h2>
            <div className="user-info">
                <div className="field">
                    <label htmlFor="name">Nombre:</label>
                    {isEditingName ? (
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    ) : (
                        <span>{name}</span>
                    )}
                    {isEditingName ? (
                        <button onClick={handleSaveName}>Guardar</button>
                    ) : (
                        <button onClick={handleEditName}>Modificar</button>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="surname">Apellido:</label>
                    {isEditingSurname ? (
                        <input
                            type="text"
                            id="surname"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                        />
                    ) : (
                        <span>{surname}</span>
                    )}
                    {isEditingSurname ? (
                        <button onClick={handleSaveSurname}>Guardar</button>
                    ) : (
                        <button onClick={handleEditSurname}>Modificar</button>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="username">Username:</label>
                    {isEditingUsername ? (
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    ) : (
                        <span>{username}</span>
                    )}
                    {isEditingUsername ? (
                        <button onClick={handleSaveUsername}>Guardar</button>
                    ) : (
                        <button onClick={handleEditUsername}>Modificar</button>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    {isEditingEmail ? (
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    ) : (
                        <span>{email}</span>
                    )}
                    {isEditingEmail ? (
                        <button onClick={handleSaveEmail}>Guardar</button>
                    ) : (
                        <button onClick={handleEditEmail}>Modificar</button>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="password">Contraseña:</label>
                    {isEditingPassword ? (
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        ) : (
                        <span>{password}</span>
                    )}
                    {isEditingPassword ? (
                        <button onClick={handleSavePassword}>Guardar</button>
                    ) : (
                        <button onClick={handleEditPassword}>Modificar</button>
                    )}
                </div>
                <div className="field">
                        <label htmlFor="role">Rol:</label>
                        {isEditingRole ? (
                            <select
                                id="role"
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value="Comprador">Comprador</option>
                                <option value="Vendedor">Vendedor</option>
                            </select>
                        ) : (
                            <span>{role}</span>
                        )}
                        {isEditingRole ? (
                            <button onClick={handleSaveRole}>Guardar</button>
                        ) : (
                            <button onClick={handleEditRole}>Modificar</button>
                        )}
                    </div>
            </div>
        </div>
        <div className="action-button">
                <Link to="/myorders">
                    <button className="role-button">
                        {role === 'Comprador' ? 'VER COMPRAS' : 'VER VENTAS'}
                    </button>
                </Link>
            </div>
    </>
    );
};

export default UserPage;
