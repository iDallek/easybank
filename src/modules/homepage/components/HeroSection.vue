<template>
  <div class="hero">
    <img src="@/assets/images/image-mockups.png" alt="app mockup on mobile devices" class="image__mockup" />
    <div class="hero__background">
      <div alt="background" class="hero__background_svg" />
    </div>
    <div class="hero__content">
      <h1 class="hero__title">Next generation digital banking</h1>
      <p class="hero__text">
        Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
      </p>
      <RequestInviteButton class="request__btn" />
    </div>
  </div>
</template>

<script lang="ts">
  import RequestInviteButton from "@/core/components/RequestInviteButton.vue"

  export default {
    name: 'HeroSection',
    components: {
      RequestInviteButton
    }
  }
</script>

<style scoped>
  .hero {
    margin-bottom: 80px;
  }

  .hero__content {
    padding: 0 30px;
    margin-top: -280px;
    text-align: center;
  }

  .hero__title {
    font-size: 2.5rem;
    margin-bottom: 20px;
    line-height: 1.2em;
    color: var(--color-heading);
    margin-top: 350px;
  }

  .hero__text {
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
    height: 140%;
    width: 101%;
    transform: translate(-50%, -50%);
    z-index: -2;
    background-image: url(@/assets/images/bg-intro-mobile.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }

  .image__mockup {
    position: absolute;
    top: 450px;
    right: 50%;
    transform: translate(50%, -50%);
    margin-top: calc(-300px + 15vw);
    width: 98%;
    z-index: -1;
  }

  .request__btn {
    margin-top: 45px;
  }

  @media (min-width: 1024px) {
    .hero__background {
      height: 700px;
      margin-bottom: 0;
    }

    .hero__background_svg {
      top: -250px;
      left: 0;
      position: relative;
      transform: none;
      background-image: url(@/assets/images/bg-intro-desktop.svg);
      background-size: 1350px;
      background-position: 30px -30px;
    }

    .image__mockup {
      top: 430px;
      margin-top: 0;
      position: absolute;
      right: calc(50% + -480px);
      transform: translate(50%, -50%);
      width: auto;
      height: 1000px;
      z-index: 1;
    }

    .hero {
      display: flex;
      flex-direction: row-reverse;
      margin-bottom: 0;
      align-items: center;
      padding-left: calc((100% - 1200px) / 2);
      margin: 0 auto;
      height: 100%;
    }

    .hero__content {
      margin: 0;
      text-align: start;
      padding: 20px 0 20px 25px;
      min-width: 440px;
      max-width: 440px;
    }

    .hero__title {
      margin: 20px 0;
      font-size: 2.8em;
    }

    .hero__text {
      font-size: 0.9em;
    }
  }

</style>