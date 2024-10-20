<script lang="ts">
  import Pill from "../Pill.svelte";
  import GlassCard from "../GlassCard.svelte";
  import { selectedTagsStore } from "../../stores/selectedTagsStore";
  import { scale } from "svelte/transition";
  import { getAvailableTags } from "../../helpers.ts";
  
  export let projects;
  export let currentLang;
  export let defaultLang;

  const availableTags = getAvailableTags(currentLang);

  // retain routing consistency while language attributes are included in the project IDs
  projects.map((project) => {
    let pID = project.id.split("/")[1];
    if (project.id.startsWith(`${defaultLang}/`)) {
      project.route = `/projects/${pID}`;
    } else {
      project.route = `/${currentLang}/projects/${pID}`;
    }
    return project;
  });

  $: filteredProjects = projects
    .filter((project) => {
      if ($selectedTagsStore.length === 0) return true;
      // Check if all selected tags are in the project
      return $selectedTagsStore.every((tag) => project.data.tags.includes(tag));
    })
    .sort((a, b) => a.data.id - b.data.id);
</script>

{#each filteredProjects as project (project.id)}
  <div transition:scale class="grid col-auto row-auto">
    <GlassCard
      classes="hover:bg-white/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl active:scale-90 active:shadow-xl h-full max-w-lg"
    >
      <a href={project.route} class="flex flex-col items-start">
        <img
          src={project.data.thumbnail.src}
          alt={project.data.thumbnail.alt}
          class=" rounded-lg mb-4 object-cover aspect-square"
        />
        <div class="flex flex-wrap gap-2 mt-4 min-w-56">
          {#each project.data.tags as tag}
            {@const tagData = availableTags.find((t) => t.name === tag)}
            {#if tagData}
              <Pill color={tagData.color} description={tag} />
            {/if}
          {/each}
        </div>
        <h2 class="text-2xl mt-4 mb-1 text-gray-100">
          {project.data.title}
        </h2>
        <p class="text-gray-300">{project.data.shortDescription}</p>
      </a>
    </GlassCard>
  </div>
{/each}
