import * as React from "react";
export const InstaIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 48 48"
    className={`w-full ${className}`}
    {...rest}
  >
    <radialGradient
      id="a"
      cx={19.38}
      cy={42.035}
      r={44.899}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#fd5" />
      <stop offset={0.328} stopColor="#ff543f" />
      <stop offset={0.348} stopColor="#fc5245" />
      <stop offset={0.504} stopColor="#e64771" />
      <stop offset={0.643} stopColor="#d53e91" />
      <stop offset={0.761} stopColor="#cc39a4" />
      <stop offset={0.841} stopColor="#c837ab" />
    </radialGradient>
    <path
      fill="url(#a)"
      d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
    />
    <radialGradient
      id="b"
      cx={11.786}
      cy={5.54}
      r={29.813}
      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#4168c9" />
      <stop offset={0.999} stopColor="#4168c9" stopOpacity={0} />
    </radialGradient>
    <path
      fill="url(#b)"
      d="m34.017 41.99-20 .019c-4.4.004-8.003-3.592-8.008-7.992l-.019-20c-.004-4.4 3.592-8.003 7.992-8.008l20-.019c4.4-.004 8.003 3.592 8.008 7.992l.019 20c.005 4.401-3.592 8.004-7.992 8.008z"
    />
    <path
      fill="#fff"
      d="M24 31c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
    />
    <circle cx={31.5} cy={16.5} r={1.5} fill="#fff" />
    <path
      fill="#fff"
      d="M30 37H18c-3.859 0-7-3.14-7-7V18c0-3.86 3.141-7 7-7h12c3.859 0 7 3.14 7 7v12c0 3.86-3.141 7-7 7zM18 13c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V18c0-2.757-2.243-5-5-5H18z"
    />
  </svg>
);

export const GithubIcon = ({ className, color = "", ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 30 30"
    fill={color}
    className={`w-full  ${className}`}
    {...rest}
  >
    <path d="M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63a1.751 1.751 0 0 1-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A8.993 8.993 0 0 1 15.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15c0-6.627-5.373-12-12-12z" />
  </svg>
);

export const OpenLinkIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 24 24"
    className={`  ${className}`}
    {...rest}
  >
    <path d="M19.98 2.99a1 1 0 0 0-.11.01H15a1 1 0 1 0 0 2h2.586l-9.293 9.293a1 1 0 1 0 1.414 1.414L19 6.414V9a1 1 0 1 0 2 0V4.127a1 1 0 0 0-1.02-1.137zM5 3c-1.093 0-2 .907-2 2v14c0 1.093.907 2 2 2h14c1.093 0 2-.907 2-2v-6a1 1 0 1 0-2 0v6H5V5h6a1 1 0 1 0 0-2H5z" />
  </svg>
);

export const LinkedinIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 50 50"
    className={`w-full  ${className}`}
    {...rest}
  >
    <path
      fill="#0078d4"
      d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z"
    />
    <path
      d="M30 37V26.901c0-1.689-.819-2.698-2.192-2.698-.815 0-1.414.459-1.779 1.364-.017.064-.041.325-.031 1.114L26 37h-7V18h7v1.061C27.022 18.356 28.275 18 29.738 18c4.547 0 7.261 3.093 7.261 8.274L37 37h-7zm-19 0V18h3.457C12.454 18 11 16.528 11 14.499 11 12.472 12.478 11 14.514 11c2.012 0 3.445 1.431 3.486 3.479C18 16.523 16.521 18 14.485 18H18v19h-7z"
      opacity={0.05}
    />
    <path
      d="M30.5 36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198-1.295 0-1.935.912-2.243 1.677-.082.199-.071.989-.067 1.326L25.5 36.5h-6v-18h6v1.638c.795-.823 2.075-1.638 4.238-1.638 4.233 0 6.761 2.906 6.761 7.774L36.5 36.5h-6zm-19 0v-18h6v18h-6zm2.957-19c-1.713 0-2.957-1.262-2.957-3.001 0-1.738 1.268-2.999 3.014-2.999 1.724 0 2.951 1.229 2.986 2.989 0 1.749-1.268 3.011-3.015 3.011h-.028z"
      opacity={0.07}
    />
    <path
      fill="#fff"
      d="M12 19h5v17h-5V19zm2.485-2h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99-.144.35-.101 1.318-.101 1.807v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36z"
    />
  </svg>
);

export const LikeIcon = ({ className, fill = "none", ...rest }) => (
  <svg
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
    {...rest}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
        stroke="#000000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />{" "}
    </g>
  </svg>
);

export const YoutubeIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={`w-full  ${className}`}
  >
    <path
      fill="#FF3D00"
      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
    />
    <path fill="#FFF" d="M20 31L20 17 32 24z" />
  </svg>
);
