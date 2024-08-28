import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl = (url: string) =>{
    if(!url) return noImage;
    const splitted = url.split('/media/');
    const cropped = `${splitted[0]}/media/crop/600/400/${splitted[1]}`;
    return cropped;
}

export default getCroppedImageUrl;

