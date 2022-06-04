import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { CartItem } from "../../typing";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const cartItems: CartItem[] = req.body.data.cartItems;
    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        submit_type: "pay",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          {
            shipping_rate: "shr_1L6xInSIFc0pYy9L6hV061ll",
          },
          { shipping_rate: "shr_1L6xK1SIFc0pYy9LOL95QjWm" },
        ],
        line_items: cartItems.map((lineItem) => {
          const img = lineItem.image[0].asset._ref;
          const newImage = img
            .replace(
              "image-",
              "https://cdn.sanity.io/images/53ksi6xt/production/"
            )
            .replace("-webp", ".webp");
          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: lineItem.name,
                images: [newImage],
              },
              unit_amount: lineItem.price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: lineItem.quantity,
          };
        }),
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/canceled`,
      };
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err: any) {
      res.status(500).json({ message: err.message, statusCode: 500 });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
