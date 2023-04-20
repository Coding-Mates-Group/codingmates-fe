import Image, { StaticImageData } from 'next/image';

const AvatarConfig = {
  small: `h-28 w-28`,
  medium: `h-36 w-36`,
  large: `h-[12rem] w-[12rem]`,
};

export interface AvatarProps {
  size: 'small' | 'medium' | 'large';
  src: string | StaticImageData;
  className?: string;
}

export default function Avatar({ size, src, className = '' }: AvatarProps) {
  return (
    <div className={`${AvatarConfig[size]} overflow-hidden rounded-full ${className}`}>
      <Image
        src={src}
        alt="user avatar"
        width="0"
        height="0"
        className="block h-full w-full object-cover"
      />
    </div>
  );
}
