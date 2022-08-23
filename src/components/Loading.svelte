<div class="loading"  aria-label="Aguarde, carregando lista"></div>

<style>
    @keyframes spinner-loading {
      0% {transform: translate3d(-50%, 0, 0) rotate3d(0,0,1, 0deg);}
      100% {transform: translate3d(-50%, 0, 0) rotate3d(0,0,1, 360deg);}
    }
    .loading {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 4px solid var(--themeFontColor, #000);
      border-bottom: 4px solid transparent;
      animation: spinner-loading forwards linear infinite 4s;
      background-color: var(--themeOpacityColor, rgba(0,0,0,0.1));
    }
</style>