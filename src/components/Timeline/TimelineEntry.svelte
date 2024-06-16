<script lang="ts">
  export let title: string;
  export let location: string;
  export let description: string;
  export let dateStart: Date;
  export let dateEnd: Date | undefined;
  export let isLast: boolean;
</script>

<li>
  <div class="relative pb-8">
    {#if !isLast}
      <span
        class="absolute top-4 left-4 -ml-px mt-6 h-3/5 w-0.5 bg-gray-200"
        aria-hidden="true"
      ></span>
    {/if}
    <div class="relative flex gap-2">
      <span
        class="relative z-10 w-9 h-8 flex items-center justify-around bg-white/10 border-white/20 border backdrop-filter backdrop-blur-md rounded-full"
      >
        <slot name="icon"></slot>
      </span>
      <div class="mt-1 ml-4 flex flex-row justify-between gap-2 w-full">
        <div class="flex flex-col">
          <p class="text-sm text-gray-200 title">
            {title}
            <!-- TODO: Add URL to collection, if applies -->
            <a href="/" class="font-medium text-gray-100">@{location}</a>
          </p>
          <p class="text-sm text-gray-400">{description}</p>
        </div>
        <div class="flex flex-col justify-end ml-4 items-end">
          {#if dateStart}
            <time
              class="text-sm text-gray-400"
              datetime={dateStart.toISOString()}
            >
              {dateStart.getFullYear()}
            </time>
          {/if}
          <span class="block text-sm text-gray-400 text-center">bis</span>
          {#if dateEnd}
            <time
              class="text-sm text-gray-400"
              datetime={dateEnd.toISOString()}
            >
              {dateEnd.getFullYear()}
            </time>
          {:else}
            <time class="text-sm text-gray-400">Present</time>
          {/if}
        </div>
      </div>
    </div>
  </div>
</li>

<style>
  p {
    margin-block: 0.2rem;
  }
  .title {
    margin-top: 0;
  }
</style>
