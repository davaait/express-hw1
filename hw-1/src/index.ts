import express, {Request, Response} from 'express'
const app = express();
const port = 3002;

app.get('/', (req: Request, res: Response) => {
    const message = 'Hello world!!!!';
    res.send(message);
})

app.listen(port, () => {
    console.log(`🚀App is listening on port ${port}`)
})