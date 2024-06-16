<script lang="ts">
  import { Color } from "../../constants";
  import { getColorProps } from "../helpers";
  export let color: Color;
  export let description: string = "";
  export let Icon: any = null;
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
