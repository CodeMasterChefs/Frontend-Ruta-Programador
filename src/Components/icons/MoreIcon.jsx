const SvgComponent = (props) => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      className="icon icon-tabler icon-tabler-plus"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M12 5v14M5 12h14" />
    </svg>
  </div>
);

export { SvgComponent as MoreIcon };

