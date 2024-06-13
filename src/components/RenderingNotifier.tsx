type Props = {
    name: string
}

export const RenderingNotifier: React.FC<Props> = ({ name }) => {
    console.log(`${name} is render`)

    return null
}