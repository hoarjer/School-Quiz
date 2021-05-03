import { createStore } from "vuex";

export default createStore({
  state: {
    quiz:  [
        {
          question: "Quelle est la 5ème lettre de l'alphabet",
          answers: [
            { answer: "b" },
            { answer: "e", correct: true },
            { answer: "d" },
          ],
        },
        {
          question:
            "Conjugue le verbe avoir à la 1ère personne du présent de l'indicatif",
          answers: [
            { answer: "j'ai", correct: true },
            { answer: "nous avons" },
            { answer: "j'avais" },
          ],
        },
        {
          question: "Quelle figure géométrique possède trois côtés?",
          answers: [
            { answer: "trapèze" },
            { answer: "un cercle" },
            { answer: "un triangle", correct: true },
          ],
        },
      ],
  
    
  },
  mutations: {},
  actions: {},
  modules: {},
});
