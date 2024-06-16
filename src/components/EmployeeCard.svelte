<script lang="ts">
  import GlassCard from "./GlassCard.svelte";
  export let portraitSrc;
</script>

<GlassCard classes="max-w-xl 2xl:max-w-lg">
  <div
    class="w-1/5 h-8 bg-gray-800 rounded-2xl shadow-inner shadow-slate-400 mx-auto mb-4"
  ></div>
  <img
    src={portraitSrc}
    alt="A portrait of me"
    class=" rounded-lg"
  />
  <div class="flex flex-col gap-2">
    <h2 class="text-3xl xl:text-4xl font-bold text-white mt-8">John Doe</h2>
    <p class="text-gray-400 2xl:text-lg">Software Engineer</p>
  </div>
</GlassCard>
