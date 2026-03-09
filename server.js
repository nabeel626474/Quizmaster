const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/wallet', (req, res) => {
    res.sendFile(path.join(__dirname, 'wallet.html'));
});

app.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy.html'));
});

app.get('/terms', (req, res) => {
    res.sendFile(path.join(__dirname, 'terms.html'));
});

app.get('/disclaimer', (req, res) => {
    res.sendFile(path.join(__dirname, 'disclaimer.html'));
});

app.get('/quiz/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 1 && id <= 15) {
        res.sendFile(path.join(__dirname, `quiz/${id}.html`));
    } else {
        res.status(404).sendFile(path.join(__dirname, 'index.html'));
    }
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Smart Quiz Hub server running on http://0.0.0.0:${PORT}`);
    console.log('Routes registered:');
    console.log('  GET /           -> Home');
    console.log('  GET /about      -> About');
    console.log('  GET /contact    -> Contact');
    console.log('  GET /wallet     -> Wallet');
    console.log('  GET /privacy    -> Privacy Policy');
    console.log('  GET /terms      -> Terms of Service');
    console.log('  GET /disclaimer -> Disclaimer');
    console.log('  GET /quiz/:id   -> Quiz Pages (1-15)');
});
