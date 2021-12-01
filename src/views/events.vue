<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>   
var axios = require("axios").default;
export default {
  props: {
    
  },
  data() {
    return {
      events: '',
    };
  },
methods: {  
getEvents(){    
var options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/events',
  params: {fixture: '215662'},
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': 'cfe1fd719emshc0e80154b5d46f5p143b83jsnb450ad925850'
  }
};

axios.request(options).then((response) => {
    this.events = response.data.response;
	console.log(this.events);
}).catch(function (error) {
	console.log(error);
});
},
},
beforeMount() {
     this.getEvents();
  },
}
</script>
