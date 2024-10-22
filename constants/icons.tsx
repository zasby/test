import React, { FC } from 'react';

interface Props {
  size?: number;
  color?: string;
}

export const ChevronDownIcon: FC<Props> = ({ size = 10, color = 'currentColor'  }) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 10 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.5L5 5.5L9 1.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon: FC<Props> = ({ size = 16, color = 'currentColor'  }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 4L12 12" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

