import { NavBar } from "../components/NavBar"

export const MartianLayout = ({children}: any) => {
  return (
    <div className={'martian-layout'}>
        <NavBar />
        interno del layout
        {children}
    </div>
  )
}
