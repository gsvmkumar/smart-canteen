import React from "react";
import { useNavigate } from "react-router-dom";
import tiffenItems from "../data/tiffenItems";
import ShopTemplate from "./ShopTemplate";

export default function TiffenCenter() {
  const navigate = useNavigate();
  return (
    <ShopTemplate 
      shopName="Tiffen Center" 
      items={tiffenItems} 
      onBack={() => navigate("/")} 
    />
  );
}


