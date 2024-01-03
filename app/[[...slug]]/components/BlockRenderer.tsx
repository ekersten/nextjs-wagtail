import { snakeToCamelCase } from '@/app/utils'
import dynamic from 'next/dynamic'

export default function BlockRenderer({ block }: { block: { type: string, value: any, id: string } }) {
    const { type, id, value } = block;

    const componentName = snakeToCamelCase(type)

    try {
        const Component = dynamic(() => import(`./${componentName}`), {
            ssr: false
        })

        return (
            <Component id={`block-${id}`} {...value} />
        )
    } catch {
        return (
            <>
                {`<!-- component ${componentName} not found -->`}
            </>
        )
    }
}