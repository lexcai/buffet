import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51MXFu9BGavHJE4SoSggJtWKa6QTLxmrfQeN8Z2wguriHQeq1CoqNxnM5TkfXV53uU8IqHMErAIbcABCOCknnG3sF00rXS2Yj3J"
);

export default stripePromise;
