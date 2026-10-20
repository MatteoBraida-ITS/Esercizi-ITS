import { useState } from "react";
import FaqItem from "./FaqItem";

const faq = [
  {
    id: 1,
    domanda: "Quanto costa la spedizione?",
    risposta: "È gratuita sopra i 50€, altrimenti 4,90€",
  },
  {
    id: 2,
    domanda: "Posso fare un reso?",
    risposta: "Si è possibile fare richiesta di reso.",
  },
  {
    id: 3,
    domanda: "Quanto ci mette ad arrivare?",
    risposta: "Consegna entro 4 giorni lavorativi.",
  },
  {
    id: 4,
    domanda: "Come posso pagare?",
    risposta: "Tramite bonifico bancario o Paypal",
  },
];

function FaqList() {
  const [itemId, setItemId] = useState(0);
  const faqElaborate = faq.map((singolaFaq) => {
    return (
      <FaqItem
        key={singolaFaq.id}
        onFaqItemClick={() => {
          setItemId(itemId === singolaFaq.id ? 0 : singolaFaq.id);
        }}
        isAperto={singolaFaq.id === itemId ? true : false}
        domanda={singolaFaq.domanda}
        risposta={singolaFaq.risposta}
      ></FaqItem>
    );
  });
  return (
    <div style={{ display: "flex", gap: 15, flexDirection: "column" }}>
      {faqElaborate}
    </div>
  );
}
export default FaqList;
