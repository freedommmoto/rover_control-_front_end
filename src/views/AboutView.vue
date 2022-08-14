<template>
  <div class="about">
    <h1>This is an test about page</h1>\
    <div>
      {{responseData}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { config } from '../../config';

export default {
  name: "Rover-page",
  data() {
    return {
      responseData:null,
      apiUrl: config.$api_url
    }
  },
  mounted () {
    axios
        .get(this.apiUrl+'/map-info')
        .then(response => (this.responseData = response.data))
    }
  }

</script>