import {FC} from 'react';
import styles from './LoginModal.module.scss';
import {classNames} from 'shared/lib/classNames';
import {Modal} from 'shared/ui/Modal';
import {LoginForm} from '../LoginForm/LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal: FC<LoginModalProps> = ({
    className,
    onClose,
    isOpen
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(styles.loginModal, {}, [className])}
        >
            <LoginForm />
        </Modal>
    );
};
