import express from 'express';

// App
const app = express();

app.use(express.json());

app.get('/', (_, response) => {
  response.send('Hello');
});

export default app;
