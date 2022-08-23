<script>
  import Button from "./Button.svelte";
</script>

<header>
  <div id="heading" role="heading" aria-labelledby="title">
    <img src="/foto-header.png" id="banner" aria-hidden="true" alt="Foto da equipe">
    <h1 id="title">Trabalhe no Elo7</h1>
  </div>
  <p id="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend pharetra tempus. Donec sodales convallis magna, in tempor magna mollis cursus. Cras vitae eros rhoncus nisi venenatis aliquam. Maecenas tristique.
  </p>
  <Button link="#vagas">Vagas em Aberto</Button>
</header>

<style>
  header {
    padding: 0 0 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
  }

  #heading {
    width: 100%;
    position: relative;
  }

  #banner {
    width: 100%;
    height: auto;
  }

  #title {
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 100%;
    font-size: 35px;
    line-height: 40px;
    text-align: center;
    font-weight: 700;
    color: #fff;
    text-shadow: 4px 4px 7px rgba(0,0,0, 0.7);
    transform: translate3d(-50%, 0, 0);
  }
  
  #content {
    text-align: justify;
    text-align-last: center;
    padding: 20px 20px;
  }

  @media (min-width: 700px) {
    #title {
      font-size: 50px;
      bottom: 10%;

    }
  }
  
  @media (min-width: 1200px) {
    #title {
      font-size: 50px;
      bottom: 30%;

    }

    #content {
      padding: 20px var(--themeInternalMarging, 50px) 20px;
    }
  }
</style>
