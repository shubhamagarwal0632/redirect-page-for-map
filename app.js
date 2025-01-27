const express = require('express');
const app = express();

// Define the port for your server
const PORT = 3000;

app.get('/',(req, res)=>{
    res.send('server is running fine for the testing');
})

// Redirect endpoint
app.get('/redirect', (req, res) => {
  res.redirect('https://example.com'); // Replace with your target URL
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
