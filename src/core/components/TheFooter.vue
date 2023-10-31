<template>
  <footer class="app__footer">
    <div class="logo">
      <img src="@/assets/images/logo-dark.svg" alt="logo" />
    </div>
    <div class="social">
      <img src="@/assets/icons/icon-facebook.svg" alt="Facebook" />
      <img src="@/assets/icons/icon-youtube.svg" alt="Youtube" />
      <img src="@/assets/icons/icon-twitter.svg" alt="Twitter" />
      <img src="@/assets/icons/icon-pinterest.svg" alt="Pinterest" />
      <img src="@/assets/icons/icon-instagram.svg" alt="Instagram" />
    </div>
    <div class="links">
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
    <RequestInviteButton class="request__btn" />
    <div class="attribution">
      <span>Challenge by <a class="frontendmentor__link" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</span>
      <span>Coded by <a class="personal__link" href="#">Gabriel Carvalho</a>.</span>
    </div>
  </footer>
</template>

<script lang="ts">
import RequestInviteButton from '@/core/components/RequestInviteButton.vue'

export default {
  name: 'TheFooter',
  components: {
    RequestInviteButton
  }
}
</script>

<style scoped>
  .app__footer {
    background-color: var(--vt-c-dark-blue);
    padding: 20px 30px;
    text-align: center;
    font-weight: 700;
  }

  .logo {
    margin: 25px 0 30px 0;
  }

  .social {
    margin: 20px 0;
  }

  .social img {
    margin: 5px 8px 14px;
    height: 25px;
  }

  .links {
    margin: 20px 0;
  }

  .links ul {
    padding: 0;
  }

  .links ul li {
    list-style: none;
    margin: 7px 0;
  }

  .links ul li a {
    text-decoration: none;
    color: white;
    font-weight: 300;
    font-size: 0.9em;
  }

  .request__btn {
    margin: 25px 0 35px;
  }

  .attribution {
    font-size: 0.7em;
    margin-bottom: 30px;
  }

  .attribution span {
    display: block;
  }

  .attribution .frontendmentor__link {
    color: var(--vt-c-lime-green);
    text-decoration: none;
  }

  .attribution .personal__link {
    color: var(--vt-c-light-blue);
    text-decoration: none;
  }

</style>