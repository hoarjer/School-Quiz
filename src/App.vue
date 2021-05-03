<template>
<div id="app" class="shadow width-center">
  <div>
    <Nav />
  </div>
  <router-view class="shadow width-center"/>
</div>
</template>

<script>
import Nav from "./components/Nav"

export default {
  data() {
    return {

    }
  },
  components: {
    Nav,
  },
};
</script>

<style scoped></style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Vibur&display=swap");

body {
  margin: 0;
  padding: 0;
}

#app {
  background-image: url("./images/notebook_page_light.png");
  background-position: top center;
  background-repeat: repeat-y;
  font-family: "Vibur", cursive;
  color: rgb(10, 10, 180);
  max-width: 1300px;
  margin: 0 auto;
  /* height: 300vh; */
  box-shadow: 5px 0 5px -5px #333, -5px 0px 5px -5px #333;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  color: rgb(10, 10, 180);
}

a {
  text-decoration: none;
  color: rgb(10, 10, 180);
}

.width-center {
  max-width: 1300px;
  margin: 0 auto;
}

.red-text {
  color: rgb(218, 15, 15);
}

.medium {
  font-size: 2.5em;
}

.shadow {
  box-shadow: 5px 0 5px -5px #333, -5px 0px 5px -5px #333;
}


@media screen and (max-width: 1024px) {
  #app {
    background-image: url("./images/notebook_page_1024.png");
  }

  .medium {
    font-size: 2.2em;
  }
}

@media screen and (max-width: 768px) {
  #app {
    background-image: url("./images/notebook_page_768_sans_marge.png");
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }
}

@media screen and (max-width: 480px) {
  #app {
    background-image: url("./images/notebook_page_480_v2.png");
  }

  .medium {
    font-size: 1.7em;
  }
}

</style>
