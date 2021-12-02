<template>
  <div class="pb-4">
    <div class="card">
      <div class="card-header">
          <router-link
            to="/live"
            aria-controls="navbarmenu"
            aria-expanded="false"
            class="nav-link text-success"
            aria-current="page"
            >
        <h6 class="text-success">
          Live scores <img src="favicon.png" style="width: 1rem" /> &star;
        </h6></router-link>
      </div>
      <div v-for="(item, index) in live" :key="index">
        <div class="card-header">
          <span class="text-xs"
            ><img style="height: 15px" :src="item.league.flag" />
            {{ item.league.country }}
          </span>
        </div>
        <div class="card-body">
          <table class="table">
            <tbody>
              <tr>
                <td class="text-start">
                  <span class="mr-1"
                    >{{ moment(item.fixture.timestamp).format("HH:mm") }}
                  </span> 
                  <span class="text-danger">
                     {{ item.fixture.status.elapsed }}'</span
                  >
                </td>
                <td  class="text-center">
                  <span
                    >{{ item.teams.home.name }}
                    <img style="height: 15px" :src="item.teams.home.logo"
                  /></span>
                </td>
                <td  class="text-center">{{ item.goals.home }} - {{ item.goals.away }}</td>
                <td  class="text-center">
                  <span
                    ><img style="height: 15px" :src="item.teams.away.logo" />
                    {{ item.teams.away.name }}</span
                  >
                </td>
                <td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
var axios = require("axios").default;
export default {
  //name: "RenderList",
  props: {},
  data() {
    return {
      live: "",
    };
  },
  methods: {
    getLive() {
      var options = {
        method: "GET",
        url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
        params: { live: "all" },
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "fccd5b8c0dmsh391cbd2abad26fdp1b46cajsn9db6e1b65cdf",
        },
      };

      axios
        .request(options)
        .then((response) => {
          this.live = response.data.response;
          console.log(this.live);
        })
        .catch(function (error) {
          console.error(error.response.data);
        });
    },
  },
  created: function () {
    this.moment = moment;
  },
  beforeMount() {
    this.getLive();
  },
};
</script>
