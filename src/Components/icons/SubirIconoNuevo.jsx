
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path fill="#F2F2F2" d="M13.75 18.75h2.5v-7.5H20L15 5l-5 6.25h3.75v7.5Z" />
    <path
      fill="#F2F2F2"
      d="M25 22.5H5v-8.75H2.5v8.75C2.5 23.879 3.621 25 5 25h20c1.379 0 2.5-1.121 2.5-2.5v-8.75H25v8.75Z"
    />
  </svg>
)
export { SvgComponent as SubirIconoNuevo }
