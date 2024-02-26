import type { JSX } from 'react/jsx-runtime'
function ErrorIconSvg(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      fill='#F87171'
      aria-hidden='true'
      viewBox='0 0 20 20'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22z'
        clipRule='evenodd'
      />
    </svg>
  )
}
export default ErrorIconSvg
