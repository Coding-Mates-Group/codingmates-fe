import React, { useEffect, useRef } from 'react';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';
import Close from '/public/icons/close_black.svg';
import ArrowBack from '/public/icons/arrow_back.svg';

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  isClose?: boolean;
  isBack?: boolean;
  className?: string;
}

export default function Modal({
  children,
  isOpen,
  onClose,
  isClose = false,
  isBack = false,
  className,
}: ModalProps) {
  useLockBodyScroll(isOpen);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      onClose?.();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.show();
    } else if (!isOpen && dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className={isOpen ? `fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25` : 'hidden'}
    >
      <dialog
        aria-modal="true"
        aria-labelledby="title"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[0.6rem] bg-white p-0 `}
        onClick={(e) => e.stopPropagation()}
        ref={dialogRef}
      >
        <div className={`flex flex-col items-center ${className}`}>
          {isBack ? (
            <button onClick={onClose} className="absolute top-16 left-16">
              <ArrowBack role="img" aria-label="back" />
            </button>
          ) : null}
          {isClose ? (
            <button onClick={onClose} className="absolute top-16 right-16">
              <Close role="img" aria-label="close" />
            </button>
          ) : null}
          {children}
        </div>
      </dialog>
    </div>
  );
}
