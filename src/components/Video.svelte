<script>
  import Background from "./Background.svelte";
</script>


<section aria-labelledby="ceo">
  <Background />
  <div id="column-left" class="column" role="link">
    <a href="https://youtube.com" target="_blank">
      <img src="placeholder-video.png" alt="video thumbnail"/>
    </a>
  </div>
  <div id="column-right" class="column">
    <h2>Palavra do CEO</h2>
    <h3>Carlos Curioni</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Duis non neque euismod, auctor nisl efficitur, consequat 
      enim. Etiam non nunc vitae ante blandit lacinia et a odio. 
      Aliquam diam enim, ullamcorper feugiat feugiat id, 
      hendrerit at libero. Phasellus malesuada libero.
    </p>
  </div>
</section>

<style>
  section {
    padding: 50px var(--themeInternalMarging, 50px) 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }

  .column {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  #column-left {
    padding: 0 0 30px;
  }

  #column-left a{
    width: 100%;
  }

  #column-left a img{
    width: 100%;
  }

  #column-right {
    padding: 0;
  }

  #column-right h2 {
    text-transform: uppercase;
    margin: 0 0 5px 0;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
  }

  #column-right h3 {
    font-style: italic;
    font-weight: 100;
    margin: 0 0 20px 0;
    font-size: 16px;
    text-align: center;
    color: var(--themePrimaryColor, #f9a90e);
  }

  #column-right p {
    text-align: justify;
  }

  @media (min-width: 1200px) {
    section {
      flex-direction: row;
      align-items: stretch;
      justify-content: space-evenly;
    }

    #column-left {
      align-items: flex-end;
      padding: 0 30px 0 0;
    }
    
    #column-right {
      align-items: flex-start;
      padding: 0 0 0 30px;
    }


  }
</style>
