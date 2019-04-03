<template>
  <div>
    <!-- <DeepInVue /> -->
    <SlotChildCom>
      <p slot="title" class="slot_text">{{ slotTitle }}</p>
      <p >some slot text2</p>
    </SlotChildCom>
  </div>
</template>

<script>
// import DeepInVue from './components/DeepInVue.vue';
import SlotChildCom from './components/SlotChildCom.vue';

export default {
  data() {
    return {
      slotTitle: 'Vue'
    }
  },
  components: {
    // DeepInVue,
    SlotChildCom
  }
}
</script>

<style scoped>
.slot_text {
  color: #00f;
}
</style>