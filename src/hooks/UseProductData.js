import { useSelector } from "react-redux";

export const useProductData = () => useSelector(state => state.eshop.productData);