import React from 'react';

type buttonType = 'primary' | 'secondary' | 'ghost' | 'text' | 'danger';
type buttonState = 'enabled' | 'disabled';

const buttonConfig: { [key in buttonType]: { [key in buttonState]: string } } = {
  primary: {
    enabled: `bg-purple-40 text-white hover:bg-purple-50 active:bg-purple-60`,
    disabled: `disabled:bg-gray-20 disabled:text-gray-40 disabled:hover:bg-gray-20 disabled:active:bg-gray-20`,
  },
  secondary: {
    enabled: `bg-green-40 text-black hover:bg-green-30 active:bg-green-50`,
    disabled: `disabled:bg-gray-20 disabled:text-gray-40 disabled:hover:bg-gray-20 disabled:active:bg-gray-20`,
  },
  ghost: {
    enabled: `border-[0.1rem] border-solid border-purple-50 bg-inherit text-purple-50 hover:bg-purple-10 active:bg-purple-20`,
    disabled: `disabled:border-gray-20 disabled:text-gray-40 disabled:hover:bg-inherit disabled:active:bg-inherit`,
  },
  text: {
    enabled: `bg-inherit text-purple-50 hover:bg-purple-10 active:bg-purple-20`,
    disabled: `disabled:text-gray-40 disabled:hover:bg-inherit disabled:active:bg-inherit`,
  },
  danger: {
    enabled: `bg-orange-30 text-white hover:bg-orange-40 active:bg-orange-50`,
    disabled: `disabled:bg-gray-20 disabled:text-gray-40 disabled:hover:bg-gray-20 disabled:active:bg-gray-20`,
  },
};

export interface ButtonProps
  extends Omit<React.ComponentPropsWithoutRef<'button'>, 'type' | 'style'> {
  children?: React.ReactNode;
  /** @default
   * // multiple of 2px
   * "px-16"
   */
  paddingX?: string;
  /** @default
   * // multiple of 2px
   * "px-12"
   */
  paddingY?: string;
  type?: buttonType;
  htmlType?: React.ComponentPropsWithoutRef<'button'>['type'];
  className?: string;
}

export default function Button({
  children,
  paddingX = 'px-16',
  paddingY = 'py-12',
  type = 'primary',
  htmlType = 'button',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={htmlType}
      className={`${paddingX} ${paddingY} font-14 rounded-[0.6rem]
        focus:outline-none focus-visible:ring focus-visible:ring-purple-20
        ${buttonConfig[type].enabled} ${buttonConfig[type].disabled} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
