import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { shops as baseShops } from "../data/shops";
import juiceItems from "../data/juiceItems";
import tiffenItems from "../data/tiffenItems";
import biriyaniItems from "../data/biriyaniItems";
import bakeryItems from "../data/bakeryItems";
import teaItems from "../data/teaItems";
import baseOffers from "../data/comboOffers";

const CanteenDataContext = createContext();

const STORAGE_KEY = "smart_canteen_admin_data_v1";

const normalize = (text) =>
  String(text)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const withIds = (items = [], prefix) =>
  items.map((item, index) => ({
    id: item.id || `${prefix}-${normalize(item.name)}-${index + 1}`,
    ...item,
  }));

const initialData = {
  shops: [...baseShops],
  menuByShop: {
    "Juice Corner": withIds(juiceItems, "juice"),
    "Tiffen Center": withIds(tiffenItems, "tiffen"),
    "Biriyani Point": withIds(biriyaniItems, "biriyani"),
    Bakery: withIds(bakeryItems, "bakery"),
    "Tea Time": withIds(teaItems, "tea"),
  },
  offers: baseOffers.map((offer, index) => ({
    id: offer.id || `offer-${index + 1}`,
    ...offer,
  })),
  orders: [],
};

const readStoredData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialData;
    const parsed = JSON.parse(raw);

    return {
      shops: Array.isArray(parsed.shops) ? parsed.shops : initialData.shops,
      menuByShop: parsed.menuByShop || initialData.menuByShop,
      offers: Array.isArray(parsed.offers) ? parsed.offers : initialData.offers,
      orders: Array.isArray(parsed.orders) ? parsed.orders : [],
    };
  } catch {
    return initialData;
  }
};

export function CanteenDataProvider({ children }) {
  const [data, setData] = useState(readStoredData);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const shops = data.shops;
  const menuByShop = data.menuByShop;
  const offers = data.offers;
  const orders = data.orders;

  const getMenuItems = useCallback((shopName) => data.menuByShop[shopName] || [], [data.menuByShop]);

  const setShopOpenState = (shopId, open) => {
    setData((prev) => ({
      ...prev,
      shops: prev.shops.map((shop) =>
        shop.id === shopId ? { ...shop, open: Boolean(open) } : shop
      ),
    }));
  };

  const addMenuItem = (shopName, itemInput) => {
    const item = {
      id: `item-${Date.now()}`,
      name: itemInput.name,
      price: Number(itemInput.price),
      img: itemInput.img || `${process.env.PUBLIC_URL}/assets/placeholder-food.jpg`,
      available: itemInput.available ?? true,
      isVeg: itemInput.isVeg,
      category: itemInput.category || "General",
    };

    setData((prev) => ({
      ...prev,
      menuByShop: {
        ...prev.menuByShop,
        [shopName]: [...(prev.menuByShop[shopName] || []), item],
      },
    }));
  };

  const updateMenuItem = (shopName, itemId, updates) => {
    setData((prev) => ({
      ...prev,
      menuByShop: {
        ...prev.menuByShop,
        [shopName]: (prev.menuByShop[shopName] || []).map((item) =>
          item.id === itemId
            ? {
                ...item,
                ...updates,
                price:
                  updates.price !== undefined
                    ? Number(updates.price)
                    : Number(item.price),
              }
            : item
        ),
      },
    }));
  };

  const removeMenuItem = (shopName, itemId) => {
    setData((prev) => ({
      ...prev,
      menuByShop: {
        ...prev.menuByShop,
        [shopName]: (prev.menuByShop[shopName] || []).filter(
          (item) => item.id !== itemId
        ),
      },
    }));
  };

  const addOffer = (offerInput) => {
    const offer = {
      ...offerInput,
      id: `offer-${Date.now()}`,
      discount: Number(offerInput.discount),
      originalPrice: Number(offerInput.originalPrice),
      offerPrice: Number(offerInput.offerPrice),
      items: Array.isArray(offerInput.items)
        ? offerInput.items
        : String(offerInput.items)
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
      popular: Boolean(offerInput.popular),
      validUntil: offerInput.validUntil || "",
    };

    setData((prev) => ({
      ...prev,
      offers: [offer, ...prev.offers],
    }));
  };

  const removeOffer = (offerId) => {
    setData((prev) => ({
      ...prev,
      offers: prev.offers.filter((offer) => offer.id !== offerId),
    }));
  };

  const createOrder = (orderInput) => {
    const order = {
      id: `order-${Date.now()}`,
      status: "Placed",
      createdAt: new Date().toISOString(),
      ...orderInput,
    };

    setData((prev) => ({
      ...prev,
      orders: [order, ...prev.orders],
    }));

    return order;
  };

  const updateOrderStatus = (orderId, status) => {
    setData((prev) => ({
      ...prev,
      orders: prev.orders.map((order) =>
        order.id === orderId ? { ...order, status } : order
      ),
    }));
  };

  const resetAdminData = () => {
    setData(initialData);
  };

  const value = useMemo(
    () => ({
      shops,
      menuByShop,
      offers,
      orders,
      getMenuItems,
      setShopOpenState,
      addMenuItem,
      updateMenuItem,
      removeMenuItem,
      addOffer,
      removeOffer,
      createOrder,
      updateOrderStatus,
      resetAdminData,
    }),
    [shops, menuByShop, offers, orders, getMenuItems]
  );

  return (
    <CanteenDataContext.Provider value={value}>
      {children}
    </CanteenDataContext.Provider>
  );
}

export function useCanteenData() {
  const context = useContext(CanteenDataContext);
  if (!context) {
    throw new Error("useCanteenData must be used within CanteenDataProvider");
  }
  return context;
}
