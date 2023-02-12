export enum AppRoutes {
    // eslint-disable-next-line no-unused-vars
    MAIN= 'main',
    // eslint-disable-next-line no-unused-vars
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};
