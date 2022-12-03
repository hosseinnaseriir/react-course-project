import { loginService } from 'api/services/auth';
import { TextField, Button } from 'components';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Auth() {
    const [cookies, setCookie] = useCookies(['token']);
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies?.token) {
            navigate('/');
        }
    }, []);

    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const handleLoginUser = async (e) => {
        e.preventDefault();
        try {
            const res = await loginService(data);
            setCookie('token', res?.data?.token, {
                maxAge: 24 * 24 * 24 * 60,
            });
            navigate('/');
            toast.success('logged in seccessfully');
        } catch (ex) {
            toast.error(ex.response?.data?.error);
        }
    };

    return (
        <form onSubmit={handleLoginUser}>
            <TextField
                onChange={(e) =>
                    setData({
                        ...data,
                        email: e.target.value,
                    })
                }
                placeholder="userName"
            />
            <TextField
                onChange={(e) =>
                    setData({
                        ...data,
                        password: e.target.value,
                    })
                }
                placeholder="password"
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default Auth;
