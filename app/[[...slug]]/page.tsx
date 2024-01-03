import BlockRenderer from './components/BlockRenderer';

const getCMSPageData = async (slug: string) => {
    const response = await fetch(`${process.env.API_URL}/api/cms/pages/find/?html_path=${slug}`)
    return response.json()
}

export default async function CMSPage({ params }: { params: { slug: string } }) {
    const slug = params.slug ? params.slug.join('/') : '/';

    const pageData = await getCMSPageData(slug)

    return (
        <>
            <div className="page_meta">
                <h4>CMS Page</h4>
                <p>slug: {slug}</p>
                <p>API_URL: {process.env.API_URL}</p>
            </div>

            <div className="page">
                <h1>{pageData.title}</h1>
                <div className="body">
                    {pageData.body.map(block => <BlockRenderer key={block.id} block={block} />)}
                </div>
            </div>
        </>
    )
}