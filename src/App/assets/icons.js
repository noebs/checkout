import React from "react";

export const lock = (
  <svg className="w-6" viewBox="0 0 16 16" fill="#a0aec0">
    <path
      width="20"
      fillRule="evenodd"
      d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"
    />
    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
  </svg>
);

export const user = (
  <svg className="w-6" viewBox="0 0 16 16" fill="#a0aec0">
    <path
      fillRule="evenodd"
      d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
    />
  </svg>
);

export const calender = (
  <svg className="w-6" viewBox="0 0 16 16" fill="#a0aec0">
    <path
      fillRule="evenodd"
      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
    />
  </svg>
);

export const alert = (
  <svg viewBox="0 0 16 16" className="w-10" strokeWidth="2" fill="white">
    <path
      fillRule="evenodd"
      d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1L1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"
    />
    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
  </svg>
);

export const loadingState = (large = false) => {
  return (
    <svg
      className={`animate-spin -ml-1 mr-3 ${
        large ? "h-10 w-10" : "h-5 w-5"
      }  text-white`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export const languageAr = (
  <svg className="w-10" viewBox="0 0 512 512">
    <g transform="translate(-250 -47)">
      <g transform="translate(250 47)">
        <path
          d="M467,91H237.25L202.722,506.8c6.068,3.034,12.594,5.2,19.763,5.2H467a45.05,45.05,0,0,0,45-45V136a45.05,45.05,0,0,0-45-45Z"
          fill="#dae2f2"
        />
        <path
          d="M169.867,407.86l7.969,64.721c1.6,12.854,10.3,26.922,24.886,34.215,29.167-31.374,9.614-11.341,78.829-85.8Z"
          fill="#816d54"
        />
        <path
          d="M281.551,421c4.907-5.608,9.211-9.373,8.053-17.1L244.164,39.419A45.06,45.06,0,0,0,199.516,0H45A45.05,45.05,0,0,0,0,45V376a45.05,45.05,0,0,0,45,45Z"
          fill="#eeac5a"
        />
        <path
          d="M165.707,118.056A15.01,15.01,0,0,0,151,106H121a15.01,15.01,0,0,0-14.707,12.056l-30,150a15,15,0,1,0,29.415,5.888L115.294,226h41.411l9.587,47.944a15,15,0,1,0,29.415-5.888ZM121.293,196l12-60h5.42l12,60Z"
          fill="#e6eeff"
        />
      </g>
      <g transform="translate(455.576 257)">
        <path
          d="M200.424,149.934a46.35,46.35,0,0,1-.281,5.735,14.226,14.226,0,0,1-.883,3.69,4.739,4.739,0,0,1-1.484,2.086,3.092,3.092,0,0,1-1.925.642H119.568a9.593,9.593,0,0,1-6.5-2.286q-2.647-2.286-2.647-7.46V19.747q0-5.174,2.647-7.46a9.594,9.594,0,0,1,6.5-2.286H195.49a3.194,3.194,0,0,1,1.885.6,4.93,4.93,0,0,1,1.4,2.045,18.077,18.077,0,0,1,.882,3.77,47.6,47.6,0,0,1,.281,5.856,45.137,45.137,0,0,1-.281,5.615,14.235,14.235,0,0,1-.882,3.69,5.4,5.4,0,0,1-1.4,2.086,2.981,2.981,0,0,1-1.885.642H141.226V71.364h45.722a3.013,3.013,0,0,1,1.925.642,4.694,4.694,0,0,1,1.484,2.005,13.092,13.092,0,0,1,.882,3.65,43.683,43.683,0,0,1,.281,5.535,44.056,44.056,0,0,1-.281,5.655,13.2,13.2,0,0,1-.882,3.569,3.982,3.982,0,0,1-1.484,1.925,3.23,3.23,0,0,1-1.925.6H141.226v42.834h54.626a3.013,3.013,0,0,1,1.925.642,4.742,4.742,0,0,1,1.484,2.086,14.218,14.218,0,0,1,.883,3.69,46.409,46.409,0,0,1,.28,5.735Z"
          transform="translate(0 9.823)"
          fill="#53565c"
          fillRule="evenodd"
        />
        <g transform="translate(100.424)">
          <path
            d="M209.464,155.682a19.2,19.2,0,0,0-1.254-5.115,8.792,8.792,0,0,0-2.8-3.8,6.987,6.987,0,0,0-4.315-1.445H142.486V140.3a3.516,3.516,0,1,0-7.032,0v8.538a3.516,3.516,0,0,0,3.516,3.515h62.174l.064.048a2.317,2.317,0,0,1,.521.889l.021.048a12.637,12.637,0,0,1,.741,3.242,63.672,63.672,0,0,1,0,12.14,12.707,12.707,0,0,1-.742,3.253l-.021.049a2.322,2.322,0,0,1-.521.889l-.061.046a.375.375,0,0,1-.049,0H114.34a7.448,7.448,0,0,1-5.092-1.745c-1.19-1.027-1.793-2.987-1.793-5.824V14.6c0-2.837.6-4.8,1.793-5.824a7.448,7.448,0,0,1,5.092-1.745h86.382a3.445,3.445,0,0,1,.428.769,17.3,17.3,0,0,1,.793,3.459,50.4,50.4,0,0,1,.291,6.213,47.518,47.518,0,0,1-.29,5.927,12.7,12.7,0,0,1-.741,3.254l-.021.049a3.671,3.671,0,0,1-.526.939H138.971a3.516,3.516,0,0,0-3.516,3.516V73.305a3.516,3.516,0,0,0,3.516,3.516h52.047l.064.048a2.228,2.228,0,0,1,.542.847c.007.018.016.036.024.054a11.6,11.6,0,0,1,.719,3.154,46.281,46.281,0,0,1,.289,5.836,46.873,46.873,0,0,1-.288,5.96,11.529,11.529,0,0,1-.72,3.076l-.024.054a2.715,2.715,0,0,1-.342.619c-.056.035-.111.073-.165.111-.022.016-.041.029-.146.029h-52a3.516,3.516,0,0,0-3.516,3.516v8.538a3.516,3.516,0,1,0,7.032,0v-5.022H190.97a7.14,7.14,0,0,0,4.123-1.262,7.915,7.915,0,0,0,2.967-3.7,18.043,18.043,0,0,0,1.275-5.017,52.624,52.624,0,0,0,.351-6.9,52.99,52.99,0,0,0-.348-6.742,18.031,18.031,0,0,0-1.278-5.131,8.775,8.775,0,0,0-2.775-3.654,6.891,6.891,0,0,0-4.315-1.445H142.487V34.673h58.2A6.914,6.914,0,0,0,205,33.192l.1-.08a9.582,9.582,0,0,0,2.561-3.679,19.211,19.211,0,0,0,1.255-5.127,54.036,54.036,0,0,0,.348-6.833,56.808,56.808,0,0,0-.349-7.118,24.224,24.224,0,0,0-1.181-5.02q-.03-.083-.063-.162a9,9,0,0,0-2.7-3.76l-.1-.075A7.161,7.161,0,0,0,200.687,0H114.34a14.379,14.379,0,0,0-9.688,3.455c-2.8,2.423-4.228,6.173-4.228,11.145V165.4c0,4.972,1.423,8.722,4.228,11.145A14.379,14.379,0,0,0,114.34,180H201.1a6.984,6.984,0,0,0,4.315-1.445,8.793,8.793,0,0,0,2.8-3.8,19.221,19.221,0,0,0,1.255-5.125,70.041,70.041,0,0,0,0-13.951Z"
            transform="translate(-100.424)"
            fill="none"
          />
          <path
            d="M210.069,344.088h-.007a10,10,0,1,0,.005,0Z"
            transform="translate(-169.475 -232.189)"
            fill="none"
          />
        </g>
      </g>
    </g>
  </svg>
);
