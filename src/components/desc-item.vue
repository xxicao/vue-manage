<template>
  <div>
      <span>{{title}}：</span>
      <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }

}
</script>
