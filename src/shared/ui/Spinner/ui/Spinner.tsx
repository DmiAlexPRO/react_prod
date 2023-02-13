import {FC} from 'react';
import './Spinner.scss';

interface SpinnerProps {
    className?: string
}

export const Spinner: FC<SpinnerProps> = ({className}) => {
    return (
        <div className="lds-hourglass"></div>
    );
};
