import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (newProduct) =>
    set((state) => {
      const existingProduct = state.cart.find(
        (product) => product.id === newProduct.id
      );
      if (existingProduct) {
        return {
          cart: state.cart.map((product) =>
            product.id === newProduct.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return { cart: [...state.cart, newProduct] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
  increaseQuantity: (productId) => {
    set((state) => ({
      cart: state.cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      ),
    }));
  },
  decreaseQuantity: (productId) => {
    set((state) => ({
      cart: state.cart
        .map((product) =>
          product.id === productId && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product !== null),
    }));
  },
}));
