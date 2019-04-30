export const shippingRate = 0.40; // Defines shipping rate.
export const steps = [1, 2, 3, 4, 5]; // Defines no of steps as a array.
export const fromToFormFields = ['name', 'street', 'city', 'state', 'zip']; // Defines form fields of "From" and "To" sections.
// Defines form validation rules
export const formValidationRules = {
    "to": {
        name: true,
        street: true,
        city: true,
        state: true,
        zip: true
    },
    "from": {
        name: true,
        street: true,
        city: true,
        state: true,
        zip: true
    },
    "weight": {
        weight: true
    }
}
