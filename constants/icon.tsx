import React, { FC } from 'react';

interface Props {
  size?: number;
  color?: string;
}

export const SideBarIcon: FC<Props> = ({ size = 28, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.1667 3.5H5.83333C4.54467 3.5 3.5 4.54467 3.5 5.83333V22.1667C3.5 23.4553 4.54467 24.5 5.83333 24.5H22.1667C23.4553 24.5 24.5 23.4553 24.5 22.1667V5.83333C24.5 4.54467 23.4553 3.5 22.1667 3.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 3.5V24.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DotIcon: FC<Props> = ({ size = 5, color = 'currentColor' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 5 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.571289"
      y="0.5"
      width="4"
      height="4"
      rx="2"
      fill={color}
    />
  </svg>
);

export const CheckIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 7.33366L8 9.33366L14.6667 2.66699"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H10.6667"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FullScreenIcon: FC<Props> = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 5.83333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H5.83333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.167 2.5H15.8337C16.2757 2.5 16.6996 2.67559 17.0122 2.98816C17.3247 3.30072 17.5003 3.72464 17.5003 4.16667V5.83333"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5003 14.167V15.8337C17.5003 16.2757 17.3247 16.6996 17.0122 17.0122C16.6996 17.3247 16.2757 17.5003 15.8337 17.5003H14.167"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83333 17.5003H4.16667C3.72464 17.5003 3.30072 17.3247 2.98816 17.0122C2.67559 16.6996 2.5 16.2757 2.5 15.8337V14.167"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.333 6.66699H6.66634C6.2061 6.66699 5.83301 7.04009 5.83301 7.50033V12.5003C5.83301 12.9606 6.2061 13.3337 6.66634 13.3337H13.333C13.7932 13.3337 14.1663 12.9606 14.1663 12.5003V7.50033C14.1663 7.04009 13.7932 6.66699 13.333 6.66699Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HelpIcon: FC<Props> = ({ size = 12, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 13 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_20223_13385)">
      <path
        d="M6.85742 11C9.61885 11 11.8574 8.76142 11.8574 6C11.8574 3.23858 9.61885 1 6.85742 1C4.096 1 1.85742 3.23858 1.85742 6C1.85742 8.76142 4.096 11 6.85742 11Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        d="M5.40234 4.50028C5.5199 4.16612 5.75192 3.88434 6.05732 3.70485C6.36272 3.52536 6.72179 3.45975 7.07093 3.51964C7.42007 3.57953 7.73675 3.76105 7.96488 4.03205C8.19301 4.30305 8.31787 4.64605 8.31734 5.00028C8.31734 6.00028 6.81734 6.50028 6.81734 6.50028"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round" />
      <path
        d="M6.85742 8.5H6.86242"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_20223_13385">
        <rect
          width={size}
          height={size}
          fill="white"
          transform="translate(0.857422)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const SumIcon: FC<Props> = ({ size = 25, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.5 7V4H6.5L12.5 12L6.5 20H18.5V17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PrintIcon: FC<Props> = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 9V2H18V9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 14H6V22H18V14Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowDownIcon: FC<Props> = ({ size = 12, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 6L8 10L12 6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export const UndoIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.666504 2.6665V6.6665H4.6665" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M2.33984 10.0001C2.7721 11.227 3.59139 12.2802 4.67427 13.001C5.75716 13.7218 7.04496 14.0712 8.34365 13.9964C9.64234 13.9217 10.8816 13.4269 11.8746 12.5866C12.8676 11.7464 13.5607 10.6061 13.8493 9.3377C14.138 8.06929 14.0066 6.74143 13.4749 5.5542C12.9433 4.36696 12.0402 3.38466 10.9017 2.7553C9.76327 2.12595 8.45111 1.88364 7.16296 2.06487C5.87481 2.24611 4.68045 2.84108 3.75984 3.76013L0.666504 6.6668"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const RedoIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.3335 2.6665V6.6665H11.3335" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M13.6598 10.0002C13.2264 11.2268 12.4061 12.2793 11.3225 12.9992C10.2389 13.719 8.95073 14.0672 7.65204 13.9912C6.35335 13.9153 5.11453 13.4192 4.12226 12.578C3.12999 11.7367 2.43804 10.5957 2.15067 9.32688C1.8633 8.0581 1.99608 6.7303 2.529 5.54355C3.06192 4.35681 3.96612 3.37541 5.10533 2.74726C6.24454 2.11912 7.55704 1.87824 8.84506 2.06093C10.1331 2.24363 11.3268 2.84 12.2464 3.76017L15.3331 6.66684"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BoldIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.33333 7.99984C10.0406 7.99984 10.7189 7.71889 11.219 7.21879C11.719 6.71869 12 6.04041 12 5.33317C12 4.62593 11.719 3.94765 11.219 3.44755C10.7189 2.94746 10.0406 2.6665 9.33333 2.6665H4V7.99984"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M10 13.3333C10.7072 13.3333 11.3855 13.0524 11.8856 12.5523C12.3857 12.0522 12.6667 11.3739 12.6667 10.6667C12.6667 9.95942 12.3857 9.28115 11.8856 8.78105C11.3855 8.28095 10.7072 8 10 8H4V13.3333H10Z"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ItalicIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.6665 2.6665H6.6665" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.3335 13.3335H3.3335" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 2.6665L6 13.3332" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DotsIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99992 8.66683C8.36811 8.66683 8.66659 8.36835 8.66659 8.00016C8.66659 7.63197 8.36811 7.3335 7.99992 7.3335C7.63173 7.3335 7.33325 7.63197 7.33325 8.00016C7.33325 8.36835 7.63173 8.66683 7.99992 8.66683Z"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.6667 8.66683C13.0349 8.66683 13.3333 8.36835 13.3333 8.00016C13.3333 7.63197 13.0349 7.3335 12.6667 7.3335C12.2985 7.3335 12 7.63197 12 8.00016C12 8.36835 12.2985 8.66683 12.6667 8.66683Z"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M3.33341 8.66683C3.7016 8.66683 4.00008 8.36835 4.00008 8.00016C4.00008 7.63197 3.7016 7.3335 3.33341 7.3335C2.96522 7.3335 2.66675 7.63197 2.66675 8.00016C2.66675 8.36835 2.96522 8.66683 3.33341 8.66683Z"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TextColorIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.66675 13.3335H13.3334" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 10.6665L8 2.6665L12 10.6665" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.33325 8H10.6666" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BackgroundColorIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_21772_29571)">
      <path
        d="M12.2466 1.75357L9.33325 4.6669L8.27325 3.6069C8.02344 3.35857 7.6855 3.21918 7.33325 3.21918C6.981 3.21918 6.64307 3.35857 6.39325 3.6069L5.33325 4.6669L11.3333 10.6669L12.3933 9.6069C12.6416 9.35709 12.781 9.01915 12.781 8.6669C12.781 8.31466 12.6416 7.97672 12.3933 7.7269L11.3333 6.6669L14.2466 3.75357C14.5118 3.48835 14.6608 3.12864 14.6608 2.75357C14.6608 2.3785 14.5118 2.01879 14.2466 1.75357C13.9814 1.48835 13.6217 1.33936 13.2466 1.33936C12.8715 1.33936 12.5118 1.48835 12.2466 1.75357Z"
        stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.99992 5.3335C4.66659 7.3335 3.33325 7.66683 1.33325 8.00016L6.66659 14.6668C7.99992 14.0002 10.6666 11.3335 10.6666 10.0002"
        stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.66667 11.6667L3 10" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_21772_29571">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const GoogleIcon: FC<Props> = ({ size = 29 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28.9847 14.7713C28.9847 13.5832 28.886 12.7162 28.6725 11.8171H14.7888V17.1796H22.9382C22.774 18.5123 21.8868 20.5193 19.9151 21.8679L19.8874 22.0474L24.2772 25.3706L24.5813 25.4002C27.3744 22.8794 28.9847 19.1705 28.9847 14.7713Z"
      fill="#4285F4" />
    <path
      d="M14.7888 28.9004C18.7814 28.9004 22.1331 27.6159 24.5813 25.4002L19.9151 21.8679C18.6664 22.7188 16.9905 23.3129 14.7888 23.3129C10.8784 23.3129 7.55952 20.7922 6.37642 17.3081L6.203 17.3225L1.63847 20.7745L1.57877 20.9367C4.01045 25.657 9.00529 28.9004 14.7888 28.9004Z"
      fill="#34A853" />
    <path
      d="M6.37642 17.3081C6.06425 16.409 5.88358 15.4456 5.88358 14.4502C5.88358 13.4547 6.06425 12.4914 6.36 11.5923L6.35173 11.4008L1.72999 7.89331L1.57877 7.9636C0.576565 9.92243 0.00149536 12.1221 0.00149536 14.4502C0.00149536 16.7783 0.576565 18.9778 1.57877 20.9367L6.37642 17.3081Z"
      fill="#FBBC05" />
    <path
      d="M14.7888 5.58737C17.5655 5.58737 19.4386 6.75943 20.5066 7.7389L24.6799 3.75705C22.1168 1.42897 18.7814 0 14.7888 0C9.00529 0 4.01045 3.24324 1.57877 7.9636L6.36 11.5923C7.55952 8.10816 10.8784 5.58737 14.7888 5.58737Z"
      fill="#EB4335" />
  </svg>
);

export const GoogleCalendarIcon: FC<Props> = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.2101 3.78906H3.78906V12.2101H12.2101V3.78906Z" fill="white" />
    <path d="M12.2101 15.9995L15.9996 12.21L14.1048 11.8867L12.2101 12.21L11.8643 13.9431L12.2101 15.9995Z"
          fill="#EA4335" />
    <path
      d="M0 12.21V14.7363C0 15.4342 0.56525 15.9995 1.26312 15.9995H3.7895L4.17856 14.1047L3.7895 12.21L1.72494 11.8867L0 12.21Z"
      fill="#188038" />
    <path
      d="M15.9996 3.7895V1.26313C15.9996 0.56525 15.4343 0 14.7364 0H12.2101C11.9796 0.93975 11.8643 1.63131 11.8643 2.07475C11.8643 2.51813 11.9796 3.08975 12.2101 3.7895C13.0482 4.0295 13.6798 4.1495 14.1048 4.1495C14.5299 4.1495 15.1614 4.0295 15.9996 3.7895Z"
      fill="#1967D2" />
    <path d="M16.0004 3.78906H12.2109V12.2101H16.0004V3.78906Z" fill="#FBBC04" />
    <path d="M12.2101 12.2109H3.78906V16.0004H12.2101V12.2109Z" fill="#34A853" />
    <path d="M12.2105 0H1.26319C0.56525 0 0 0.56525 0 1.26312V12.2105H3.7895V3.7895H12.2105V0Z" fill="#4285F4" />
    <path
      d="M5.51686 10.3219C5.20211 10.1093 4.98417 9.7988 4.86523 9.3882L5.5958 9.0872C5.66205 9.3398 5.77786 9.5356 5.94317 9.6746C6.10736 9.8135 6.30736 9.8819 6.54105 9.8819C6.77998 9.8819 6.98523 9.8093 7.1568 9.664C7.32842 9.5188 7.41473 9.3335 7.41473 9.1093C7.41473 8.87981 7.32417 8.69244 7.14317 8.54719C6.96211 8.40194 6.73473 8.32931 6.46317 8.32931H6.04105V7.60619H6.41998C6.65367 7.60619 6.85048 7.543 7.01048 7.41663C7.17048 7.29037 7.25048 7.11769 7.25048 6.89769C7.25048 6.70194 7.17892 6.54613 7.0358 6.42931C6.89267 6.31244 6.71155 6.2535 6.49155 6.2535C6.2768 6.2535 6.1063 6.31038 5.97998 6.42506C5.85374 6.54011 5.75883 6.68537 5.70417 6.84719L4.98105 6.54612C5.0768 6.27456 5.25261 6.03456 5.51048 5.82719C5.76842 5.61981 6.09786 5.51562 6.49786 5.51562C6.79367 5.51562 7.05998 5.5725 7.2958 5.68719C7.53155 5.80194 7.7168 5.96088 7.85048 6.163C7.98423 6.36613 8.05048 6.5935 8.05048 6.84613C8.05048 7.104 7.98842 7.32194 7.86423 7.50087C7.73998 7.67981 7.58736 7.81662 7.4063 7.91244V7.95556C7.64009 8.05196 7.84316 8.21028 7.99367 8.4135C8.1463 8.61875 8.22317 8.864 8.22317 9.1504C8.22317 9.4366 8.15048 9.6924 8.00523 9.9166C7.85998 10.1409 7.65898 10.3177 7.40417 10.4461C7.14842 10.5746 6.86105 10.6399 6.54211 10.6399C6.17261 10.6409 5.83161 10.5346 5.51686 10.3219ZM10.0041 6.69663L9.20205 7.27663L8.80098 6.66825L10.2399 5.63031H10.7915V10.5261H10.0041V6.69663Z"
      fill="#4285F4" />
  </svg>
);

export const SettingsIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
      <path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9333 10C12.8446 10.2011 12.8181 10.4241 12.8573 10.6404C12.8965 10.8567 12.9996 11.0562 13.1533 11.2133L13.1933 11.2533C13.3173 11.3772 13.4156 11.5242 13.4827 11.6861C13.5498 11.8479 13.5844 12.0214 13.5844 12.1967C13.5844 12.3719 13.5498 12.5454 13.4827 12.7073C13.4156 12.8691 13.3173 13.0162 13.1933 13.14C13.0695 13.264 12.9225 13.3623 12.7606 13.4294C12.5987 13.4965 12.4252 13.531 12.25 13.531C12.0748 13.531 11.9013 13.4965 11.7394 13.4294C11.5775 13.3623 11.4305 13.264 11.3067 13.14L11.2667 13.1C11.1095 12.9463 10.91 12.8432 10.6937 12.804C10.4775 12.7648 10.2544 12.7913 10.0533 12.88C9.85615 12.9645 9.68799 13.1048 9.56954 13.2837C9.45109 13.4626 9.38752 13.6721 9.38667 13.8867V14C9.38667 14.3536 9.24619 14.6928 8.99614 14.9428C8.74609 15.1929 8.40696 15.3333 8.05333 15.3333C7.69971 15.3333 7.36057 15.1929 7.11053 14.9428C6.86048 14.6928 6.72 14.3536 6.72 14V13.94C6.71484 13.7193 6.64341 13.5053 6.51501 13.3258C6.3866 13.1463 6.20716 13.0095 6 12.9333C5.79892 12.8446 5.57587 12.8181 5.35961 12.8573C5.14334 12.8965 4.94379 12.9996 4.78667 13.1533L4.74667 13.1933C4.62284 13.3173 4.47578 13.4156 4.31392 13.4827C4.15206 13.5498 3.97855 13.5844 3.80333 13.5844C3.62811 13.5844 3.45461 13.5498 3.29275 13.4827C3.13088 13.4156 2.98383 13.3173 2.86 13.1933C2.73603 13.0695 2.63769 12.9225 2.57059 12.7606C2.50349 12.5987 2.46895 12.4252 2.46895 12.25C2.46895 12.0748 2.50349 11.9013 2.57059 11.7394C2.63769 11.5775 2.73603 11.4305 2.86 11.3067L2.9 11.2667C3.05369 11.1095 3.15679 10.91 3.196 10.6937C3.23522 10.4775 3.20874 10.2544 3.12 10.0533C3.03549 9.85615 2.89517 9.68799 2.71631 9.56954C2.53745 9.45109 2.32786 9.38752 2.11333 9.38667H2C1.64638 9.38667 1.30724 9.24619 1.05719 8.99614C0.807143 8.74609 0.666667 8.40696 0.666667 8.05333C0.666667 7.69971 0.807143 7.36057 1.05719 7.11053C1.30724 6.86048 1.64638 6.72 2 6.72H2.06C2.28066 6.71484 2.49467 6.64341 2.6742 6.51501C2.85373 6.3866 2.99048 6.20716 3.06667 6C3.15541 5.79892 3.18188 5.57587 3.14267 5.35961C3.10346 5.14334 3.00036 4.94379 2.84667 4.78667L2.80667 4.74667C2.6827 4.62284 2.58435 4.47578 2.51725 4.31392C2.45016 4.15206 2.41562 3.97855 2.41562 3.80333C2.41562 3.62811 2.45016 3.45461 2.51725 3.29275C2.58435 3.13088 2.6827 2.98383 2.80667 2.86C2.9305 2.73603 3.07755 2.63769 3.23941 2.57059C3.40128 2.50349 3.57478 2.46895 3.75 2.46895C3.92522 2.46895 4.09872 2.50349 4.26059 2.57059C4.42245 2.63769 4.5695 2.73603 4.69333 2.86L4.73333 2.9C4.89045 3.05369 5.09001 3.15679 5.30627 3.196C5.52254 3.23522 5.74559 3.20874 5.94667 3.12H6C6.19718 3.03549 6.36535 2.89517 6.4838 2.71631C6.60225 2.53745 6.66581 2.32786 6.66667 2.11333V2C6.66667 1.64638 6.80714 1.30724 7.05719 1.05719C7.30724 0.807143 7.64638 0.666667 8 0.666667C8.35362 0.666667 8.69276 0.807143 8.94281 1.05719C9.19286 1.30724 9.33333 1.64638 9.33333 2V2.06C9.33419 2.27452 9.39775 2.48412 9.51621 2.66298C9.63466 2.84184 9.80282 2.98216 10 3.06667C10.2011 3.15541 10.4241 3.18188 10.6404 3.14267C10.8567 3.10346 11.0562 3.00036 11.2133 2.84667L11.2533 2.80667C11.3772 2.6827 11.5242 2.58435 11.6861 2.51725C11.8479 2.45016 12.0214 2.41562 12.1967 2.41562C12.3719 2.41562 12.5454 2.45016 12.7073 2.51725C12.8691 2.58435 13.0162 2.6827 13.14 2.80667C13.264 2.9305 13.3623 3.07755 13.4294 3.23941C13.4965 3.40128 13.531 3.57478 13.531 3.75C13.531 3.92522 13.4965 4.09872 13.4294 4.26059C13.3623 4.42245 13.264 4.5695 13.14 4.69333L13.1 4.73333C12.9463 4.89045 12.8432 5.09001 12.804 5.30627C12.7648 5.52254 12.7913 5.74559 12.88 5.94667V6C12.9645 6.19718 13.1048 6.36535 13.2837 6.4838C13.4626 6.60225 13.6721 6.66581 13.8867 6.66667H14C14.3536 6.66667 14.6928 6.80714 14.9428 7.05719C15.1929 7.30724 15.3333 7.64638 15.3333 8C15.3333 8.35362 15.1929 8.69276 14.9428 8.94281C14.6928 9.19286 14.3536 9.33333 14 9.33333H13.94C13.7255 9.33419 13.5159 9.39775 13.337 9.51621C13.1582 9.63466 13.0178 9.80282 12.9333 10V10Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
  </svg>
);
export const TableIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 2V14" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 6H14" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 10H14" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ImageIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M5.66675 6.6665C6.21903 6.6665 6.66675 6.21879 6.66675 5.6665C6.66675 5.11422 6.21903 4.6665 5.66675 4.6665C5.11446 4.6665 4.66675 5.11422 4.66675 5.6665C4.66675 6.21879 5.11446 6.6665 5.66675 6.6665Z"
      stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.9999 9.99984L10.6666 6.6665L3.33325 13.9998" stroke={color} strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
);

