require('dotenv').config();

module.exports = {
  env: {
    STRIPE_TEST_PUBLISHABLEKEY: process.env.STRIPE_TEST_PUBLISHABLEKEY,
    STRIPE_LIVE_PUBLISHABLEKEY: process.env.STRIPE_LIVE_PUBLISHABLEKEY,
    GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID,
  },
};
