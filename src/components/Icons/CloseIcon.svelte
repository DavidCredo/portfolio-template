<script lang="ts">
  import type { Color } from "../../../constants";
  import { getColorProps } from "../../helpers";

  export let color: Color;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-4 w-4 ml-1 {getColorProps(color).iconColor}"
  fill="none"
  viewBox="0 0 24 24"
>
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M6 18L18 6M6 6l12 12"
  >
  </path>
</svg>
