 <div class="card" style="">
<iframe width="100%" height="500" frameborder="0"
  id="observable-iframe"
  src="https://observablehq.com/embed/f777e930c0aec7f8?cell=*&api_key=6184202a35d346d61eae2298a5663b7b87d01d0c">
  style="width:100%; border:none; min-height:1200px; overflow:hidden;"
  scrolling="no"
</iframe>
</div>


<script>
  const iframe = document.getElementById("observable-iframe");
  function adjust() {
    const h = window.innerHeight * 1.5; // prilagodi prema sadržaju
    iframe.style.height = h + "px";
  }
  window.addEventListener("load", adjust);
  window.addEventListener("resize", adjust);
</script>
