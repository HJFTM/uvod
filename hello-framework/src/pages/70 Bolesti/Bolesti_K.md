<div class="card" style="max-width: 640px;">
  <iframe
    id="observable-iframe"
    src="https://observablehq.com/embed/f777e930c0aec7f8?cell=*&standalone=1"
    style="width: 100%; border: none; min-height: 600px; overflow: hidden;"
    scrolling="no"
    frameborder="0"
  ></iframe>
</div>

<script src="https://unpkg.com/iframe-resizer@4.3.2/js/iframeResizer.min.js"></script>
<script>
  iFrameResize({
    checkOrigin: false,
    log: false,
    heightCalculationMethod: 'lowestElement',
    resizeFrom: 'child'
  }, '#observable-iframe');
</script>
