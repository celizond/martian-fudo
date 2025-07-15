import { ASide } from "../components/ASide"
import { NavBar } from "../components/NavBar"

export const MartianLayout = ({ children }: any) => {
    return (
        <div className={'martian-layout'}>
            <NavBar />
            <div className='dashboard'>
                <ASide />
                {children}
            </div>
        </div>
    )
}
