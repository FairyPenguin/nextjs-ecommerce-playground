import type { JSX } from "react/jsx-runtime";
function MinusIconSvg(
    props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={29}
            height={29}
            {...props}
        >
            <path
                fill="#1C274C"
                fillRule="evenodd"
                d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22Zm3.75-10a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h6a.75.75 0 0 1 .75.75Z"
                clipRule="evenodd"
            />
        </svg>
    );
}
export default MinusIconSvg;
