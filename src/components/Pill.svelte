<script lang="ts">
  import { Color } from "../../constants";

  export let color: Color | undefined;
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
      case Color.Amber:
        return {
          bgColor: "bg-amber-100",
          textColor: "text-amber-800",
        };
      case Color.Yellow:
        return {
          bgColor: "bg-yellow-100",
          textColor: "text-yellow-800",
        };
      case Color.Emerald:
        return {
          bgColor: "bg-emerald-100",
          textColor: "text-emerald-800",
        };
      case Color.Orange:
        return {
          bgColor: "bg-orange-100",
          textColor: "text-orange-800",
        };
      case Color.Violet:
        return {
          bgColor: "bg-violet-100",
          textColor: "text-violet-800",
        };
      case Color.Cyan:
        return {
          bgColor: "bg-cyan-100",
          textColor: "text-cyan-800",
        };
      case Color.Rose:
        return {
          bgColor: "bg-rose-100",
          textColor: "text-rose-800",
        };
      case Color.Purple:
        return {
          bgColor: "bg-purple-100",
          textColor: "text-purple-800",
        };
      case Color.Red:
        return {
          bgColor: "bg-red-100",
          textColor: "text-red-800",
        };
      case Color.Pink:
        return {
          bgColor: "bg-pink-100",
          textColor: "text-pink-800",
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
  class="inline-flex justify-center items-center flex-grow text-center text-sm font-medium px-2.5 py-0.5 rounded-full {getColorProps(
    color
  ).bgColor} {getColorProps(color).textColor}"
>
  {#if Icon}
    <span class="">{Icon}</span>
  {/if}
  {description}
  <slot name="postfixIcon"></slot>
</span>
