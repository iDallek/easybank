<template>
  <section class="features__section">
    <div class="main__section">
      <h1 class="title main__title">Why choose Easybank?</h1>
      <p class="feature__paragraph">
        We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
      </p>
    </div>
    
    <div class="features__area">
      <div class="features">
        <img src="@/assets/icons/icon-online.svg" alt="Online Banking" class="feature__image" />
        <h2 class="title feature__title">Online Banking</h2>
        <p class="feature__paragraph">
          Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
        </p>
      </div>

      <div class="features">
        <img src="@/assets/icons/icon-budgeting.svg" alt="Simple Budgeting" class="feature__image" />
        <h2 class="title feature__title">Simple Budgeting</h2>
        <p class="feature__paragraph">
          See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
        </p>
      </div>
      
      <div class="features">
        <img src="@/assets/icons/icon-onboarding.svg" alt="Fast Onboarding" class="feature__image" />
        <h2 class="title feature__title">Fast Onboarding</h2>
        <p class="feature__paragraph">
          We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
        </p>
      </div>

      <div class="features">
        <img src="@/assets/icons/icon-api.svg" alt="Open API" class="feature__image" />
        <h2 class="title feature__title">Open API</h2>
        <p class="feature__paragraph">
          Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  export default {
    name: 'FeaturesSection',
  }
</script>

<style scoped>

  .features__section {
    background-color: var(--color-background-mute);
    padding: 70px 30px;
  }

  .main__section {
    margin: 20px 0 60px 0;
  }

  .title {
    color: var(--color-heading);
    text-align: center;
  }

  .feature__title {
    font-size: 1.2em;
    line-height: 1.2em;
    margin-bottom: 15px;
  }

  .main__title {
    font-size: 2em;
    line-height: 1.2em;
    margin-bottom: 25px;
  }

  .feature__paragraph {
    color: var(--color-text);
    text-align: center;
    margin: 0 auto;
    font-size: 0.8em;
  }

  .feature__image {
    margin: 0 auto;
    margin-bottom: 25px;
  }

  .features__area {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .features {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    max-width: 315px;
  }

  @media (min-width: 1024px) {
    .main__section {
      max-width: 1200px;
      margin: 30px auto;
      margin-bottom: 100px;
      padding: 0 25px;
    }

    .main__title {
      text-align: left;
    }

    .main__section .feature__paragraph {
      text-align: left;
      width: 600px;
      margin-left: 0;
    }

    .features__area {
      /* background-color: red; */
      max-width: 1200px;
      margin: 0 auto;
      justify-content: space-between;
      padding: 0 25px;
    }

    .features {
      width: 265px;
      margin: 0 auto;
      margin-bottom: 50px;
    }

    .feature__image {
      margin-left: 0;
      margin-bottom: 10px;
    }

    .features * {
      text-align: left;
    }

    .feature__title {
      margin: 35px 0;
      font-size: 1.35em;
    }

    .feature__paragraph {
      font-size: 0.9em;
    }

  }

</style>