export const LinkIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_21772_19313)">
      <path
        d="M6.66675 8.66648C6.95305 9.04923 7.31832 9.36594 7.73778 9.59511C8.15724 9.82428 8.62109 9.96056 9.09785 9.9947C9.57461 10.0288 10.0531 9.96006 10.501 9.793C10.9488 9.62594 11.3555 9.36453 11.6934 9.02648L13.6934 7.02648C14.3006 6.39781 14.6366 5.5558 14.629 4.68181C14.6214 3.80782 14.2708 2.97178 13.6528 2.35375C13.0348 1.73573 12.1987 1.38516 11.3248 1.37757C10.4508 1.36997 9.60876 1.70595 8.98008 2.31315L7.83341 3.45315"
        stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.33322 7.33332C9.04692 6.95057 8.68165 6.63387 8.26219 6.40469C7.84273 6.17552 7.37888 6.03924 6.90212 6.0051C6.42536 5.97095 5.94683 6.03974 5.49899 6.2068C5.05115 6.37386 4.64448 6.63527 4.30656 6.97332L2.30656 8.97332C1.69936 9.60199 1.36338 10.444 1.37098 11.318C1.37857 12.192 1.72913 13.028 2.34716 13.646C2.96519 14.2641 3.80123 14.6146 4.67522 14.6222C5.54921 14.6298 6.39121 14.2938 7.01989 13.6867L8.15989 12.5467"
        stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_21772_19313">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);


