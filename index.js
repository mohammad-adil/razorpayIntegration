const express = require('express')
const app = express()
const razorpay = require('razorpay')
const port = process.env.PORT || 3000

const rzp = new razorpay({
    key_id: 'rzp_test_E1xtlHrV2zhoSH',
    key_secret: 'tgahMW7VAqpafQLnSGubazM7'
})


let orders = async () => {
    const rzpOrder = await rzp.orders.create({
        amount: 900 * 100, // rzp format with paise
        currency: 'INR',
        receipt: "receipt#1", //Receipt no that corresponds to this Order,
        payment_capture: true,
        notes: {
            orderType: "Pre"
        } //Key-value pair used to store additional information
    })
    console.log(rzpOrder)
}
orders()


app.get('/create', async (req, res) => {

    res.sendFile('views/index.html', { root: __dirname })

})




app.listen(port, () => {

    console.log('Server Started at ' + port)
})