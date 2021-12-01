<template>
  <div class="container">
    <div class="container overflow-hidden">
      <div class="">
        <div class="row justify-content-center p-2">
          <div class="col-sm-6 col-md-4">
            <router-link to="/login" class="text-dark">
              <div
                class="
                  p-2
                  bg-gradient
                  text-center
                  rounded
                  shadow
                  bg-warning
                  font-weight-bold
                  border
                "
              >
                <span class="h3">Membership</span
                ><span class="fa fa-lock m-1"></span></div
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  
<Live/>
</template>

<script>
// @ is an alias to /src
import Live from "@/views/live.vue";

export default {
  name: "Home",
  components: {
    Live,
  },
};
</script>
