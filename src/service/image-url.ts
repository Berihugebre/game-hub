const getCroppedImageUrl = (url: string) =>{
    const splitted = url.split('/media/');
    const cropped = `${splitted[0]}/media/crop/600/400/${splitted[1]}`;
    return cropped;
}

export default getCroppedImageUrl;

