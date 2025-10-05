require('dotenv').config()
const express = require('express')
const crypto = require('crypto')
const Paystack = require('@paystack/inline-js')

const app = express()
const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api/initialize-payment', async(request, response) => {
    const {amount, email} = request.body

    try {
        const currentTransaction = await paystack.transaction.initialize({
            email,
            amount: amount * 100
        })

        response.status(200).json(currentTransaction)
    } catch(error) {
        console.error(error.message || "Unexpected error occurred brother")
        response.status(500).json({ error: error.message || "Another unexpected error just occurred"})
    }
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`App running on port ${PORT}` || 7000)
)