
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M23.75 13.75h-7.5v-7.5h-2.5v7.5h-7.5v2.5h7.5v7.5h2.5v-7.5h7.5v-2.5Z"
    />
  </svg>
)
export { SvgComponent as MoreIcon }
