import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CloseIcon from "../svg/CloseIcon";

interface Props {
  open: boolean;
  children: React.ReactNode;
  closeModal: () => void;
  title?: string;
  onClose: () => void;
}

const Modal = ({ open, children, closeModal, title, onClose }: Props) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-[484px] relative
                 transform overflow-hidden pt-[60px] pb-10
                  bg-modal-bg p-6 text-left align-middle rounded-[15px]
                   shadow-xl transition-all`}
              >
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-bold leading-6 text-[#1E1E1E]"
                  >
                    {title}
                  </Dialog.Title>
                )}

                {children}

                <button
                  type="button"
                  onClick={onClose}
                  className={`absolute top-[16px] right-[16px]`}
                >
                  <CloseIcon width={"16px"} height={"16px"} />
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
