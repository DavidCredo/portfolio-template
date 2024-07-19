<script lang="ts">
  import GlassCard from "./GlassCard.svelte";
  export let portraitSrc;
  export let name: string;
  export let role: string;
</script>

<GlassCard classes="max-w-md 2xl:max-w-md sticky top-10">
  <div
    class="w-1/5 h-8 bg-gray-800 rounded-2xl shadow-inner shadow-slate-400 mx-auto mb-4"
  ></div>
  <img src={portraitSrc} alt="A portrait of me" class="rounded-lg" />
  <div class="flex flex-col gap-2">
    <h2 class="text-3xl xl:text-4xl font-bold text-white mt-8">{name}</h2>
    <p class="text-gray-400 2xl:text-lg">{role}</p>
  </div>
</GlassCard>

<!-- 
<svg
  width="100%"
  height="60vh"
  xmlns="http://www.w3.org/2000/svg"
  class="max-w-md 2xl:max-w-md sticky w-full h-fit shadow-xl"
>
  <defs>
    <filter id="f1" x="0" y="0" xmlns="http://www.w3.org/2000/svg">
      <feGaussianBlur in="SourceGraphic" stdDeviation="100" />
    </filter>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="none"></rect>
  <mask id="mask1">
    <rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      rx="10"
      ry="10"
      fill="white"
      opacity="0.2"
    ></rect>
    <ellipse cx="50%" cy="5%" rx="12%" ry="2%" fill="black"></ellipse>
  </mask>
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    fill="white"
    stroke="white"
    stroke-width="1"
    mask="url(#mask1)"
  ></rect>
  <foreignObject x="10%" y="10%" width="80%" height="100%">
    <img src={portraitSrc} alt="A portrait of me" class="rounded-lg" />
    <div class="flex flex-col gap-2">
      <h2 class="text-3xl xl:text-4xl font-bold text-white mt-8">{name}</h2>
      <p class="text-gray-400 2xl:text-lg">{role}</p>
    </div>
  </foreignObject>
</svg>
-->