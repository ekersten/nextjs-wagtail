export default function TitleAndParagraph({ id, title, paragraph }: { id: string, title: string, paragraph: string }) {
    return (
        <div id={id}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}