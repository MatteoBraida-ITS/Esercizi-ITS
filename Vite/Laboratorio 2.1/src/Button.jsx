function Button({
  variante = "primario",
  dimensione = "md",
  icona = "",
  children,
  ...props
}) {
  return (
    <button
      className={`btn btn--${variante} btn--${dimensione} btn--${icona}`}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
