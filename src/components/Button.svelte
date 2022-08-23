<script>
  export let link="#";  
</script>

<a href="{link}">
  <slot></slot>
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" />
  </svg>
</a>

<style>
  a {
    border: 0;
    border-top: 2px solid #cbcbcb;
    width: 200px;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: var(--themeOpacityColor, rgba(0,0,0,0.1));
    color: var(--themeSecondaryColor);
    text-transform: uppercase;
    font-size: 18px;  
    transition: all .4s ease 0s;
    cursor: pointer;
  }
  
  a:hover {
    background-color: var(--themeOpacityHoverColor, rgba(0,0,0,0.2));
  }

  svg {
    width: 16px;
    height: 16px;
  }
</style>