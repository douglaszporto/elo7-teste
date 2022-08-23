<script>
  import Benefits from './components/Benefits.svelte';
  import Header from './components/Header.svelte';
  import Jobs from './components/Jobs.svelte';
  import Team from './components/Team.svelte';
  import Video from './components/Video.svelte';
</script>

<main id="hello">
  <Header />
  <Video />
  <Team />
  <Benefits />
  <Jobs />
</main>

<style>
  #hello {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }

  @media (min-width: 700px) {
    #hello {
      width: 90%;
    }
  }

  @media (min-width: 1200px) {
    #hello {
      width: 80%;
    }
  }
</style>
