<template>
  <div class="container medium">
    <div v-if="!showQuiz" class="start">
      <p @click="start" class="start-btn">Commencer</p>
    </div>
    <div
      v-else
      class="quiz-container"
      v-for="(question, index) in quiz"
      :key="index"
    >
      <div id="quiz" v-show="index === questionIndex">
        <div class="questionNumber">
          <p>Question n°{{ questionIndex + 1 }}/{{ quiz.length }}</p>
        </div>
        <div class="question">{{ question.question }}</div>
        <div class="answers-btn-resutls">
          <ul class="answers">
            <li
              v-for="(answer, answerIndex) in question.answers"
              :key="answerIndex"
              :class="select ? check(answer) : 'answer'"
              @click="selectAnswer(answer)"
            >
              {{ answerIndex + 1 }}) {{ answer.answer }}
            </li>
          </ul>
          <div class="btn">
            <p class="next" v-if="questionIndex > 0" @click="prev">Précédent</p>
            <p class="prev" @click="next">Suivant</p>
          </div>
        </div>
      </div>
    </div>
    <div class="results" v-show="questionIndex === quiz.length">
      <p class="end-text">le contrôle est terminé</p>
      <p>Ta note est de: {{ score }} / {{ quiz.length }}</p>

        <p class="restart results-btn" @click="restart">Recommencer</p>
        <p @click="stop" class="results-btn stop">Arrêter</p>

    </div>
  </div>
</template>

<script>
export default {
  props: ["rsl", "app"],
  data() {
    return {
      quiz: [
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
        {
          question: "Quelle est la capitale du Brézile?",
          answers: [
            { answer: "Rio de Janeiro" },
            { answer: "Sao Paulo" },
            { answer: "Brasilia", correct: true },
          ],
        },
        {
          question: "Le corp humain est composé d'eau à ",
          answers: [
            { answer: "40%" },
            { answer: "60%", correct: true },
            { answer: "80%" },
          ],
        },
        {
          question: "En France, que fête-t-on le 14 juillet?",
          answers: [
            { answer: "L'armistice de 1945" },
            { answer: "La fête des mères" },
            { answer: "La prise de la bastille", correct: true },
          ],
        },
        {
          question: "Christophe Colomb à découvert l'Amérique en :",
          answers: [
            { answer: "1492", correct: true },
            { answer: "1515" },
            { answer: "502 avant JC" },
          ],
        },
        {
          question: "Combien de couleurs possède un arc-en-ciel?",
          answers: [
            { answer: "7", correct: true },
            { answer: "8" },
            { answer: "9" },
          ],
        },
        {
          question: "Comment appelle-t-on la moitié du diamètre d'un cercle?",
          answers: [
            { answer: "Demi-cercle" },
            { answer: "Segment" },
            { answer: "Rayon", correct: true },
          ],
        },
        {
          question: "Quel est l'océan le plus vaste?",
          answers: [
            { answer: "Pacifique", correct: true },
            { answer: "Océan Indien" },
            { answer: "Atlantique" },
          ],
        },
        {
          question: "Quelle figure géométrique possède 7 côtés",
          answers: [
            { answer: "Enneagone" },
            { answer: "Heptagone", correct: true },
            { answer: "Hexagone" },
          ],
        },
        {
          question: "7 x 6 =",
          answers: [
            { answer: "36" },
            { answer: "42", correct: true },
            { answer: "48" },
          ],
        },
        {
          question: "Les mots 'maire', 'mère' et 'mer' sont des:",
          answers: [
            { answer: "Homonyme" },
            { answer: "Noms communs" },
            { answer: "Synonymes", correct: true },
          ],
        },
        {
          question: "Combien de guerre mondialde a-t-il eu?",
          answers: [
            { answer: "1" },
            { answer: "2", correct: true },
            { answer: "3" },
          ],
        },
        {
          question: "8 mn 9s représentent combiend de secondes?",
          answers: [
            { answer: "489", correct: true },
            { answer: "560" },
            { answer: "89" },
          ],
        },
        {
          question:
            "Lors d'une course, si je suis en 3ème position et que je dépasse le 2ème, je suis en :",
          answers: [
            { answer: "1er" },
            { answer: "2ème", correct: true },
            { answer: "3ème" },
          ],
        },
        {
          question: "Que peut coser une consommation trop élevée en sel?",
          answers: [
            { answer: "Diarrhées" },
            { answer: "Insomnies" },
            { answer: "Tension artérielle élvée", correct: true },
          ],
        },
        {
          question: "Quelle est la langue la plus parlée au monde?",
          answers: [
            { answer: "Chinois", correct: true },
            { answer: "Anglais" },
            { answer: "Espagnol" },
          ],
        },
        {
          question:
            "Qui était le dieu de la guerre dans la mythologie grecque ?",
          answers: [
            { answer: "Hadès" },
            { answer: "Hermès" },
            { answer: "Arès", correct: true },
          ],
        },
        {
          question: "Qui a dit : « Le sort en est jeté » (Alea jacta est) ?",
          answers: [
            { answer: "Vercingétorix" },
            { answer: "César", correct: true },
            { answer: "Atilla" },
          ],
        },
      ],
      showQuiz: false,
      questionIndex: 0,
      select: false,
      score: 0,
      appreciations: "Clique sur la réponse qui te semble juste. Bon courage !",
    };
  },
  methods: {
    start() {
      this.showQuiz = true;
    },

    selectAnswer(e) {
      this.select = true;

      if (e.correct) {
        this.score++;
      }
    },

    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    next() {
      if (this.questionIndex === this.quiz.length - 1) {
        if (this.score < 5) {
          this.appreciations = "Médiocre !!! Signature des parents !";
        } else if (this.score < 11) {
          this.appreciations = "A la limite de la catastrophe...";
        } else if (this.score < 16) {
          this.appreciations = "Bien dans l'ensemble !";
        } else if (this.score <= 20) {
          this.appreciations = "Excellent travail, bravo !";
        }

        this.$emit("finalResult", this.score);
        this.$emit("appreciations", this.appreciations);
      }
      this.questionIndex++;
      this.select = false;
    },

    prev() {
      this.questionIndex--;
    },

    restart() {
      this.questionIndex = 0;
      this.select = false;
      this.score = 0;
      this.appreciations =
        "Clique sur la réponse qui te semble juste. Bon courage !";
      this.$emit("finalResult", this.score);
      this.$emit("appreciations", this.appreciations);
    },
    stop() {
      this.restart();
      this.showQuiz = false;
    },
  },
};
</script>

