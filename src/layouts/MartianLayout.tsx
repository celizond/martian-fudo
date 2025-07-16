import { ASide } from "../components/ASide"
import { Main } from "../components/Main"
import { NavBar } from "../components/NavBar"
import './MartianLayout.scss'

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
}
