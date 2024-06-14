import React, {useState} from "react"

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function fetchData1(): Promise<string> {
    await sleep(1000)
    
    return `Hello, ${(Math.random() * 1000).toFixed(0)}`
}


let data: string | undefined
const dataMap: Map<string, string> = new Map()

// カスタムHooks(勉強用のためファイル分割なし)
function useData1(cacheKey: string): string {
    const cachedData = dataMap.get(cacheKey)
    if (cachedData === undefined){
        throw fetchData1().then((d) => dataMap.set(cacheKey, d))
    }
    return cachedData
}

export const DataLoader: React.VFC = () => {
    const data = useData1("DataLoader1")

    // データがあればそれを表示
    return <div>data is {data}</div>
}

export const AlwaysSuspend: React.FC = () => {
    console.log("AlwaysSuspend: suspending...")
    throw sleep(1000)
}

export const SometimeSuspend: React.FC = () => {
    if(Math.random () < 0.5){
        throw sleep(1000)
    }

    return <p>Hello World!</p>
}