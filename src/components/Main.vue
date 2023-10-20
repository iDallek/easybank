<template>
  <div class="main">
    <div class="hero__background">
      <img src="../assets/bg-intro-mobile.svg" alt="background" class="hero__background_svg" />
      <img src="../assets/images/image-mockups.png" alt="app mockup on mobile devices" class="image__mockup" />
    </div>
    <div class="main__content">
      <h1 class="main__title">Next generation digital banking</h1>
      <p class="main__text">
        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <button>Request invite</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'MainComponent'
  }
</script>

<style scoped>
  .main__content {
    padding: 0 30px;
    margin-top: -280px;
    text-align: center;
  }

  .main__title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    line-height: 1.3em;
    color: var(--color-heading);
    margin-top: 35vh;
  }

  .main__text {
    font-size: 0.8em;
  }

  .hero__background {
    position: relative;
    width: 100%;
    height: 80vw;
    overflow: hidden;
  }

  .hero__background_svg {
    position: absolute;
    top: 40vw;
    left: 50%;
    height: 130%;
    width: 101%;
    transform: translate(-50%, -50%);
    z-index: -2;
  }

  .image__mockup {
    position: absolute;
    top: 330px;
    left: 50%;
    margin-top: calc(-35vh + 15vw);
    transform: translate(-50%, -50%);
    width: 90%;
    z-index: -1;
  }


</style>