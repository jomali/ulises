const Emphasis = ({ children, ...otherProps }) => (
  <span style={{ fontStyle: "italic" }} {...otherProps}>
    {children}
  </span>
);

export default Emphasis;
