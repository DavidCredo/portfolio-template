<script lang="ts">
  import GlassCard from "./GlassCard.svelte";
  export let portraitSrc;
  export let name: string;
  export let role: string;
</script>

<GlassCard classes="max-w-sm">
  <div
    class="w-2/6 h-8 bg-gray-800 rounded-2xl shadow-inner mx-auto mb-10"
  ></div>
  <img src={portraitSrc} alt="A portrait of me" class="rounded-lg" />
  <div class="flex flex-col gap-2">
    <h2 class="text-3xl xl:text-4xl font-bold text-gray-100 mt-8">{name}</h2>
    <p class="text-gray-300 2xl:text-lg">{role}</p>
  </div>
</GlassCard>