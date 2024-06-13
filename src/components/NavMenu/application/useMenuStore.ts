import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  showMenu: boolean;
};

type Action = {
  toggleShowMenu: () => void;
};

const useMenuStore = create<State & Action>()(
  persist(
    (set) => ({
      showMenu: false,
      toggleShowMenu: () =>
        set((state) => ({
          ...state,
          showMenu: !state.showMenu,
        })),
    }),
    {
      name: "menu-storage", // Nombre clave en el almacenamiento (localStorage)
    },
  ),
);

export { useMenuStore };
