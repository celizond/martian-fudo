
export interface imageBoxProps {
    src: string;
    alt: string;
}
//Poner una imagen por defecto
export const ImageBox = ({src, alt}: imageBoxProps) => {
    return (
        <img
            className='photo'
            alt={alt}
            src={src} />
    )
}
