import React from "react";
import { useNavigate } from "react-router-dom";
import juiceItems from "../data/juiceItems";
import ShopTemplate from "./ShopTemplate";

export default function JuiceCorner() { 
  const navigate = useNavigate();
  return (
    <ShopTemplate 
      shopName="Juice Corner" 
      items={juiceItems} 
      onBack={() => navigate("/")} 
    />
  );
}
