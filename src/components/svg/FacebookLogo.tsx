import React from "react";

interface Props {
  width: string;
  height: string;
}

const FacebookLogo = (props: Props) => {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 9C18.5 4.02891 14.4711 0 9.5 0C4.52891 0 0.5 4.02891 0.5 9C0.5 13.493 3.79062 17.216 8.09375 17.891V11.6016H5.80859V9H8.09375V7.01719C8.09375 4.76191 9.43672 3.51562 11.4934 3.51562C12.4777 3.51562 13.5078 3.69141 13.5078 3.69141V5.90625H12.3723C11.2543 5.90625 10.9062 6.60059 10.9062 7.3125V9H13.4023L13.0033 11.6016H10.9062V17.891C15.2094 17.216 18.5 13.493 18.5 9Z"
        fill="#F4F4F4"
      />
    </svg>
  );
};

export default FacebookLogo;
