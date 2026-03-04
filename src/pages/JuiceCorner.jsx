import React from "react";
import { useNavigate } from "react-router-dom";
import ShopTemplate from "./ShopTemplate";
import { useCanteenData } from "../context/CanteenDataContext";

export default function JuiceCorner() { 
  const navigate = useNavigate();
  const { getMenuItems } = useCanteenData();
  return (
    <ShopTemplate 
      shopName="Juice Corner" 
      items={getMenuItems("Juice Corner")} 
      onBack={() => navigate("/")} 
    />
  );
}
