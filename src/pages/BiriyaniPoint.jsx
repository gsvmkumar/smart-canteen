import React from "react";
import { useNavigate } from "react-router-dom";
import biriyaniItems from "../data/biriyaniItems";
import ShopTemplate from "./ShopTemplate";

export default function BiriyaniPoint() {
  const navigate = useNavigate();
  return (
    <ShopTemplate 
      shopName="Biriyani Point" 
      items={biriyaniItems} 
      onBack={() => navigate("/")} 
    />
  );
}