export const SmileIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_21772_19322)">
      <path
        d="M7.99992 14.6668C11.6818 14.6668 14.6666 11.6821 14.6666 8.00016C14.6666 4.31826 11.6818 1.3335 7.99992 1.3335C4.31802 1.3335 1.33325 4.31826 1.33325 8.00016C1.33325 11.6821 4.31802 14.6668 7.99992 14.6668Z"
        stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.33325 9.3335C5.33325 9.3335 6.33325 10.6668 7.99992 10.6668C9.66659 10.6668 10.6666 9.3335 10.6666 9.3335"
        stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6H6.00667" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 6H10.0067" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_21772_19322">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const EmailIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_21772_19343)">
      <path
        d="M7.99992 10.6668C9.47268 10.6668 10.6666 9.47292 10.6666 8.00016C10.6666 6.5274 9.47268 5.3335 7.99992 5.3335C6.52716 5.3335 5.33325 6.5274 5.33325 8.00016C5.33325 9.47292 6.52716 10.6668 7.99992 10.6668Z"
        stroke={color} strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M10.6666 5.3335V8.66684C10.6666 9.19727 10.8773 9.70598 11.2524 10.081C11.6275 10.4561 12.1362 10.6668 12.6666 10.6668C13.197 10.6668 13.7057 10.4561 14.0808 10.081C14.4559 9.70598 14.6666 9.19727 14.6666 8.66684V8.00017C14.6666 6.49837 14.1595 5.04057 13.2275 3.86295C12.2955 2.68533 10.9932 1.85688 9.53161 1.51184C8.06999 1.1668 6.53468 1.32537 5.17444 1.96187C3.81419 2.59837 2.7087 3.6755 2.03708 5.01874C1.36545 6.36199 1.16704 7.89266 1.47399 9.36276C1.78094 10.8329 2.57527 12.1562 3.72828 13.1185C4.88128 14.0808 6.32542 14.6256 7.82671 14.6646C9.328 14.7036 10.7985 14.2346 11.9999 13.3335"
        stroke={color} strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_21772_19343">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);


