<script lang="ts">
  export let classes = "";
</script>

<div
  class="h-fit w-full rounded-xl bg-white/10 border-white/20 shadow-xl backdrop-filter backdrop-blur-md bg-opacity-20 border p-6 2xl:max-w-96 {classes}"
>
  <slot />
</div>
