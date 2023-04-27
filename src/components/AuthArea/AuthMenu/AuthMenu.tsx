import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { logout } from '../../../auth/authSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import styles from './AuthMenu.module.scss';

interface AuthMenuProps { }

const AuthMenu: FC<AuthMenuProps> = () => {
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.authState);

    const logoutHandler = () => {
        dispatch(logout());
    }


    const renderContent = () => {
        if (user) {
            return (
                <>
                    <span>Hello {user.firstName} {user.lastName} | </span>
                    <NavLink onClick={logoutHandler} to="#">Logout</NavLink>
                </>
            )
        }

        return (
            <>
                <span>Hello Guest |</span>
                <NavLink to="/login">Login</NavLink>
                <span>|</span>
                <NavLink to="/register">Register</NavLink>
            </>
        )
    }


    return (
        <div className={styles.AuthMenu}>
            {renderContent()}
        </div>
    )
}



export default AuthMenu;
