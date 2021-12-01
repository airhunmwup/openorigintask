<template>
  <div class="about">
    <h1>Teams</h1>
  </div>
</template>
<script>   
var axios = require("axios").default;
export default {
  //name: "RenderList",
  props: {
    
  },
  data() {
    return {
     teams: '',
    };
  },
methods: {  
getTeams(){ 
var options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
  params: {league: '39', season: '2020', team: '33'},
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': 'cfe1fd719emshc0e80154b5d46f5p143b83jsnb450ad925850'
  }
};

axios.request(options).then((response) => {
       this.teams = response.data;
	console.log(response.data);
}).catch(function (error) {
	console.error(error.response.data);
});
},
},
beforeMount() {
     this.getTeams();
  },
}
</script>
