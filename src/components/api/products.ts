import { Product } from "@/types";
import axios from "axios";

export const getAllProducts = async () => {
  try {
    const response = (await axios.get("https://fakestoreapi.com/products")) as { data: Product[] };
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
