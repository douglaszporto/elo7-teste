<script>

  const parseLocation = (loc) => {
    if (!loc || typeof loc !== 'object') {
      return 'Remoto';
    }

    return `${(loc.bairro ?? '')} - ${(loc.cidade ?? '')}, ${(loc.pais ?? '')}`;
  }

  export let item;
</script>

<div class="job-item" role="listitem">
  <div>
    <a href="{item.link}">{item.cargo ?? ''}</a>
  </div>
  <div class="location">{parseLocation(item.localizacao)}</div>
</div>

<style>
  .job-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .job-item:last-child {
    margin-bottom: 0;
  }

  .job-item a {
    color: var(--themeSecondaryColor, #359c9c);
    text-decoration: none;
  }
  .job-item a:hover {
    font-weight: 700;
  }

  .location {
      opacity: 0.8;
    }

  @media (min-width: 1200px) {
    .job-item {
      font-size: 18px;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .location {
      font-size: 18px;
    }
  }
</style>