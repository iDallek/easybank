<template>
  <div class="header">
    <div class="header__content">

      <div class="header__logo">
        <img src="../assets/logo.svg" alt="logo" />
      </div>

      <div class="header__menu">
        <img src="./icons/icon-hamburger.svg" alt="menu" @click="toggleMenu" />
      </div>
      
    </div>

    <div class="modal">

      <Transition name="modal-background">
        <div class="modal__menu" v-if="isMenuOpen" />
      </Transition>

      <Transition name="modal">
        <ul class="menu__items" v-if="isMenuOpen">
          <li data-test="menu__item" v-for="menuItem in menuItems" :key="menuItem.id">{{ menuItem.label }}</li>
        </ul>
      </Transition>
        
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'TheHeader',
    data() {
      return {
        isMenuOpen: false,
        menuItems: [
          { id: 1, label: 'Home' },
          { id: 2, label: 'About' },
          { id: 3, label: 'Contact' },
          { id: 4, label: 'Blog' },
          { id: 5, label: 'Careers' },
        ],
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
      },
    },
  }

</script>

<style scoped>
  .header {
    background-color: var(--color-background);
  }

  .header__content {
    display: flex;
    justify-content: space-between;
    padding: 20px 30px;

  }

  .header__logo,
  .header__menu {
    display: flex;
    cursor: pointer;
  }
  

  .modal {
    display: flex;
    justify-content: center;
  }

  .modal__menu {
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(var(--vt-c-dark-blue), transparent);
    padding: 20px 30px;
    display: flex;
    justify-content: center;
    align-items: stretch;
    z-index: 0;
  }

  .menu__items {
    position: absolute;
    top: 90px;
    text-align:center;
    list-style: none;
    margin: 0 20px;
    background-color: var(--color-background);
    color: var(--color-heading);
    text-align: center;
    border-radius: 5px;
    padding: 20px 0;
    width: calc(100% - 50px);
    max-width: 400px;
    z-index: 1;
  }

  .menu__items li {
    padding: 10px 0;
    font-weight: 400;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .menu__items li:hover {
    background-color: var(--vt-c-grayish-blue);
    color: var(--vt-c-white);
  }

  .modal-background-enter-active,
  .modal-background-leave-active {
    transition: opacity 0.3s ease;
  }

  .modal-background-enter-from,
  .modal-background-leave-to {
    opacity: 0;
  }

  .modal-enter-active,
  .modal-leave-active {
    transform-origin: top;
    transition: transform 0.3s ease, opacity 0.3s ease;
    
  }

  .scale-enter-to,
  .modal-enter-from {
    transform: scaleY(1)
  }

  .modal-enter-from,
  .modal-leave-to {
    transform: scaleY(.9);
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    .header__menu {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    .header {
      display: flex;
      justify-content: center;
    }

    .header__content {
      max-width: 1024px;
      width: 100%;
    }
  }

</style>