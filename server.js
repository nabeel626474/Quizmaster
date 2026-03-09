const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const ROOT = __dirname;

function sendPage(res, filePath) {
    res.sendFile(path.join(ROOT, filePath), function (err) {
        if (err) {
            res.status(404).sendFile(path.join(ROOT, 'index.html'));
        }
    });
}

app.use(express.static(ROOT));

app.get('/', (req, res) => {
    sendPage(res, 'index.html');
});

app.get('/about', (req, res) => {
    sendPage(res, 'about.html');
});

app.get('/contact', (req, res) => {
    sendPage(res, 'contact.html');
});

app.get('/wallet', (req, res) => {
    sendPage(res, 'wallet.html');
});

app.get('/privacy', (req, res) => {
    sendPage(res, 'privacy.html');
});

app.get('/terms', (req, res) => {
    sendPage(res, 'terms.html');
});

app.get('/disclaimer', (req, res) => {
    sendPage(res, 'disclaimer.html');
});

app.get('/quiz/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 1 && id <= 15) {
        sendPage(res, `quiz/${id}.html`);
    } else {
        res.status(404).sendFile(path.join(ROOT, 'index.html'));
    }
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(ROOT, 'index.html'));
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.message);
});

process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Smart Quiz Hub running on http://0.0.0.0:${PORT}`);
    console.log('Routes:');
    console.log('  GET /           -> Home');
    console.log('  GET /about      -> About');
    console.log('  GET /contact    -> Contact');
    console.log('  GET /wallet     -> Wallet');
    console.log('  GET /privacy    -> Privacy Policy');
    console.log('  GET /terms      -> Terms of Service');
    console.log('  GET /disclaimer -> Disclaimer');
    console.log('  GET /quiz/:id   -> Quiz Pages (1-15)');
});
