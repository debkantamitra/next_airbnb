"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../common/Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 bg-neutral-800/70 focus:outline-none">
      <div className="relative w-full lg:w-3/6 md:w-4/6 xl:w-2/6 my-6">
        {/* content */}
        <div className={``}>
          <div className="rounded-lg shadow-lg flex flex-col w-full bg-white outline-none">
            {/* header */}
            <div className="flex items-center justify-center p-4 border-b">
              <button
                className="p-1 hover:opacity-70 transition left-4 absolute"
                onClick={onClose}
              >
                <IoMdClose size={18} />
              </button>
              <div className="text-lg font-semibold">{title}</div>
            </div>
            {/* body */}
            <div className="p-4">{body}</div>
            {/* footer */}
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-center gap-4 w-full">
                {secondaryAction && (
                  <Button
                    label={secondaryActionLabel}
                    onClick={() => {}}
                    outline
                  />
                )}
                <Button
                  label={actionLabel}
                  onClick={onSubmit}
                  disabled={disabled}
                />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
