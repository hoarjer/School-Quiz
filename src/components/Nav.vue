<template>
  <div id="Nav">
    <nav>
      <ul class="nav-links medium">
        <li>
          <a href="#">Sign In</a>
          <div class="subline"></div>
        </li>

        <li>
          <a href="#">LogIn</a>
          <div class="subline"></div>
        </li>
        <li>
          <a href="#">Contrôle</a>
          <div class="subline"></div>
        </li>
        <li>
          <a href="#">Mon profil</a>
          <div class="subline"></div>
        </li>
        <img
          @click="navSlide"
          class="back-arrow"
          src="../images/back_arrow.png"
          alt=""
        />

      </ul>
      <div class="burger" @click="navSlide">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    navSlide() {
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links li");

      // Toggle nav
      nav.classList.toggle("nav-active");

      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.4
          }s`;
        }
      });

      // animate burger
      burger.classList.toggle("burger-toggle");

      this.show = true;
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-links {
  display: flex;
  justify-content: space-around;
  width: 90%;
  text-align: center;
}

.nav-links li {
  width: 30%;
  transition: ease-in 200ms;
}

.nav-links li .subline {
  height: 1px;
  width: 70%;
  margin: 0 auto;
  background-color: rgb(10, 10, 180);
  transform-origin: bottom left 60px;
  transform: scale(0);
  opacity: 0;
  transition: ease-in 300ms;
}

.nav-links li:hover {
  transform: scale(1.2);
  text-shadow: 5px 3px 3px rgba(0, 0, 0, 0.3);
}

.nav-links li:hover .subline {
  transform: scale(1);
  opacity: 1;
  box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.3);
}

.burger {
  display: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 5px 3px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  margin: 20px;
}

.burger div {
  height: 4px;
  width: 30px;
  background-color: rgb(10, 10, 180);
  margin: 7px;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.back-arrow {
  display: none;
}

@media screen and (max-width: 1024px) {
  .nav-links {
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .nav-links {
    background-image: url("../images/notebook_page_768.png");
    background-position: center;
    box-shadow: 10px 10px 10px -5px #333, -5px -10px 5px -5px #333;
    border-bottom-right-radius: 20px;
    width: 80%;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 700px;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -105%) rotate(6deg);
    transition: transform 0.5s cubic-bezier(0.28, 0.65, 0.82, 0.41);
    z-index: 100;
  }

  .nav-active {
    transform: translate(0%, 0%) rotate(-3deg);
    position: fixed;
  }

  .nav-links li {
    opacity: 1;
    width: 100%;
    margin-top: -15px;
    transform: translateX(50px);
    transform: rotate(0deg);
  }

  .back-arrow {
    display: block;
    position: absolute;
    right: 20px;
  }

  .burger {
    display: block;
  }

  @keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(50px);
      transform: rotate(0deg);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
      transform: rotate(-3deg);
    }
  }

  .burger-toggle .line1 {
    transform: rotate(-45deg) translate(-9px, 5px);
  }

  .burger-toggle .line2 {
    opacity: 0;
  }

  .burger-toggle .line3 {
    transform: rotate(45deg) translate(-8px, -5px);
  }
}

@media screen and (max-width: 480px) {
  .burger {
    margin-bottom: 0px;
  }
}

@keyframes navLinkFade {
    from {
      opacity: 0;
      transform: translateX(0px);
      transform: rotate(0deg);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
      transform: rotate(-3deg);
    }
  }
</style>
