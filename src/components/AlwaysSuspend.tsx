import React from "react"

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
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