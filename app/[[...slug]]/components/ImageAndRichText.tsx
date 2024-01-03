import { getImageURL } from '@/app/utils'

export default function ImageAndRichText({ id, image, rich_text }: { id: string, image: number, rich_text: string }) {

    const img_url = getImageURL(image, 'fill-200x200')
    const img_url2 = getImageURL(image, 'width-100')

    return (
        <div id={id}>
            <img src={img_url} alt="image" />
            <img src={img_url2} alt="image" />
            <div dangerouslySetInnerHTML={{ __html: rich_text }} />
        </div>
    )
}