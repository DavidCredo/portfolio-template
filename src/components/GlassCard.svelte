<script lang="ts">
  export let classes = "";
  export let onPointerMove = (e) => {};
</script>

<div
  class="{classes} w-full h-fit rounded-xl bg-white/10 border-white/20 shadow-xl backdrop-filter backdrop-blur-md bg-opacity-20 border p-6 2xl:max-w-96 {classes}"
>
  <slot />
</div>
