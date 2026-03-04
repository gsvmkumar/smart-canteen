import React from "react";
import { useNavigate } from "react-router-dom";
import ShopTemplate from "./ShopTemplate";
import { useCanteenData } from "../context/CanteenDataContext";

export default function TiffenCenter() {
  const navigate = useNavigate();
  const { getMenuItems } = useCanteenData();
  return (
    <ShopTemplate 
      shopName="Tiffen Center" 
      items={getMenuItems("Tiffen Center")} 
      onBack={() => navigate("/")} 
    />
  );
}


