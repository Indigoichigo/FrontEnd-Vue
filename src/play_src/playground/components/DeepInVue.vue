<template>
  <div>
    <!-- 就是單純的文字 -->
    {{ text }}

    {{ name }}

    <button @click="changeName()">click</button>
    <!-- 會解析html -->
    <span v-html="text"></span>
    <button @click="addNumber">plus</button>
    <p>{{ number }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '<h1>hello Vue</h1>',
      number: 0,
      name: 'lila'
    }
  },

  methods: {
    addNumber: function () {
      this.number++;
    },
    changeName: function () {
      this.name = 'ray';
    }
  }

}
</script>

<style scope>
</style>