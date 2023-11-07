<template>
  <footer class="app__footer">
    <div class="footer__content__area">
      <div class="first__collum">
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

      <div class="last__collum">
        <RequestInviteButton class="request__btn" />
        <div class="attribution">
          <span>Challenge by <a class="frontendmentor__link" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.</span>
          <span>Coded by <a class="personal__link" href="https://github.com/iDallek" target="_blank">Gabriel Carvalho</a>.</span>
        </div>
      </div>
      
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

  .social img:hover {
    filter: invert(25%) sepia(89%) saturate(545%) hue-rotate(79deg) brightness(124%) contrast(73%);
    cursor: pointer;
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

  .links ul li a:hover {
    color: #2edd93;
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

  @media (min-width: 1024px) {
    .logo {
      text-align: left;
      margin-top: 0;
    }

    .logo img {
      width: 160px;
    }

    .social img:first-child {
      margin-left: 0;
    }

    .footer__content__area {
      max-width: 1200px;
      margin: 0 auto;
      padding: 40px 30px 0;
      display: flex;
    }

    .first__collum {
      margin-right: 50px;
      display: flex;
      flex-direction: column;
    }

    .social img {
      height: 22px;
    }

    .links {
      margin-top: -5px;
    }

    .links ul {
      display: flex;
      flex-flow: column wrap;
      height: 150px;
      text-align: left;
    }

    .links ul li {
      padding: 0 70px;
    }

    .last__collum {
      margin-top: 0;
      margin-left: auto;
      text-align: right;
    }

    .request__btn {
      margin-top: 0;
    }
  }
</style>