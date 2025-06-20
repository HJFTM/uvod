<div class="card" style="max-width: 640px;">
  <iframe
    id="observable-iframe"
    width="100%"
    style="border:none; overflow:hidden;"
    scrolling="no"
    src="https://observablehq.com/embed/f777e930c0aec7f8@217?cell=*&standalone=1&api_key=6b801b6aab523ffb4f54b3b3bad486e78b282146"
  ></iframe>
</div>

<script src="https://unpkg.com/iframe-resizer@4.3.2/js/iframeResizer.min.js"></script>
<script>
  iFrameResize({
    log: false,
    checkOrigin: false,  // probaj ovo ako ima problema sa sigurnosnim porukama
    heightCalculationMethod: 'bodyScroll'  // ponekad bolje za Observable sadržaje
  }, '#observable-iframe');
</script>
