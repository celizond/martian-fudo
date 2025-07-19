import type { ImageBoxProps } from '../../types/commonComponents.types';
import './ImageBox.scss';

export const ImageBox = ({src, alt, height=36, width=36}: ImageBoxProps) => {
    return (
        <img
            className='photo'
            alt={alt}
            src={src} 
            height={height}
            width={width}/>
    )
}
