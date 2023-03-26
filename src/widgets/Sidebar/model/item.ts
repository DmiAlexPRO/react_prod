import React from 'react';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home-page-menu-icon.svg';
import AboutIcon from 'shared/assets/icons/about-page-menu-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-page-menu-icon.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'navbarMenuLinkMain'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'navbarMenuLinkAbout'
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'navbarMenuLinkProfile',
        authOnly: true
    },
    {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'navbarMenuLinkArticles',
        authOnly: true
    }
];
