require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors')


const app = express();
app.use(cors(({ origin: 'http://localhost:5173'})))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/initialize-payment', async (req, res) => {
  const { amount, email } = req.body;

  try {
    const response = await axios.post('https://api.paystack.co/transaction/initialize', {
        email,
        amount: amount * 100,  
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res
      .status(500)
      .json({ error: error.response?.data || 'Unexpected error occurred brother' });
  }
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
