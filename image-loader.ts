export default function cloudinaryLoader({ src, width, quality }: {
    src: string
    width: number
    quality?: number
}) {
    return src.replace('https://cdn.buttercms.com/', `https://cdn.buttercms.com/resize=width:${width}/`);
}