const info = (namespase: string, message: string, additonal?: any) => {
    const now = new Date() 
    additonal ? console.log(`[${now.toISOString()}] [${namespase}] ${message}`, additonal) : console.log(`[${now.toISOString()}] [${namespase}] ${message}`)
}

const warn = (namespase: string, message: string, additonal?: any) => {
    const now = new Date() 
    additonal ? console.warn(`[${now.toISOString()}] [${namespase}] ${message}`, additonal) : console.warn(`[${now.toISOString()}] [${namespase}] ${message}`)
}

const error = (namespase: string, message: string, additonal?: any) => {
    const now = new Date() 
    additonal ? console.error(`[${now.toISOString()}] [${namespase}] ${message}`, additonal) : console.error(`[${now.toISOString()}] [${namespase}] ${message}`)
    console.trace()
}

export {info, warn, error}