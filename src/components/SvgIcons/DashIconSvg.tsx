import type { JSX } from "react/jsx-runtime";


interface SvgIconProps {
  activecolor: string
}

function DashIconSvg(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement> & SvgIconProps
) {


  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke={props.activecolor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12h18"
      />
    </svg>
  )

}
export default DashIconSvg;
