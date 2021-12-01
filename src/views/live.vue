<template>
  <div class="about">
    <h1>Live</h1>
  <div class="container p-2">
<div class="card">
  <div class="card-header">
  <h6 class="text-success">Live &star;</h6>
  </div>
    <div v-for="(item, index) in live" :key="index">
  <div class="card-header">
      <span class="text-xs"><img style="height: 15px;" :src="item.league.flag"/> {{ item.league.country }} </span>
  </div>
  <div class="card-body ">
  <table class="table">
  <tbody>
    <tr >
      <td><span>{{ moment(item.fixture.timestamp).format('HH:mm') }} </span> <span class="text-danger">  {{ item.fixture.status.elapsed }}'</span></td>
      <td><span>{{ item.teams.home.name }} <img style="height: 15px;" :src="item.teams.home.logo"/></span></td>
      <td>{{ item.goals.home }} - {{ item.goals.away }}</td>
      <td><span><img style="height: 15px;" :src="item.teams.away.logo"/> {{ item.teams.away.name }}</span></td>
      
    </tr>
  </tbody>
</table>
  </div>
</div>
</div>
</div>

  
  </div>
</template>
<script>
import moment from 'moment';    
var axios = require("axios").default;
export default {
  //name: "RenderList",
  props: {
    
  },
  data() {
    return {
     live: '',
    };
  },
methods: {  
getLive(){ 
var options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: {live: 'all'},
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': 'cfe1fd719emshc0e80154b5d46f5p143b83jsnb450ad925850'
  }
};

axios.request(options).then((response) => {
        this.live = response.data.response;
	console.log(this.live);
}).catch(function (error) {
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
}
</script>
