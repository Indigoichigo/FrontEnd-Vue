<template>
  <div>
    <div>
      <button @click="show1 = !show1">btn1</button>
      <transition name="fade">
        <div class="box1"
             v-if="show1">show or not</div>
      </transition>
    </div>
    <div>
      <!-- <button @click="show2 = !show2">btn2</button> -->
      <transition name="slide">
        <div class="box2"
             v-if="show2">show or not</div>
      </transition>
      <input @focus="show2 = !show2"
             type="text">
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      show1: false,
      show2: false
    }
  }
}
</script>
  
<style>
ul,
li {
  list-style: none;
}

.box1 {
  width: 100px;
  height: 100px;
  background-color: #cef;
}

.box2 {
  width: 100px;
  height: 100px;
  background-color: #c1f;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave {
  /* opacity: 1; */
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-in forwards;
  transition: opacity 2s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 2s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>