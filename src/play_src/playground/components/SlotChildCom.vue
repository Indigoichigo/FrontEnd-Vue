<template>
    <div>
      <p>this is slot component</p>
      <slot name="title"></slot>
      <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scope>
.slot_text {
  color: #f00;
}

</style>