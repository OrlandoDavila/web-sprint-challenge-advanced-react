import CheckoutForm from "../components/CheckoutForm"
// write your custom hook here to control your checkout form

export const useForm = (intValue) => {
    const [values, setValues] = CheckoutForm(intValue);

    const handleChanges = e => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const clearForm = e => {
        e.preventDefault();
        setValues(intValue);
    }

    retuen [values, handleChanges, clearForm]
}