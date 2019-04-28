import { calculateShippingCost } from "../utils";

describe("Calculates Shipping Cost", () => {
    it("calculates correct shipping cost", () => {
        const shippingCost = calculateShippingCost(5, 2);
        expect(shippingCost).toEqual("3.00");
    });
    it("calculates correct shipping cost", () => {
        const shippingCost = calculateShippingCost(0, 1);
        expect(shippingCost).toEqual("0.00");
    });
});
