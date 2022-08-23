<script>
  import PersonPhoto from "./PersonPhoto.svelte";
  import SectionTitle from "./SectionTitle.svelte";
  import Background from "./Background.svelte";
</script>

<section>
  <Background />
  <SectionTitle>Conheça nosso time<br />fora de série</SectionTitle>
  <div role="list" aria-label="Fotos de pessoas do time" id="photo-list">
    <PersonPhoto name="Camila" photo="camila.png" />
    <PersonPhoto name="Guto" photo="guto.png" />
    <PersonPhoto name="David" photo="david.png" />
    <PersonPhoto name="Beatriz" photo="beatriz.png" />
  </div>
</section>

<style>
  section {
    padding: 30px var(--themeInternalMarging, 50px) 50px;
    position: relative;
  }

  #photo-list {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media (min-width: 700px) {
    #photo-list {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (min-width: 1200px) {
    #photo-list {
      flex-direction: row;
    align-items: center;
    justify-content: stretch;
    }
  }
</style>