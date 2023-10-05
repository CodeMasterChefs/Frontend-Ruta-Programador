
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 5v14M5 12h14" />
  </svg>
)
export { SvgComponent as MoreIcon }
