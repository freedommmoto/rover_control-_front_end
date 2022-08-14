<template>
  <div class="about">
    <h1>Map Data: </h1>
    <div>
      {{mapData}}
    </div>
    <h1>Rover Status: </h1>
    <div>
      {{roverStatus}}
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
      mapData:null,
      roverStatus:null,
      apiUrl: config.$api_url
    }
  },
  mounted () {
    this.getMapInfo()
    this.getRoverStatus(0)
  },
  methods: {
    async getMapInfo() {
      try {
        const res = await axios.get(this.apiUrl+'/map-info')
        if ( !res.data || !res.data.map_size){
          throw "no map data found from api";
        }
        this.mapData = res.data
      }  catch (err) {
        alert(err)
      }

    },
    async getRoverStatus(step) {
      try {
        const res = await axios.get(this.apiUrl+'/rover-status?step='+step)
        if ( !res.data || !res.data.status_text_format){
          throw "no rover data found from api";
        }
        this.roverStatus = res.data
      }  catch (err) {
        alert(err)
      }

    }
  }
}

</script>