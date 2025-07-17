import './ImageBox.scss';

export interface imageBoxProps {
    src: string;
    alt: string;
    height?: number;
    width?: number;
}
//Poner una imagen por defecto
export const ImageBox = ({src, alt, height=36, width=36}: imageBoxProps) => {
    return (
        <img
            className='photo'
            alt={alt}
            src={src} 
            height={height}
            width={width}/>
    )
}
