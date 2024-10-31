<script setup>
import Number from './Number.vue'
</script>

<template>
  <div id="clock">
    <Number id="d100" />
    <Number id="d10" />
    <Number id="d0" />
    <div class="colon">天</div>

    <Number id="h10" />
    <Number id="h0" />
    <div class="colon">小时</div>

    <Number id="m10" />
    <Number id="m0" />
    <div class="colon">分</div>

    <Number id="s10" />
    <Number id="s0" />
    <div class="colon">秒</div>
  </div>
</template>

<style>
#clock {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 1000px;
  height: 200px;
  text-align: center;
}

.colon {
  position: relative;
  display: inline-block;
  font: 30px 'Roboto Slab', sans-serif;
  top: -55px;
  left: 0px;
  color: var(--fontColor);
}
</style>