<style>
.start {
  text-align: center;
  height: 200px;
  margin-top: 58px;
}

.start-btn {
  cursor: pointer;
}

.quiz-container {
  /* background-color: rgba(0, 100, 100, 0.3); */
  margin: 62px auto;
  width: 1000px;
  line-height: 49px;
}

#quiz {
  padding-left: 65px;
}

.question {
  margin-top: 49px;
}

.answers {
  margin-top: 50px;
}

.answer {
  width: auto;
  text-align: center;
  margin-top: 8px auto;
  line-height: 50px;
  cursor: pointer;
  transition: 0.3s;
}

.answer:hover {
  transform: scale(1.2);
}

li.correct {
  color: green;
  text-align: center;
}

li.incorrect {
  color: red;
  text-align: center;
}

.btn {
  display: flex;
  justify-content: space-around;
}
.next,
.prev {
  transform-origin: center;
  cursor: pointer;
  margin-top: 50px;
}
.next:hover,
.prev:hover {
  animation: shake 0.3s ease infinite;
}

.results {
    display: flex;
    flex-direction: column;
    align-items: center;
  margin-top: -27px;
  line-height: 20px;
  height: 500px;
}

.results-btn {
    text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  width: 200px;
}

.results-btn:hover {
  transform: scale(1.2);
}

.restart {
  animation: shake 1.5s ease infinite;
}

@keyframes shake {
  0% {
    transform: rotate(0deg) ;
  }
  12% {
    transform: rotate(2deg);
  }
  25% {
    transform: rotate(0deg) ;
  }
  37% {
    transform: rotate(-2deg) ;
  }
  50% {
      transform: rotate(0deg) scale(1.1);

  }
  62% {
      transform: rotate(2deg);

  }
  75% {
    transform: rotate(0deg);
  }
  87% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
}

@media screen and (max-width: 1024px) {
  .start {
    margin-top: 63px;
  }

  .quiz-container {
    width: 600px;
    margin-top: 64px;
  }

  #quiz {
    padding-left: 5px;
  }

  .question {
    margin-top: 50px;
  }

  .results {
  margin-top: -25px;
  line-height: 28px;
}
}

@media screen and (max-width: 768px) {
  .container {
    padding: 0 10px;
    margin-top: -49px;
  }

  .start {
    margin-top: 112px;
  }

  .quiz-container {
    width: 100%;
  }

  .results {
  margin-top: 88px;
}
}

@media screen and (max-width: 480px) {
  .container {
    padding: 8px 10px;
  }

  .start {
    margin-top: 115px;
  }

  .quiz-container {
    margin: 50px auto;
    line-height: 34px;
  }

  .question {
    margin-top: 34px;
  }

  .answers {
    margin-top: 34px;
  }

  .results {
    margin-top: 84px;
    line-height: 48px;
  }
}
</style>
