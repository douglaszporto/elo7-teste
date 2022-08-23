<script>
  import { onMount } from 'svelte';

  import { serviceGetJobs } from '../services/jobs';
  import SectionTitle from "./SectionTitle.svelte";
  import JobsItem from "./JobsItem.svelte";
  import Loading from "./Loading.svelte";

  let jobList = [];
  let loading = true;

  onMount(async () => {
    const jobs = await serviceGetJobs();
    
    jobList = jobs.filter((job) => job.ativa);
    loading = false;
  });
</script>

<section id="vagas">
  <SectionTitle>Vagas em Aberto</SectionTitle>
  <h3>Desenvolvimento</h3>
  {#if loading}
    <Loading />
  {:else}
    <div role="list" aria-label="Lista de Vagas e aberto" id="jobs-list">
      {#each jobList as job}
        <JobsItem item={job} />
      {/each}
    </div>
  {/if}
</section>

<style>
  section {
    padding: 0 var(--themeInternalMarging, 50px) 50px;
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 40px;
  }

  #jobs-list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }

  @media (min-width: 1200px) {
    section {
      align-items: stretch;
    }
  }
</style>