import httpService from "./http.service";
const productsEndpoint = "products/";

const productService = {
    getProducts: async () => {
        const { data } = await httpService.get(productsEndpoint);
        return data;
    },
    createProducts: async (payload) => {
        const { data } = await httpService.post(productsEndpoint,payload);
        return data;
    },
    
    removeProducts: async (productId) => {
        const { data } = await httpService.delete(productsEndpoint + productId);
        return data;
    },
    updateProducts: async (payload) => {
        const { data } = await httpService.patch(
            productsEndpoint + payload._id,
            payload
        );
        return data;
    },
};
export default productService;

