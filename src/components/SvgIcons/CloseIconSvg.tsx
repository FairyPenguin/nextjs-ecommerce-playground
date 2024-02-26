import type { JSX } from "react/jsx-runtime";
function CloseIconSvg(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#1C274C"
        strokeWidth={1.5}
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      />
      <path
        stroke="#1C274C"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m14.5 9.5-5 5m0-5 5 5"
      />
    </svg>
  );
}
export default CloseIconSvg;
