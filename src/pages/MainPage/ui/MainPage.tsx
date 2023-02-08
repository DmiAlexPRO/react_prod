import {FC} from "react";
import {useTranslation} from "react-i18next";

const MainPage: FC = () => {
    const {t} = useTranslation('main');

    return (
        <>
            {t('page-title')}
        </>
    );
};

export default MainPage;