export const CheckIcon2: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3334 4L6.00008 11.3333L2.66675 8"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 4L4 12" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 4L12 12" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const DownloadIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
      stroke="#5672FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665"
      stroke="#5672FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10V2"
      stroke="#5672FF"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ClockIcon: FC<Props> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.0003 18.3327C14.6027 18.3327 18.3337 14.6017 18.3337 9.99934C18.3337 5.39698 14.6027 1.66602 10.0003 1.66602C5.39795 1.66602 1.66699 5.39698 1.66699 9.99934C1.66699 14.6017 5.39795 18.3327 10.0003 18.3327Z"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <path
      d="M10.0003 5V10L6.66699 8.33333" stroke={color} strokeWidth="1.5" strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserIcon: FC<Props> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.6663 17.5V15.8333C16.6663 14.9493 16.3152 14.1014 15.69 13.4763C15.0649 12.8512 14.2171 12.5 13.333 12.5H6.66634C5.78229 12.5 4.93444 12.8512 4.30932 13.4763C3.6842 14.1014 3.33301 14.9493 3.33301 15.8333V17.5"
      stroke="#8E939D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M10.0003 9.16667C11.8413 9.16667 13.3337 7.67428 13.3337 5.83333C13.3337 3.99238 11.8413 2.5 10.0003 2.5C8.15938 2.5 6.66699 3.99238 6.66699 5.83333C6.66699 7.67428 8.15938 9.16667 10.0003 9.16667Z"
      stroke="#8E939D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ReminderIcon: FC<Props> = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 9.16667L17.5 5V15L2.5 11.6667V9.16667Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round" />
    <path
      d="M9.66677 13.9993C9.57922 14.3167 9.43002 14.6137 9.22769 14.8734C9.02535 15.1331 8.77385 15.3504 8.48754 15.5129C8.20122 15.6754 7.8857 15.7799 7.559 15.8205C7.23229 15.8611 6.90079 15.8369 6.58343 15.7493C6.26607 15.6618 5.96906 15.5126 5.70936 15.3103C5.44966 15.1079 5.23236 14.8564 5.06985 14.5701C4.90735 14.2838 4.80283 13.9683 4.76227 13.6416C4.7217 13.3149 4.74588 12.9834 4.83343 12.666"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AcceptedIcon: FC<Props> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.3332 9.23355V10.0002C18.3321 11.7972 17.7503 13.5458 16.6743 14.9851C15.5983 16.4244 14.0859 17.4773 12.3626 17.9868C10.6394 18.4963 8.79755 18.4351 7.1119 17.8124C5.42624 17.1896 3.98705 16.0386 3.00897 14.5311C2.03089 13.0236 1.56633 11.2403 1.68457 9.44714C1.80281 7.65402 2.49751 5.94715 3.66507 4.58111C4.83263 3.21506 6.41049 2.26303 8.16333 1.867C9.91617 1.47097 11.7501 1.65216 13.3915 2.38355"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.3333 3.33398L10 11.6757L7.5 9.17565" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
);

