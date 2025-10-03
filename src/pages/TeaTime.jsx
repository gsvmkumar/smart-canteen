import React from "react";
import { useNavigate } from "react-router-dom";
import teaItems from "../data/teaItems";
import ShopTemplate from "./ShopTemplate";

export default function TeaTime() {
  const navigate = useNavigate();
  return (
    <ShopTemplate 
      shopName="Tea Time" 
      items={teaItems} 
      onBack={() => navigate("/")} 
    />
  );
}


