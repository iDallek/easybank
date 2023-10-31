<template>
  <div class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
      </div>
      <div>
        <ul class="menu__items__desktop">
          <li data-test="menu__item" v-for="menuItem in menuItems" :key="menuItem.id">{{ menuItem.label }}</li>
        </ul>
      </div>
      <RequestInviteButton class="request__btn" />
      <div class="header__menu">
        <img src="@/assets/icons/icon-hamburger.svg" alt="menu" @click="toggleMenu" />
      </div>
    </div>
    <div class="modal">
      <Transition name="modal-background">
        <div class="modal__menu" v-if="isMenuOpen" />
      </Transition>
      <Transition name="modal">
        <ul class="menu__items__mobile" v-if="isMenuOpen">
          <li data-test="menu__item" v-for="menuItem in menuItems" :key="menuItem.id">{{ menuItem.label }}</li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import RequestInviteButton from './RequestInviteButton.vue';

export default {
  name: 'TheHeader',
  components: {
    RequestInviteButton
  },
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
  align-items: center;
}

.header__logo,
.header__menu {
  display: flex;
  cursor: pointer;
  height: 1.2em;
  align-items: center;
}

.header__menu img {
  height: 1em;
  width: 1.8em;
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
  z-index: 98;
}

.menu__items__mobile {
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
  z-index: 99;
}

.menu__items__mobile li {
  padding: 10px 0;
  font-weight: 400;
  font-size: 1.2rem;
  cursor: pointer;
}

.menu__items__mobile li:hover {
  background-color: var(--vt-c-grayish-blue);
  color: var(--vt-c-white);
}

.menu__items__desktop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu__items__desktop li {
  padding: 25px 15px 20px;
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  border-bottom: solid 5px transparent;
}

.menu__items__desktop li:hover {
  color: var(--vt-c-dark-blue);
  border-bottom: 5px solid;
  border-image: linear-gradient(90deg, var(--vt-c-lime-green), var(--vt-c-light-blue)) 1;
}

.request__btn {
  margin: 0;
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

@media (min-width: 768px) {
  .header__menu {
    display: none;
  }
  .header__content {
    padding: 0 25px;
  }
}

@media (max-width: 767px) {
  .menu__items__desktop {
    display: none;
  }
}

@media (max-width: 850px) {
  .request__btn {
    display: none;
  }
}

@media (min-width: 1024px) {
  .header__content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
}
</style>