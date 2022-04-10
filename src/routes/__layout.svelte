<div class="wrapper">
    <slot />
  </div>
  
  <style>
    .wrapper {
      width: 50vw;
      margin: 0 auto;
    }
    :global(.more-link) {
      display: none;
    }
    :global(img) {
      max-width: 100%;
    }
    @media (max-width: 768px) {
      .wrapper {
        width: 90vw;
      }
    
    }
   
  </style>