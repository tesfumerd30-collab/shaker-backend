const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('ሰርቨሩ በትክክል እየሰራ ነው!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`ሰርቨሩ በፖርት ${PORT} እየሰራ ነው`);
});
