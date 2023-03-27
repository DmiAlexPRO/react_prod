import {lazy} from 'react';

// export const ArticleDetailsPageAsync = lazy(() => import('./ArticleDetailsPage'));

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailsPage')), 600); // TODO: отладочная приблуда, удалить!
}));