import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const fetchProducts = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const response = await fetch(`https://fakestoreapi.com/products?${query}`);
  const data = await response.json();
  return data;
};



export const postData = async (formData, isLoggedIn) => {
  if (!isLoggedIn) {
    throw new Error("User is not logged in.");
  }

  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: formData, // directly send formData
  });

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

  return await response.json();
};
