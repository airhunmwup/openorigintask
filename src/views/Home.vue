<template>
<div  class="bg-dark bg-gradient">
  <div class="container">
  <ul class="nav nav-tabs bg-gradient nav-dark bg-dark" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Live Scores</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Fixture</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">ODDs</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#predictions" type="button" role="tab" aria-controls="predictions" aria-selected="false">Predictions</button>
  </li>
</ul>
  </div>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
<Live/></div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Events/></div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><Odds/></div>
  <div class="tab-pane fade" id="predictions" role="tabpanel" aria-labelledby="predictions-tab">...</div>
</div>
</div>
</template>
<script>
// @ is an alias to /src
import Live from "@/views/live.vue";
import Events from "@/views/events.vue";
import Odds from "@/views/odd.vue";


export default {
  name: "Home",
  components: {
    Live,
    Events,
    Odds,
  },
};
</script>
