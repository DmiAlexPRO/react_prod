import {createSelector} from '@reduxjs/toolkit';
import {getUserAuthData} from 'entities/User';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home-page-menu-icon.svg';
import AboutIcon from 'shared/assets/icons/about-page-menu-icon.svg';
import ProfileIcon from 'shared/assets/icons/profile-page-menu-icon.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import {SidebarItemType} from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: MainIcon,
                text: 'navbarMenuLinkMain'
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'navbarMenuLinkAbout'
            }
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }

        return sidebarItemsList;
    }
);
