<template>
  <div id="Home">
    <div class="top-bannier">
      <div class="info">
        <ul class="student-info medium">
          <li class="">Hoareau</li>
          <li class="">Jérôme</li>
          <li class="">6<span>ème</span>D</li>
        </ul>
        <div class="date">
          <p class="medium">le {{ today }}</p>
        </div>
      </div>
      <div class="title">
        <h1 class="red-text medium">Contrôle d'Histoire de ta Vie</h1>
      </div>
    </div>
    <div class="bottom-bannier">
      <div class="mark">
        <p class="red-text">{{ score }}/20</p>
      </div>
      <div class="appreciation">
        <p class="medium appreciation-title">Appréciations :</p>
        <p class="appreciation-text red-text medium">
          {{ appreciations }}
        </p>
      </div>
    </div>
    <Quiz :rsl="score" @finalResult="score = $event" :app="appreciations" @appreciations="appreciations = $event"/>  
  </div>
</template>

<script>
import Quiz from "../components/Quiz"

export default {
    name: "Home",
    data() {
      return {
        today: '',
        score: 0,
        appreciations: 'Clique sur la réponse qui te semble juste. Bon courage !',
      }
    },
    components: {
        Quiz,
    },
    created() {
      const date = new Date();
      this.today = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    }
};
</script>

<style>
.top-bannier {
  margin-top: 30px;
}

.info {
  display: flex;
  justify-content: space-between;
}

.student-info {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.student-info li {
  padding-left: 15px;
  line-height: 50px;
}

.date {
  display: flex;
  align-items: center;
  padding-right: 20px;
}

.title {
  display: flex;
  justify-content: flex-end;
}

.title h1 {
  width: 84%;
  text-align: center;
  margin: 0px;
  font-weight: lighter;
  line-height: 50px;
}

.bottom-bannier {
  margin-top: 33px;
  border-top: 3px solid rgb(218, 15, 15);
  border-bottom: 3px solid rgb(218, 15, 15);
  height: 195px;
  display: flex;
  align-items: center;
}

.mark {
  width: 15%;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border: 3px solid rgb(218, 15, 15);
  border-radius: 60% 45%;
}

.mark p {
  font-size: 3.5em;
  transform: rotate(-5deg);
}

.appreciation {
  width: 85%;
  height: 100%;
}

.appreciation-title {
  margin-left: 20px;
  margin-top: 8px;
}

.appreciation-text {
  text-align: center;
  transform: rotate(-2deg);
}

@media screen and (max-width: 1024px) {
  .top-bannier {
    margin-top: 39px;
  }

  .student-info li {
    line-height: 49px;
  }

  .bottom-bannier {
    margin-top: 32px;
    height: 146px;
    justify-content: space-between;
  }

  .mark {
    width: 15%;
    height: 90%;
  }

  .mark p {
    font-size: 2.3em;
  }

  .appreciation {
    width: 80%;
    height: 100%;
  }

  .appreciation-title {
    margin-left: 0px;
    margin-top: 14px;
  }
}

@media screen and (max-width: 768px) {
  .top-bannier {
    margin-top: 11px;
  }

  .title h1 {
    width: 100%;
  }

  .mark {
    width: 17%;
    height: 80%;
    margin-right: 5px;
  }

  .appreciation {
      border-left: 2px solid rgb(218, 15, 15);
      padding-left: 5px;
  }

  .mark p {
    font-size: 2em;
  }

  .appreciation-text {
    margin-top: -20px;
    line-height: 30px;
  }
}

@media screen and (max-width: 480px) {
  .top-bannier {
    margin-top: 1px;
  }

  .student-info li {
    padding-left: 15px;
    line-height: 34px;
  }

  .title {
    /* margin-top: 2px; */
  }

  .title h1 {
    line-height: 33px;
  }

  .bottom-bannier {
    height: 100px;
    margin-top: 24px;
    border-top: 2px solid rgb(218, 15, 15);
  border-bottom: 2px solid rgb(218, 15, 15);
  }

  .mark {
    width: 22%;
    height: 110%;
    border: 2px solid rgb(218, 15, 15);
  }

  .mark p {
    font-size: 1.7em;
  }

  .appreciation {
    width: 80%;
    height: 100%;
  }

  .appreciation-title {
    margin-left: 0px;
    margin-top: 6px;
  }

  .appreciation-text {
      font-size: 1.4em;
      margin-top: -28px;
  }
}
</style>
