export const shippingRate = 0.40;
export const steps = [1, 2, 3, 4, 5];
export const fromToFormFields = ['name', 'street', 'city', 'state', 'zip'];
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
