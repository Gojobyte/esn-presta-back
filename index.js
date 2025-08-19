const express = require('express');
const app = express();
app.use(express.json());

app.get(['/health', '/api/health'], (_, res) => res.json({ ok: true }));
app.get('/api/hello', (_, res) => res.json({ message: 'Hello from backend!' }));

const HOST = '127.0.0.1';
const PORT = process.env.PORT || 3001;

app.listen(PORT, HOST, () => console.log(`API listening on http://${HOST}:${PORT}`));

