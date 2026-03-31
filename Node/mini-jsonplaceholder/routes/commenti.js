// routes/commenti.js — Route per la risorsa Commenti
//
// Endpoint completo: /api/commenti (il prefisso è montato in server.js)
//
// ⭐ Tutte le route sono da implementare.
// Seguite lo stesso pattern dell'esempio in utenti.js e di quello che avete
// già fatto in post.js.
//
// A questo punto dovreste aver preso il ritmo! 💪

import { Router } from "express";
import {
  commenti,
  prossimoId,
  trovaPerId,
  trovaIndicePerId,
  post,
} from "../data/database.js";

const router = Router();

// ============================================================
// ⭐ TODO — GET /api/commenti — Lista tutti i commenti
// ============================================================
// Deve supportare un filtro opzionale: /api/commenti?postId=4
// Se postId è presente, restituisce solo i commenti di quel post.
// Se non è presente, restituisce tutti i commenti.
//
// Stessa logica del filtro userId nei post.

router.get("/", (req, res) => {
  const { postId } = req.query;

  const idCommento = parseInt(postId);

  if (postId) {
    const filtrati = commenti.filter((c) => c.postId === idCommento);
    return res.json(filtrati);
  }

  res.json(commenti);
});

// ============================================================
// ⭐ TODO — GET /api/commenti/:id — Singolo commento
// ============================================================

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const commentoUtente = trovaPerId(commenti, id);

  if (!commentoUtente) {
    return res.status(404).json({
      errore: `Commento con id ${id} non trovato`,
    });
  }

  res.json(commentoUtente);
});

// ============================================================
// ⭐ TODO — POST /api/commenti — Crea un nuovo commento
// ============================================================
// Campi obbligatori nel body: "postId", "nome", "email", "corpo"
//
// Esempio di richiesta:
//   POST http://localhost:3000/api/commenti
//   Body: {
//       "postId": 2,
//       "nome": "Bowser Neri",
//       "email": "bowser@email.com",
//       "corpo": "Anche io voglio imparare Node.js!"
//   }

router.post("/", (req, res) => {
  const { postId, nome, email, corpo } = req.body;

  if (!postId || !nome || !email || !corpo) {
    return res.status(400).json({
      errore: `postId, nome, email e corpo sono OBBLIGATORI!`,
    });
  }

  const id = prossimoId("commenti");

  const nuovoCommento = {
    id: id,
    postId: postId,
    nome: nome,
    email: email,
    corpo: corpo,
  };

  commenti.push(nuovoCommento);
  res.status(201).json(nuovoCommento);
});

// ============================================================
// ⭐ TODO — PUT /api/commenti/:id — Sostituisce un commento
// ============================================================
// Campi obbligatori nel body: "postId", "nome", "email", "corpo"

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const indice = trovaIndicePerId(commenti, id);

  if (indice === -1) {
    return res.status(404).json({
      errore: `indice utente non esiste`,
    });
  }

  const { postId, nome, email, corpo } = req.body;

  if (!postId || !nome || !email || !corpo) {
    return res.status(400).json({
      errore: `postId, nome, email e corpo sono OBBLIGATORI!`,
    });
  }

  commenti[indice] = { id, postId, nome, email, corpo };

  res.status(200).json(commenti[indice]);
});

// ============================================================
// ⭐ TODO — PATCH /api/commenti/:id — Aggiorna parzialmente
// ============================================================
// Accetta uno o più campi: "postId", "nome", "email", "corpo"

router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const commentoAggiornato = trovaPerId(commenti, id);

  if (!commentoAggiornato) {
    return res.status(404).json({
      errore: `Commento non trovato`,
    });
  }

  const { postId, nome, email, corpo } = req.body;

  if (postId !== undefined) commentoAggiornato.postId = postId;
  if (nome !== undefined) commentoAggiornato.nome = nome;
  if (email !== undefined) commentoAggiornato.email = email;
  if (corpo !== undefined) commentoAggiornato.corpo = corpo;

  res.status(200).json(commentoAggiornato);
});

// ============================================================
// ⭐ TODO — DELETE /api/commenti/:id — Elimina un commento
// ============================================================

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const indice = trovaIndicePerId(commenti, id);

  if (indice === -1) {
    return res.status(404).json({
      errore: `Indice commento non esiste`,
    });
  }

  const [rimosso] = commenti.splice(indice, 1);

  res.status(200).json({
    messaggio: `Commento eliminato`,
    commento: rimosso,
  });
});

export default router;
