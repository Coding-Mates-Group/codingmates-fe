import { useState } from 'react';
import LightMode from '/public/icons/light_mode.svg';
import DarkMode from '/public/icons/dark_mode.svg';

const toggleConfig = {
  container: `relative flex h-24 w-48 cursor-pointer appearance-none items-center rounded-[2rem] border-[0.2rem]
              border-solid border-purple-40 ring-purple-20`,
  slider: {
    common: `before:ease before:absolute before:h-16 before:w-16 before:rounded-full before:bg-purple-40
             before:transition-[left] before:delay-[0] focus-visible:ring-2`,
  },
};

export default function Toggle() {
  const [dark, setDark] = useState(false);
  return (
    <div className="relative">
      {dark || (
        <label htmlFor="toggle" className="cursor-pointer">
          <LightMode role="img" aria-label="light mode icon" className="absolute -left-30" />
        </label>
      )}
      <input
        type="checkbox"
        id="toggle"
        className={`${toggleConfig.container} ${toggleConfig.slider.common} ${
          dark ? 'before:left-26' : 'before:left-2'
        }
      }`}
        onClick={() => setDark((prev) => !prev)}
      />
      {dark && (
        <label htmlFor="toggle" className="cursor-pointer">
          <DarkMode role="img" aria-label="dark mode icon" className="absolute -right-30 top-0" />
        </label>
      )}
    </div>
  );
}
