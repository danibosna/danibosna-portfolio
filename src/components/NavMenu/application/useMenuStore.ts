import { atom } from "nanostores";
import { useStore } from "@nanostores/react";

// Función para obtener el estado inicial del localStorage
const getInitialShowMenu = (): boolean => {
  const storedValue = localStorage.getItem("menu-storage");
  // Verificar si storedValue no es null y analizarlo, de lo contrario, devolver false
  return storedValue !== null ? JSON.parse(storedValue) : false;
};

// Crear la tienda con el estado inicial
export const showMenuStore = atom(getInitialShowMenu());
// Escuchar cambios en el estado y guardarlos en localStorage
showMenuStore.subscribe((value) => {
  localStorage.setItem("menu-storage", JSON.stringify(value));
});

// Función para alternar el estado de showMenu
const toggleShowMenu = () => {
  showMenuStore.set(!showMenuStore.get());
};

// Hook personalizado para usar el estado y la acción
const useMenuStore = () => {
  const showMenu = useStore(showMenuStore);
  return {
    showMenu,
    toggleShowMenu,
  };
};

export { useMenuStore };
