<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import Portal from "svelte-portal";

  export let images: { src: string; alt: string }[] = [];
  export let startIndex: number;
  let index = startIndex;
  export let dialog: any;

  $: {
    if ($dialog.expanded) {
      index = startIndex;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "16px";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";
    }
  }
</script>

<Portal target="body">
  {#if $dialog.expanded}
    <div class="z-10 overflow-hidden">
      <button
        class="fixed inset-0 bg-black/70 backdrop-filter backdrop-blur-xl bg-opacity-20 h-screen"
        on:click={dialog.close}
        transition:fade={{ duration: 100 }}
      />
      <div class="fixed inset-0 ">
        <div
          class="flex items-center justify-center text-center w-full p-4 lg:p-12"
        >
          <div
            class="w-11/12"
            use:dialog.modal
            in:scale={{ duration: 300, delay: 100 }}
            out:scale={{ duration: 200 }}
          >
            <div class="flex justify-end">
              <button
                class="bg-black/80 rounded-full p-2 mb-4"
                on:click={dialog.close}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-gray-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-row items-center ">
              {#if index > 0}
                <button
                  class="bg-white/20 rounded-full p-4 mr-4 transition-transform transform hover:scale-110"
                  on:click={() => (index = index - 1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              {:else}
                <div class="w-16 h-14 mr-4 " />
              {/if}

              <div
                class="rounded-xl bg-white/20 border-white/30 shadow-xl backdrop-filter backdrop-blur-md bg-opacity-20 border p-6 h-[calc(75vh)] w-full"
              >
                {#each [images[index]] as { src, alt }}
                  <img {src} {alt} class="rounded-xl object-contain h-full w-full" />
                  <p
                    class="text-center text-gray-100 text-opacity-80 pt-6 italic"
                  >
                    {alt}
                  </p>
                {/each}
              </div>

              {#if index < images.length - 1}
                <button
                  class="bg-white/20 rounded-full p-4 ml-4 transition-transform transform hover:scale-110"
                  on:click={() => (index = index + 1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              {:else}
                <div class="w-16 h-14 ml-4" />
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</Portal>
