import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSendLogoutMutation } from '../features/auth/authApiSlice';

const LogoutBtn = () => {
    const navigate = useNavigate();

    const [sendLogout, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useSendLogoutMutation();

    useEffect(() => {
        if (isSuccess) navigate('/');
    }, [isSuccess, navigate]);

    const logoutButton = (
        <button
            title="Logout"
            onClick={() => {
                sendLogout();
                navigate("/")
            }
            }

        >
            Logout
        </button >
    );

    return logoutButton;
};

export default LogoutBtn;
