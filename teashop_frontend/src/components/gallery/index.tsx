import React, {useState} from "react";
import styles from './gallery.module.scss';

export interface GalleryProps {
    imgPaths: string[]
}

const Gallery: React.FC<GalleryProps> = ({imgPaths}) => {
    const [imgIndex, setImgIndex] = useState(0);

    const clickHandler = (i: number) => {
        setImgIndex(i);
    };

    return (
        <div className={styles.galleryContainer}>
            <img src={imgPaths[imgIndex]} alt=""/>
            <div>
                {imgPaths.map((path, i) =>
                    <img
                        onClick={clickHandler.bind(null, i)}
                        key={i}
                        src={path}
                        className={i === imgIndex ? styles.selectedSmall : ''}
                        alt=""
                    />)}
            </div>
        </div>
    );
};

export default Gallery;