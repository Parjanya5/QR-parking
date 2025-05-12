import colors from 'colors'

 const logger = (req,res,next)=>{

    const methodcolor = {
        GET : 'green',
        POST : 'blue',
        PUT : 'yellow',
        DELETE : 'red'
    }

    const color = methodcolor[req.method] 
    console.log(`${req.method} ${req.protocol} ${req.get('host')} ${req.url}` [
        color
    ])
    next();
}

export default logger;