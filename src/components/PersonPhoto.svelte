<script>
  export let name;
  export let photo;
</script>

<img 
  src="{photo}" 
  alt="Foto de {name}" 
  role="listitem"
  class="person-photo"
/>

<style>
  .person-photo {
    flex: 1;
    width: 60%;
    margin: 15px 0 0 0;
  }

  .person-photo:first-child {
    margin: 0;
  }

  @media (min-width: 700px) {
    .person-photo {
      width: calc(50% - 8px);
      min-width: calc(50% - 8px);
      max-width: calc(50% - 8px);
      margin: 15px 0 0 15px;
    }

    .person-photo:nth-child(odd) {
      margin: 15px 0 0 0;
    }
  }

  @media (min-width: 1200px) {
    .person-photo {
      width: calc(25% - 12px);
      min-width: calc(25% - 12px);
      max-width: calc(25% - 12px);
      margin: 0 0 0 15px;
    }

    .person-photo:nth-child(3n) {
      margin: 0 0 0 15px;
    }
  }
</style>