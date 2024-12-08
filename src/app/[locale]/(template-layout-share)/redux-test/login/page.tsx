'use client';

import { useLoginMutation } from '@/redux/api/auth-apiSlice';
import { loggedOut } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/features/hooks';
import { useState } from 'react';

export default function LoginPage() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);
    const [login, { isLoading }] = useLoginMutation();

    const [email, setEmail] = useState('test');
    const [password, setPassword] = useState('123');
    const [err, setErr] = useState('');

    const handleLogin = async () => {
        try {
            // get promise result with unwrap
            const originalPromiseResult = await login({ email, password }).unwrap();
        } catch (err) {
            setErr(err.data.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            {user ? (
                <h1>Hello! {user}</h1>
            ) : isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <label>
                        email:
                        <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        password:
                        <input value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button className="bg-slate-300 p-3" onClick={handleLogin}>
                        login
                    </button>
                </div>
            )}
            {err && <p className="text-red">{err}</p>}
            <button onClick={() => dispatch(loggedOut())}>log out</button>
        </div>
    );
}
