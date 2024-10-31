<template>
    <div class="num">
        <div class="upper"></div>
        <div class="base upper"></div>
        <div class="base lower"></div>
        <div class="lower"></div>
    </div>
</template>

<style>

.num {
  position: relative;
  display: inline-block;
  margin: 4px;
  width: 85px;
  height: 130px;
  font: 80px 'Roboto Slab', sans-serif;
  line-height: 124px;
  color: #fff;
  background: rgba(90, 90, 90, 1);
  border: solid 3px #404040;
  box-sizing: border-box;
  border-radius: 10px;
}

.base span {
  position: absolute;
  display: block;
  width: 100%;
}

.upper {
  position: absolute;
  width: 100%;
  height: 50%;
  background: linear-gradient(0deg, rgba(10, 10, 10, 1), rgba(20, 20, 20, 1) 10%);
  border-radius: 9px 9px 0 0;
  box-shadow: inset 0 1px 6px rgba(10, 10, 10, .1);
  overflow: hidden;
  border-bottom: solid 1px rgba(255, 255, 255, .5);
  box-sizing: border-box;
}

.lower {
  position: absolute;
  top: 50%;
  left: 0.6px;
  width: 100%;
  height: 50%;
  background: linear-gradient(180deg, rgba(10, 10, 10, 1), rgba(20, 20, 20, 1) 10%);
  border-radius: 0 0 9px 9px;
  box-shadow: inset 0 -3px 5px rgba(10, 10, 10, .2);
  overflow: hidden;
  border-top: solid 1px #333;
  box-sizing: border-box;
}

.lower span {
  position: relative;
  top: -100%;
}

</style>