import {lazy, FC} from 'react';
import {LoginFormProps} from './LoginForm';

// export const LoginFormAsync = lazy(() => import('./LoginForm'));

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginForm')), 2500); // TODO: отладочная приблуда, удалить!
}));