export const DeclinedIcon: FC<Props> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.99984 18.3327C14.6022 18.3327 18.3332 14.6017 18.3332 9.99935C18.3332 5.39698 14.6022 1.66602 9.99984 1.66602C5.39746 1.66602 1.6665 5.39698 1.6665 9.99935C1.6665 14.6017 5.39746 18.3327 9.99984 18.3327Z"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 7.5L7.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 7.5L12.5 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

export const TentativeIcon: FC<Props> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.99984 18.3327C14.6022 18.3327 18.3332 14.6017 18.3332 9.99935C18.3332 5.39698 14.6022 1.66602 9.99984 1.66602C5.39746 1.66602 1.6665 5.39698 1.6665 9.99935C1.6665 14.6017 5.39746 18.3327 9.99984 18.3327Z"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M7.5752 7.50047C7.77112 6.94353 8.15782 6.4739 8.66682 6.17475C9.17583 5.87561 9.77427 5.76626 10.3562 5.86607C10.9381 5.96588 11.4659 6.26841 11.8461 6.72008C12.2263 7.17175 12.4344 7.74341 12.4335 8.33381C12.4335 10.0005 9.93353 10.8338 9.93353 10.8338"
      stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 14.166H10.0083" stroke="#8E939D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FolderIcon : FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size + 1}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3335 13.8333C13.6871 13.8333 14.0263 13.6929 14.2763 13.4428C14.5264 13.1928 14.6668 12.8536 14.6668 12.5V5.83333C14.6668 5.47971 14.5264 5.14057 14.2763 4.89052C14.0263 4.64048 13.6871 4.5 13.3335 4.5H8.06683C7.84384 4.50219 7.62386 4.44841 7.42703 4.34359C7.2302 4.23877 7.0628 4.08625 6.94016 3.9L6.40016 3.1C6.27876 2.91565 6.11348 2.76432 5.91916 2.6596C5.72485 2.55488 5.50757 2.50004 5.28683 2.5H2.66683C2.31321 2.5 1.97407 2.64048 1.72402 2.89052C1.47397 3.14057 1.3335 3.47971 1.3335 3.83333V12.5C1.3335 12.8536 1.47397 13.1928 1.72402 13.4428C1.97407 13.6929 2.31321 13.8333 2.66683 13.8333H13.3335Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FolderOpenIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size + 1}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3335 13.8333C13.6871 13.8333 14.0263 13.6929 14.2763 13.4428C14.5264 13.1928 14.6668 12.8536 14.6668 12.5V5.83333C14.6668 5.47971 14.5264 5.14057 14.2763 4.89052C14.0263 4.64048 13.6871 4.5 13.3335 4.5H8.06683C7.84384 4.50219 7.62386 4.44841 7.42703 4.34359C7.2302 4.23877 7.0628 4.08625 6.94016 3.9L6.40016 3.1C6.27876 2.91565 6.11348 2.76432 5.91916 2.6596C5.72485 2.55488 5.50757 2.50004 5.28683 2.5H2.66683C2.31321 2.5 1.97407 2.64048 1.72402 2.89052C1.47397 3.14057 1.3335 3.47971 1.3335 3.83333V12.5C1.3335 12.8536 1.47397 13.1928 1.72402 13.4428C1.97407 13.6929 2.31321 13.8333 2.66683 13.8333H13.3335Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.3335 7.16699H14.6668"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TrashIcon: FC<Props> = ({ size = 24, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6H5H21"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 11V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 11V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const PlusIcon: FC<Props> = ({ size = 12, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2.91699V11.0837" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.91667 7H11.0833" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const LookIcon: FC<Props> = ({ size = 14, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0833 6.41699H2.91667C2.27233 6.41699 1.75 6.93933 1.75 7.58366V11.667C1.75 12.3113 2.27233 12.8337 2.91667 12.8337H11.0833C11.7277 12.8337 12.25 12.3113 12.25 11.667V7.58366C12.25 6.93933 11.7277 6.41699 11.0833 6.41699Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.08325 6.417V4.08367C4.08253 3.36036 4.35058 2.66259 4.83539 2.12581C5.32019 1.58902 5.98715 1.25153 6.7068 1.17884C7.42644 1.10614 8.14742 1.30344 8.72978 1.73243C9.31214 2.16142 9.71432 2.79149 9.85825 3.50033"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const EditIcon: FC<Props> = ({ size = 14, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 11.6665H12.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.625 2.04164C9.85706 1.80957 10.1718 1.6792 10.5 1.6792C10.6625 1.6792 10.8234 1.71121 10.9735 1.77339C11.1237 1.83558 11.2601 1.92673 11.375 2.04164C11.4899 2.15654 11.5811 2.29296 11.6432 2.44309C11.7054 2.59322 11.7374 2.75413 11.7374 2.91664C11.7374 3.07914 11.7054 3.24005 11.6432 3.39018C11.5811 3.54032 11.4899 3.67673 11.375 3.79164L4.08333 11.0833L1.75 11.6666L2.33333 9.3333L9.625 2.04164Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UsersIcon: FC<Props> = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_22640_79446)">
      <path
        d="M9.91665 12.25V11.0833C9.91665 10.4645 9.67081 9.871 9.23323 9.43342C8.79564 8.99583 8.20215 8.75 7.58331 8.75H2.91665C2.29781 8.75 1.70432 8.99583 1.26673 9.43342C0.829146 9.871 0.583313 10.4645 0.583313 11.0833V12.25"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M5.25002 6.41667C6.53869 6.41667 7.58335 5.372 7.58335 4.08333C7.58335 2.79467 6.53869 1.75 5.25002 1.75C3.96136 1.75 2.91669 2.79467 2.91669 4.08333C2.91669 5.372 3.96136 6.41667 5.25002 6.41667Z"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13.4167 12.2499V11.0832C13.4163 10.5662 13.2442 10.064 12.9275 9.65537C12.6107 9.24677 12.1673 8.95493 11.6667 8.82568"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M9.33331 1.82568C9.83522 1.95419 10.2801 2.24609 10.5978 2.65536C10.9155 3.06464 11.0879 3.568 11.0879 4.0861C11.0879 4.6042 10.9155 5.10756 10.5978 5.51684C10.2801 5.92611 9.83522 6.21801 9.33331 6.34652"
        stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_22640_79446">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowLeft: FC<Props> = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.25 10.5L5.75 7L9.25 3.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round" />
  </svg>
);

