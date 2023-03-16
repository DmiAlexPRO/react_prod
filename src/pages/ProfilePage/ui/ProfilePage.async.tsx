import {lazy} from 'react';

// export const ProfilePageAsync = lazy(() => import('./ProfilePage'));

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ProfilePage')), 600); // TODO: отладочная приблуда, удалить!
}));
