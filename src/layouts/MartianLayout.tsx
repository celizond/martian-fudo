import { ASide, Main, NavBar } from '../components';
import './MartianLayout.scss';

export const MartianLayout = ({ children }: any) => {
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
