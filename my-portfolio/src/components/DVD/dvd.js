import {useRef, useEffect} from 'react';



export const DVD = ({image, ellipse, i, link}) => {
    const imageRef = useRef();

    useEffect(() => {
        if (!imageRef?.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
            }
        }, {
            threshold: 0.5,
        });
        observer.observe(imageRef.current);
    }, [imageRef])

    let ellipse_key = 'ellipse' + String(i);
    let DVD_key = 'DVD' + String(i);
    let text_key = 'text' + String(i);
    let position = 'pos' + String(i);
    let name = 'Button ' + position;
    return(
        <div key={i} >
            <a href={link}>
            <div className={name} ref={imageRef}>
                <div className={DVD_key} ><img key={DVD_key} src={image} width="150" height="150"/></div>
                <div><img key={ellipse_key} src={ellipse} width="100" height="7"/></div>
                <h2 key={text_key}>{link}</h2>
            </div>
            </a>
        </div>
    );
}