import type { JSX } from "react/jsx-runtime";
function MobileMenuIconSvg(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      style={{
        fill: "#fff",
      }}
      {...props}
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    </svg>
  );
}
export default MobileMenuIconSvg;
