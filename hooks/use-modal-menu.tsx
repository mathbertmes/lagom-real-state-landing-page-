import { create} from "zustand";

interface UseMenuModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useMenuModal = create<UseMenuModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));