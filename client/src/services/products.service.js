import httpService from "./http.service";
const productsEndpoint = "products/";

const productService = {
    getProducts: async () => {
        const { data } = await httpService.get(productsEndpoint);
        return data;
    }
    // createComment: async (payload) => {
    //     const { data } = await httpService.put(
    //         productEndpoint + payload._id,
    //         payload
    //     );
    //     return data;
    // },
    
    // removeComment: async (productId) => {
    //     const { data } = await httpService.delete(productEndpoint + productId);
    //     return data;
    // }
};
export default productService;

