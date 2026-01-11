import React from 'react';
import NightmodeButton from './ui/NightmodeButton';

const TitleBar = () => {
  return (
    <div className="flex items-center justify-between bg-[#3498db] p-4 flex-1">
      <div className="flex items-center space-x-4">
        {/* Logo SVG */}
        <svg
          width="123"
          height="47"
          viewBox="0 0 123 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="123" height="47" fill="#3498db" />
          <g filter="url(#filter0_d_0_1)">
            <path
              d="M27.0457 27.1766C39.8468 52.017 67.4184 -0.728814 92.3375 6.00221"
              stroke="#0836C1"
              strokeWidth="10"
            />
          </g>
          <g filter="url(#filter1_d_0_1)">
            <path
              d="M95.9779 8.40495C95.9779 12.8944 94.9058 54.4136 59.5274 20.0046C24.149 -14.4044 34.1982 37.0888 18.1996 28.7058C13.0065 26.4355 10.5694 23.9759 10 23.0299"
              stroke="#0836C1"
              strokeWidth="10"
            />
          </g>
          <g filter="url(#filter2_dd_0_1)">
            <path
              d="M109.433 14.9104C103.015 9.71603 95.1697 6.60698 91.9332 5.89697"
              stroke="#0836C1"
              strokeWidth="9.59"
            />
          </g>
          <path
            d="M0.566783 9.31912L15.8754 20.1408L2.44042 27.9725L0.566783 9.31912Z"
            fill="url(#paint0_linear_0_1)"
          />
          <path
            d="M122.602 25.4488L104.31 21.346L113.7 8.95018L122.602 25.4488Z"
            fill="url(#paint1_linear_0_1)"
          />
          <defs>
            <filter
              id="filter0_d_0_1"
              x="18.6011"
              y="0.401184"
              width="79.0403"
              height="46.473"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_0_1"
              x="1.71619"
              y="3.02139"
              width="103.262"
              height="43.5173"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_dd_0_1"
              x="82.6738"
              y="1.05853"
              width="37.746"
              height="41.8597"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology radius="4" operator="erode" in="SourceAlpha" result="effect1_dropShadow_0_1" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.05 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology radius="8" operator="erode" in="SourceAlpha" result="effect2_dropShadow_0_1" />
              <feOffset dy="16" />
              <feGaussianBlur stdDeviation="8" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_0_1"
                result="effect2_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_0_1"
              x1="9.15789"
              y1="24.0567"
              x2="0.566783"
              y2="9.31912"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0836C1" />
              <stop offset="1" stopColor="#E42BBB" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="109.005"
              y1="15.1481"
              x2="122.602"
              y2="25.4488"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0836C1" />
              <stop offset="1" stopColor="#E42BBB" />
            </linearGradient>
          </defs>
        </svg>
        {/* Title */}
        <h1 className="text-xl font-bold" style = {{ color: 'white', fontSize: '48px' }}>Dialect</h1>
      </div>
      {/* Nightmode Button */}
      <NightmodeButton />
    </div>
  );
};

export default TitleBar;
