<template>
  <div>
    <p>
      Hello {{ msg }}!
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AppMain',
  data(): Object {
    return {
      msg: 'world',
    };
  },
}
</script>
