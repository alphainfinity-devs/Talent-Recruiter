const stripe = require("stripe")(
  "sk_test_51HOOgiJm9OErWZzlNlYiQmBqmAmpPNUeHIuC4YDrPpP2wj3OrxDrMtkn7a8k0nrZENnoSTCbnjSVhUnrrNYUBRNG00mIpWzqnj",
); // This is a public sample test API key.

const createPayment = async (req, res, next) => {
  try {
      const { amount, currency } = req.headers;
      console.log(amount,"currency");
    if (amount && currency) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: `${currency}`,
      });
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    }
  } catch (error) {
    console.log("from payment", error);
    next(error);
  }
};

module.exports = {
  createPayment,
};
