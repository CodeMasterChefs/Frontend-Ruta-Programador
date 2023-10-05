
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="white"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icon-tabler-help-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0M12 16v.01" />
    <path d="M12 13a2 2 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
)
export { SvgComponent as HelpIcon }
