<div class="card" style="max-width: 640px;">
  <iframe
  id="observable-iframe"
  src="https://observablehq.com/embed/f777e930c0aec7f8?cell=*&api_key=6184202a35d346d61eae2298a5663b7b87d01d0c">
  ></iframe>
</div>

<script src="https://unpkg.com/iframe-resizer@5.4.6/js/iframeResizer.min.js"></script>
<script>
  iFrameResize({
    checkOrigin: false,
    log: false,
    heightCalculationMethod: 'lowestElement',
    resizeFrom: 'child'
  }, '#observable-iframe');
</script>
