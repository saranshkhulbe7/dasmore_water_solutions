import { Product } from "@/pages/products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartStoreType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  cartItems: {
    product: Product;
    qty: number;
  }[];
  itemExistInCart: (_id: string) => boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (_id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStoreType>()(
  persist(
    (set, get) => ({
      isModalOpen: false,
      openModal: () => set({ isModalOpen: true }),
      closeModal: () => set({ isModalOpen: false }),
      cartItems: [],

      itemExistInCart: (_id: string) => {
        return get().cartItems.some((item) => item.product._id === _id);
      },

      addToCart: (product: Product) =>
        set((state) => {
          let currentCart = state.cartItems;
          const doesItemExist = get().itemExistInCart(product._id);

          if (!doesItemExist) {
            const tempProduct = {
              product,
              qty: 1,
            };
            currentCart = [...currentCart, tempProduct];
          } else {
            currentCart = currentCart.map((item) =>
              item.product._id === product._id
                ? { ...item, qty: item.qty + 1 }
                : item
            );
          }

          return { cartItems: currentCart };
        }),

      removeFromCart: (_id: string) =>
        set((state) => {
          let currentCart = state.cartItems;

          currentCart = currentCart
            .map((item) =>
              item.product._id === _id
                ? { ...item, qty: Math.max(item.qty - 1, 0) }
                : item
            )
            .filter((item) => item.qty > 0);

          return { cartItems: currentCart };
        }),

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage", // Key for localStorage
    }
  )
);
