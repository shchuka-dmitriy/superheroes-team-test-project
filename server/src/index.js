import express from 'express';
import router  from './routers';
import cors    from 'cors';

const PORT = process.env.NODE_PORT || 9633;
const app = express();

app.use( cors() );
app.use( express.json() );
app.use('/public', express.static('public'));
app.use( '/api', router );

app.listen( PORT, () => console.log( `Example app listening on port ${PORT}!` ) );