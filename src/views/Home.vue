<template>
  <div>
    {{ hello }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
  data(): Object {
    return {
      hello: 'This is home page',
    };
  },
}
</script>