import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';

export interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  isClose?: boolean;
  isBack?: boolean;
}

export default function CookieModal(props: ModalProps) {
  return (
    <Modal {...props} className="h-[24rem] w-[44rem] px-90 pt-[6rem] pb-[4rem]">
      <h2 id="title" className="font-18 mb-12 font-bold text-gray-90">
        We use cookies 🍪
      </h2>
      <p className="font-16 mb-12 flex flex-col items-center text-gray-80">
        <span>Our website uses cookies to ensure</span>
        <span>you get the best experience.</span>
      </p>
      <Button paddingX="px-[6.65rem]" paddingY="py-12">
        Accept
      </Button>
    </Modal>
  );
}
