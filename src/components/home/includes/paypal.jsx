import React, { useRef, useEffect } from "react";

export default function Paypal(props) {
  const paypal = useRef();

  var {total}=props

  useEffect(() => {
    if(window.myButton) window.myButton.close();
    window.myButton = window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: "Martinelli Ginetto payment",
                amount: {
                  currency_code: "USD",
                  value: total+50
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        }
      });
    window.myButton.render(paypal.current);
  }, [total]);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}