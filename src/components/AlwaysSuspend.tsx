function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const AlwaysSuspend: React.FC = () => {
    throw sleep(1000)
}