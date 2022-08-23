<script>
  import BenefitsItem from "./BenefitsItem.svelte";
  import Button from "./Button.svelte";
</script>

<section>
  <div role="list" aria-label="Benefícios de trabalhar no Elo7" id="benefits-list">
    <BenefitsItem name="Qualidade de Vida" icon="qualidade.png">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Curabitur ornare ipsum tellus, ac scelerisque augue pretium 
      in. Pellentesque eu velit vel arcu commodo rhoncus. Nam a 
      dolor urna. Quisque nisi ante, eleifend vitae massa vel.
    </BenefitsItem>
    <BenefitsItem name="Ambiente Descontraído" icon="descontracao.png">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
      ornare, magna sit amet blandit vestibulum, tortor sapien 
      commodo velit, ac dictum nulla justo id lectus. Suspendisse 
      potenti. Nullam neque orci, sagittis sit amet laoreet et, 
      feugiat non orci. Curabitur convallis est eget vulputate 
      placerat. Morbi at erat purus. Praesent id metus porta, 
      hendrerit diam eget, blandit diam. Quisque vitae eros.
    </BenefitsItem>
    <BenefitsItem name="Atividades Extras" icon="atividades.png">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque 
      lobortis in est sit amet efficitur. Sed gravida urna vitae ex 
      pretium, vitae convallis purus facilisis. Quisque at libero 
      mollis, egestas lorem at, convallis mi. Nullam sed leo dolor. 
      Etiam dapibus vestibulum at erat diam.
    </BenefitsItem>
  </div>
  <Button>Saiba mais</Button>
  <img src="foto-bottom.png" alt="" aria-hidden="true" />
</section>

<style>
  section {
    padding: 50px var(--themeInternalMarging, 50px) 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  img {
    margin-top: 30px;
    width: 100%;
  }

  #benefits-list {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    margin-bottom: 20px;
  }
  
  @media (min-width: 1200px) {
    #benefits-list {
      flex-direction: row;
      align-items: stretch;
      justify-content: stretch;
      margin-bottom: 20px;
    }
  }
</style>