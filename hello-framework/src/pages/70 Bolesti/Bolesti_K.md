<div class="card" style="max-width: 960px; margin: auto;">
  <iframe
    id="observable-iframe"
    src="https://observablehq.com/embed/f777e930c0aec7f8?cell=*&api_key=6184202a35d346d61eae2298a5663b7b87d01d0c"
    style="width:100%; border:none; min-height:1200px; overflow:hidden;"
    scrolling="no"
    frameborder="0"
  ></iframe>
</div>

<script>
  const iframe = document.getElementById("observable-iframe");
  function adjust() {
    const h = window.innerHeight * 1.8; // možeš prilagoditi faktor
    iframe.style.height = h + "px";
  }

  window.addEventListener("load", adjust);
  window.addEventListener("resize", adjust);
</script>
