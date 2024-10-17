// src/pages/AuthPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginWithEmailPassword } from '../store/thunks/loginThunk';
import { registerWithEmailPassword } from '../store/thunks/registerThunk';

const AuthPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegister) {
            // Dispatchea la acción de registro
            dispatch(registerWithEmailPassword({ email, password }));
        } else {
            // Dispatchea la acción de login
            dispatch(loginWithEmailPassword({ email, password }));
        }
    };

    return (
        <div>
            <h2>{isRegister ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isRegister ? 'Register' : 'Login'}</button>
            </form>
            <button onClick={() => setIsRegister(!isRegister)}>
                {isRegister ? 'Switch to Login' : 'Switch to Register'}
            </button>
        </div>
    );
};

export default AuthPage;
