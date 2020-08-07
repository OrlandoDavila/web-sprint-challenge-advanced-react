import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    getByText(/checkout form/i);
  });
  

   test("form shows success message on submit with form details", async() => {
     render(<CheckoutForm />);

   
    const firstName = screen.getByLableText(/first Name/i);
    const lastName = screen.getByLableText(/last Name/i);
    const address = screen.getByLableText(/address/i);
  
  
    fireEvent.change(firstName, { target: { value: 'Orlando' } })
    fireEvent.change(lastName, { target: { value: 'Davila' } })
    fireEvent.change(address, { target: { value: 'BigBear Lane' } })
  
    const submitBtn = screen.getByRole('button')
    fireEvent.click(button);
  
    expect(await screen.findByText(/Orlando/i)).toBeInTheDocument();
  })
