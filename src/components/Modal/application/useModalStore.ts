import { ModalType } from "@/types/modal-type-enum";
import { create } from "zustand";

type State = {
  showModal: boolean;
  modalType: ModalType;
};

type Action = {
  toggleShowModal: () => void;
  setModalType: (modalType: ModalType) => void;
};

const useModalStore = create<State & Action>((set) => ({
  showModal: false,
  modalType: ModalType.ALERTS,
  toggleShowModal: () =>
    set((state) => ({
      ...state,
      showModal: !state.showModal,
    })),
  setModalType: (modalType: ModalType) =>
    set(() => ({
      modalType,
    })),
}));

export { useModalStore };
