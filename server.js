const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

const locales = [
    'EN-US', 'AR-IQ', 'AR-LY', 'AR-SA', 'AR-WW', 'BS-BA', 'EN-AU', 'EN-CA', 'EN-CY', 'EN-GB', 'EN-HK', 'EN-IE',
    'EN-LB', 'EN-LK', 'EN-MT', 'EN-MY', 'EN-NG', 'EN-NZ', 'EN-PH', 'EN-PK', 'EN-SG', 'EN-WW', 'EN-ZA', 'ET-EE',
    'LT-LT', 'LV-LV', 'RO-MD', 'RU-BY', 'RU-KZ', 'SR-LATN-ME', 'VI-VN', 'ES-ES', 'ES-AR', 'ES-BO', 'ES-CO', 'ES-CR',
    'ES-DO', 'ES-EC', 'ES-GT', 'ES-HN', 'ES-MX', 'ES-NI', 'ES-PA', 'ES-PR', 'ES-PR', 'ES-PY', 'ES-SV', 'ES-UY',
    'ES-VE', 'FR-FR', 'FR-BE', 'FR-CA', 'FR-DZ', 'FR-MA', 'FR-TN', 'IT-IT', 'PT-BR', 'KO-KR'
];

// Route to handle URL generation for all locales
app.get('/generate', (req, res) => {
    const baseUrl = req.query.url;
    if (!baseUrl) {
        return res.status(400).send('Base URL is required');
    }

    // Extract the domain and the rest of the path
    const url = new URL(baseUrl);
    const domain = url.origin;
    const path = url.pathname;

    const urls = locales.map(locale => `${domain}/${locale.toLowerCase()}${path}`);
    res.json({ urls });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
