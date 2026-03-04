import React from "react";
import { useNavigate } from "react-router-dom";
import ShopTemplate from "./ShopTemplate";
import { useCanteenData } from "../context/CanteenDataContext";

export default function BiriyaniPoint() {
  const navigate = useNavigate();
  const { getMenuItems } = useCanteenData();
  return (
    <ShopTemplate 
      shopName="Biriyani Point" 
      items={getMenuItems("Biriyani Point")} 
      onBack={() => navigate("/")} 
    />
  );
}


