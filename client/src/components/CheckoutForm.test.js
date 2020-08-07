import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";


test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    getByText(/checkout form/i);
  });
  

   test("form shows success message on submit with form details", async() => {
     render(<CheckoutForm />);

   
    const firstNameIp = screen.getByPlaceholderText(/first Name/i)
    const lastNameIp = screen.getByPlaceholderText(/last Name/i)
    const addressIp = screen.getByPlaceholderText(/address/i)
  
  
    fireEvent.change(firstNameIp, { target: { value: 'Orlando' } })
    fireEvent.change(lastNameIp, { target: { value: 'Davila' } })
    fireEvent.change(addressIp, { target: { value: 'BigBear Lane' } })
  
    const submitBtn = screen.getByRole('button')
    fireEvent.click(submitBtn);
  
    expect(await screen.findByText(/Orlando/i)).toBeInTheDocument();
  })
