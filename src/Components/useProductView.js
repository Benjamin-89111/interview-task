import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export const getQuery=(key,search)=>{
  const querys=search?.replace("?","")?.split("&");
  const query=querys.find((query)=>query.includes(key));
  const queryValue=query?.replace(`${key}=`,"");
  return queryValue;
}


export const useProductView = () => {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = ({ target: { value } }) => {
    setSelectedQuantity(value);
  };

  const getImage = (colour) => {
    const { attributes } = product;
    const image = attributes?.images?.data.find((image) =>
      image?.attributes?.name?.includes(colour)
    );
    return image?.attributes?.url || "";
  };

  useEffect(() => {
    if (product && product.attributes) {
      const { attributes } = product;
      if (attributes.colours && attributes.colours.length > 0) {
        setSelectedColor(attributes.colours[0].name);
        setSelectedSize(attributes.colours[0].name);
      }
    }
  }, [product]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (productId) {
          const { data: { data } } = await axios.get(
            `http://localhost:1337/api/products/${productId}?populate=*`
          );
          setProduct(data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return {
    product,
    getImage,
    selectedSize,
    selectedColor,
    selectedQuantity,
    setSelectedColor,
    setSelectedSize,
    handleQuantityChange,
  };
};
