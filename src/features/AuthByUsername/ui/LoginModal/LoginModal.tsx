import {FC, Suspense} from 'react';
import {classNames} from 'shared/lib/classNames';
import {Modal} from 'shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import {Spinner} from 'shared/ui';

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
            className={classNames('', {}, [className])}
        >
            <Suspense fallback={<Spinner />}>
                <LoginFormAsync onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};
