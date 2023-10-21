<template>
  <div>
    <button>Request invite</button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'RequestInviteButton'
  }

</script>

<style scoped>
  button {
    background-image: linear-gradient(90deg, var(--vt-c-lime-green), var(--vt-c-light-blue));
    color: var(--vt-c-white);
    border: none;
    border-radius: 30px;
    padding: 15px 40px;
    font-size: 1em;
    font-weight: 700;
    cursor: pointer;
  }

  button:hover {
    opacity: 0.6;
  }
</style>