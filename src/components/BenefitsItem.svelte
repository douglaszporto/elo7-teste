<script>
  export let name;
  export let icon;
</script>

<div class="benefits-item" role="listitem">
  <img src="{icon}" alt="" aria-hidden="false" />
  <h3>{name}</h3>
  <p><slot></slot></p>
</div>

<style>
  .benefits-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    margin: 60px 0 0 0;
  }

  .benefits-item:first-child {
    margin: 0;
  }

  .benefits-item img {
    display: block;
    margin: 0 auto 10px;
  }

  .benefits-item h3 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  .benefits-item p {
    width: 100%;
    text-align: justify;
  }

  @media (min-width: 1200px) {
    .benefits-item {
      margin: 0 0 0 30px;
    }
  }
  

</style>