import { create} from "zustand";

interface UseGalleryModal {
  isOpen: boolean;
  index : number;
  onOpen: (index: number) => void;
  onClose: () => void;
}

export const useGalleryModal = create<UseGalleryModal>((set) => ({
  isOpen: false,
  index: 0,
  onOpen: (index: number) => set({ index, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));