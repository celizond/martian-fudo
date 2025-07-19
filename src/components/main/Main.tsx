import type { reactChildrenProps } from '../../types/generic.types';
import './Main.scss';

export const Main = ({children}: reactChildrenProps) => {
  return (
    <main className="main scrollable ">{children}</main>
  )
}
