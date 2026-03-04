import React from "react";
import { useNavigate } from "react-router-dom";
import ShopTemplate from "./ShopTemplate";
import { useCanteenData } from "../context/CanteenDataContext";

export default function TeaTime() {
  const navigate = useNavigate();
  const { getMenuItems } = useCanteenData();
  return (
    <ShopTemplate 
      shopName="Tea Time" 
      items={getMenuItems("Tea Time")} 
      onBack={() => navigate("/")} 
    />
  );
}


