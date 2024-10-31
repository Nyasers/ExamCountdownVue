<script setup>
import Clock from './components/Clock.vue'
</script>

<template>
  <div id="container">
    <ul id="main">
      <li id="current" class="text"></li>
      <li id="counter">
        <Clock />
      </li>
      <li>
        <ol id="future" class="text"></ol>
      </li>
    </ul>
  </div>
</template>

<style>
#container {
  position: absolute;
  left: 0px;
  top: 150px;
  width: 1000px;
  height: 320px;
  background-repeat: no-repeat;
}

ul#main {
  list-style: none;
}

#counter {
  position: absolute;
  left: 0px;
  top: 200px;
  width: 771px;
  height: 190px;
}

.text {
  position: absolute;
  text-align: left;
  line-height: 50px;
  font-size: 28px;
  color: var(--fontColor);
  padding-left: 10px;
}

li#current {
  top: 130px;
  left: 20px;
  width: auto;
}

ol#future {
  top: 350px;
  left: 20px;
  width: auto;
  list-style: cjk-ideographic inside;
}
</style>
