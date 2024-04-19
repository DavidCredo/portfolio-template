<script lang="ts">
  import type { Color } from "../../constants";
  export let color: Color;
  export let description: string = "";
  export let Icon: any = null;
  function getColorProps(color: Color) {
    switch (color) {
      case "blue":
        return {
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
        };
      case "green":
        return {
          bgColor: "bg-green-100",
          textColor: "text-green-800",
        };
      case "amber":
        return {
          bgColor: "bg-amber-100",
          textColor: "text-amber-800",
        };
      case "yellow":
        return {
          bgColor: "bg-yellow-100",
          textColor: "text-yellow-800",
        };
      case "emerald":
        return {
          bgColor: "bg-emerald-100",
          textColor: "text-emerald-800",
        };
      case "orange":
        return {
          bgColor: "bg-orange-100",
          textColor: "text-orange-800",
        };
      case "violet":
        return {
          bgColor: "bg-violet-100",
          textColor: "text-violet-800",
        };
      default:
        return {
          bgColor: "bg-gray-100",
          textColor: "text-gray-800",
        };
    }
  }
</script>

<span
  class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full {getColorProps(
    color
  ).bgColor} {getColorProps(color).textColor}"
>
  {#if Icon}
    <span class="me-1">{Icon}</span>
  {/if}
  {description}</span
>