export const ArrowRight: FC<Props> = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.25 10.5L8.75 7L5.25 3.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HomeIcon: FC<Props> = ({ size = 14, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_22739_50403)">
      <path
        d="M13.7899 6.88969L7.75241 0.855313L7.34772 0.450625C7.25551 0.359026 7.13082 0.307617 7.00085 0.307617C6.87087 0.307617 6.74618 0.359026 6.65397 0.450625L0.211783 6.88969C0.117301 6.9838 0.0426296 7.09589 -0.00782254 7.21934C-0.0582747 7.34278 -0.0834854 7.47509 -0.0819665 7.60844C-0.0757165 8.15844 0.382096 8.5975 0.932096 8.5975H1.59616V13.6866H12.4055V8.5975H13.0837C13.3508 8.5975 13.6024 8.49281 13.7915 8.30375C13.8846 8.21096 13.9583 8.10062 14.0085 7.97912C14.0586 7.85762 14.0842 7.72738 14.0837 7.59594C14.0837 7.33031 13.979 7.07875 13.7899 6.88969ZM7.87585 12.5616H6.12585V9.37406H7.87585V12.5616ZM11.2805 7.4725V12.5616H8.87585V8.99906C8.87585 8.65375 8.59616 8.37406 8.25085 8.37406H5.75085C5.40553 8.37406 5.12585 8.65375 5.12585 8.99906V12.5616H2.72116V7.4725H1.22116L7.00241 1.69594L7.36335 2.05688L12.7821 7.4725H11.2805Z"
        fill={color}
      />
    </g>
    <defs>
      <clipPath id="clip0_22739_50403">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const PointIcon: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.00033 9.83366C8.73671 9.83366 9.33366 9.23671 9.33366 8.50033C9.33366 7.76395 8.73671 7.16699 8.00033 7.16699C7.26395 7.16699 6.66699 7.76395 6.66699 8.50033C6.66699 9.23671 7.26395 9.83366 8.00033 9.83366Z"
      stroke="#C9C9C9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

);

