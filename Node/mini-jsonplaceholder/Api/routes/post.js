// routes/post.js — Route per la risorsa Post
//
// Endpoint completo: /api/post (il prefisso è montato in server.js)
//
// ⭐ Tutte le route sono da implementare.
// Seguite lo stesso pattern dell'esempio in utenti.js.

import { Router } from "express";
import {
  post,
  prossimoId,
  trovaPerId,
  trovaIndicePerId,
  utenti,
} from "../data/database.js";

const router = Router();

// ============================================================
// ⭐ TODO — GET /api/post — Lista tutti i post
// ============================================================
// Deve supportare un filtro opzionale: /api/post?userId=2
// Se userId è presente nella query string, restituisce solo i post di quell'utente.
// Se non è presente, restituisce tutti i post.
//
// Suggerimento: guardate come è fatto il GET lista in utenti.js (filtro per città)
// e adattatelo per filtrare per userId.
//
// Attenzione: req.query.userId è una STRINGA ("2"), ma post.userId è un NUMERO (2).
// Dovete convertire con parseInt() prima di confrontare.
//
// Esempio:
//   GET /api/post         → tutti gli 8 post
//   GET /api/post?userId=1 → solo i 2 post di Mario (userId 1)

router.get("/", (req, res) => {
  const { userId } = req.query;

  const idPost = parseInt(userId);

  if (userId) {
    const filtrati = post.filter((p) => p.userId === idPost);
    return res.json(filtrati);
  }

  res.json(post);
});

// ============================================================
// ⭐ TODO — GET /api/post/:id — Singolo post
// ============================================================
// Seguite lo stesso pattern del GET singolo in utenti.js.

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const postUtente = trovaPerId(post, id);

  if (!postUtente) {
    return res.status(404).json({
      errore: `Post con id ${id} non trovato`,
    });
  }

  res.json(postUtente);
});

// ============================================================
// ⭐ TODO — POST /api/post — Crea un nuovo post
// ============================================================
// Campi obbligatori nel body: "userId", "titolo", "corpo"
//
// Cosa deve fare:
//   1. Leggere userId, titolo, corpo da req.body
//   2. Validare che TUTTI siano presenti → se no, 400
//   3. Creare il nuovo post con prossimoId("post")
//   4. Aggiungerlo all'array con .push()
//   5. Rispondere con 201 e il nuovo post
//
// Esempio di richiesta:
//   POST http://localhost:3000/api/post
//   Body: { "userId": 1, "titolo": "Nuovo post", "corpo": "Contenuto del post" }
//
// Esempio di risposta (201):
//   { "id": 9, "userId": 1, "titolo": "Nuovo post", "corpo": "Contenuto del post" }

router.post("/", (req, res) => {
  const { userId, titolo, corpo } = req.body;

  if (!userId || !titolo || !corpo) {
    return res.status(400).json({
      errore: `userId, titolo e corpo sono OBBLIGATORI!`,
    });
  }

  const id = prossimoId("post");

  const nuovoPost = {
    id: id,
    userId: userId,
    titolo: titolo,
    corpo: corpo,
  };

  post.push(nuovoPost);
  res.status(201).json(nuovoPost);
});

// ============================================================
// ⭐ TODO — PUT /api/post/:id — Sostituisce un post
// ============================================================
// Campi obbligatori nel body: "userId", "titolo", "corpo"
// Sostituisce TUTTA la risorsa.
//
// Stessa logica del PUT in utenti.js, ma con campi diversi.

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const indice = trovaIndicePerId(post, id);

  if (indice === -1) {
    return res.status(404).json({
      errore: `indice utente non esiste`,
    });
  }

  const { userId, titolo, corpo } = req.body;

  if (!userId || !titolo || !corpo) {
    return res.status(400).json({
      errore: `userId, titolo e corpo sono obbligatori`,
    });
  }

  post[indice] = { id, userId, titolo, corpo };

  res.status(200).json(post[indice]);
});

// ============================================================
// ⭐ TODO — PATCH /api/post/:id — Aggiorna parzialmente
// ============================================================
// Accetta uno o più campi: "userId", "titolo", "corpo"
// Aggiorna solo quelli presenti nel body.
//
// Stessa logica del PATCH in utenti.js, ma con campi diversi.

router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const postAggiornato = trovaPerId(post, id);

  if (!postAggiornato) {
    return res.status(404).json({
      errore: `Post non trovato`,
    });
  }

  const { userId, titolo, corpo } = req.body;

  if (userId !== undefined) postAggiornato.userId = userId;
  if (titolo !== undefined) postAggiornato.titolo = titolo;
  if (corpo !== undefined) postAggiornato.corpo = corpo;

  res.status(200).json(postAggiornato);
});

// ============================================================
// ⭐ TODO — DELETE /api/post/:id — Elimina un post
// ============================================================
// Stessa logica del DELETE in utenti.js.

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const indice = trovaIndicePerId(post, id);

  if (indice === -1) {
    return res.status(404).json({
      errore: `Indice post non esiste`,
    });
  }

  const [rimosso] = post.splice(indice, 1);

  res.status(200).json({
    messaggio: `Post eliminato`,
    post: rimosso,
  });
});

export default router;
