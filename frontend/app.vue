<template>
  <div>
    <NuxtLayout><NuxtPage /></NuxtLayout>
  </div>
</template>

<style>
@import "./assets/css/color-system.css";

body {
  font-family: "Inter", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

p,
li,
figcaption {
  text-wrap: pretty;
  max-width: 65ch;
}
</style>