export const DocIcon: FC<Props> = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.6663 2.16675H4.99967C4.55765 2.16675 4.13372 2.34234 3.82116 2.6549C3.5086 2.96746 3.33301 3.39139 3.33301 3.83341V17.1667C3.33301 17.6088 3.5086 18.0327 3.82116 18.3453C4.13372 18.6578 4.55765 18.8334 4.99967 18.8334H14.9997C15.4417 18.8334 15.8656 18.6578 16.1782 18.3453C16.4907 18.0327 16.6663 17.6088 16.6663 17.1667V7.16675L11.6663 2.16675Z"
      stroke="#8E939D"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.667 2.16675V7.16675H16.667"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3337 11.3333H6.66699"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3337 14.6667H6.66699"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33366 8H7.50033H6.66699"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarIcon: FC<Props> = ({ size = 14, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
      <path
        d="M6.99935 1.66699L8.80185 5.31866L12.8327 5.90783L9.91602 8.74866L10.6043 12.762L6.99935 10.8662L3.39435 12.762L4.08268 8.74866L1.16602 5.90783L5.19685 5.31866L6.99935 1.66699Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
  </svg>
);

export const StarIconWithoutBackground: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00065 1.33301L10.0607 5.50634L14.6673 6.17968L11.334 9.42634L12.1207 14.013L8.00065 11.8463L3.88065 14.013L4.66732 9.42634L1.33398 6.17968L5.94065 5.50634L8.00065 1.33301Z"
      fill="white"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ListChecks: FC<Props> = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 11.3333L3.33333 12.6667L6 10" stroke="#8E939D" strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M2 4.66732L3.33333 6.00065L6 3.33398" stroke="#8E939D" strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M8.66699 4H14.0003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.66699 8H14.0003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.66699 12H14.0003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TagIcon: FC<Props> = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2H2V12L11.29 21.29C12.23 22.23 13.77 22.23 14.71 21.29L21.29 14.71C22.23 13.77 22.23 12.23 21.29 11.29L12 2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7H7.01"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round" />
  </svg>
);

export const CalendarTime: FC<Props> = ({ size = 20, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.35065 17.8286H3.0921C2.60355 17.8286 2.135 17.6346 1.78954 17.2891C1.44408 16.9436 1.25 16.4751 1.25 15.9865V4.9339C1.25 4.44534 1.44408 3.9768 1.78954 3.63134C2.135 3.28588 2.60355 3.0918 3.0921 3.0918H14.1447C14.6333 3.0918 15.1018 3.28588 15.4473 3.63134C15.7928 3.9768 15.9868 4.44534 15.9868 4.9339V8.61811"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.066 18.7493C17.1008 18.7493 18.7503 17.0998 18.7503 15.0651C18.7503 13.0303 17.1008 11.3809 15.066 11.3809C13.0313 11.3809 11.3818 13.0303 11.3818 15.0651C11.3818 17.0998 13.0313 18.7493 15.066 18.7493Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.0658 13.6805V15.0658L15.9868 15.9868M12.3026 1.25V4.93421V1.25ZM4.93421 1.25V4.93421V1.25ZM1.25 8.61842H15.9868H1.25Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

)