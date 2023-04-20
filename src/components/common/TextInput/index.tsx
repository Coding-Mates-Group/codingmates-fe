import InputClear from '/public/icons/input_clear.svg';

export interface TextInputProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'style'> {
  /** @default
   * "w-[30rem]"
   */
  width?: string;
  className?: string;
  onClear?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function TextInput({
  width = 'w-[30rem]',
  className,
  onClear,
  ...rest
}: TextInputProps) {
  return (
    <div className="relative w-fit">
      <input
        type="text"
        className={`peer h-48 ${width} font-14 rounded-[0.6rem] bg-gray-10 pl-16 pr-44 text-gray-90
          placeholder:text-gray-40 focus:border-[0.1rem] focus:border-solid focus:border-purple-50
          ${className}`}
        {...rest}
      />
      <div
        className={`absolute top-48 h-[0.1rem] ${width} bg-gray-40 peer-hover:bg-purple-50 peer-focus:invisible`}
      ></div>
      <button
        type="button"
        aria-label="clear button"
        className="absolute top-24 right-20 -translate-y-1/2 peer-placeholder-shown:invisible"
        onClick={onClear}
      >
        <InputClear />
      </button>
    </div>
  );
}
