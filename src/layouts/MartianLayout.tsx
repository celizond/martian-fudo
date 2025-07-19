import { ASide, Main, NavBar } from '../components';
import type { reactChildrenProps } from '../types/generic.types';
import './MartianLayout.scss';

export const MartianLayout = ({ children }: reactChildrenProps) => {
    return (
        <div className={'martian-layout'}>
            <NavBar />
            <ASide />
            <Main>
                {children}
            </Main>
        </div>
    )
};
