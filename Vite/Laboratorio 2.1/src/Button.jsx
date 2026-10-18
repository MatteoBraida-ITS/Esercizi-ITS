import { useState } from "react";

function Button({
  variante = "primario",
  dimensione = "md",
  icona = "",
  stato = "normale",
  children,
  ...props
}) {
  const [statoAttuale, setStatoAttuale] = useState(stato);
  return (
    <button
      className={`btn btn--${variante} btn--${dimensione} btn--${icona} btn--${statoAttuale}`}
      {...props}
      onClick={() => {
        setStatoAttuale("caricamento");
      }}
    >
      {children}
    </button>
  );
}
export default Button;
