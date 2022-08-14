<template>
  <div class="about">
    <h1>Rover Status: </h1>
    <div>
      {{roverStatus}}
    </div>]
    <div>
      {{current_step}}
    </div>
    <MoveRoverBtn :rover_step="this.rover_step" :current_step="this.current_step" :status_text_format="this.roverStatus.status_text_format" ></MoveRoverBtn>
  </div>
</template>

<script>
import axios from "axios";
import { config } from '../../config';
import MoveRoverBtn from '../components/MoveRoverBtn.vue';
export default {
  name: "Rover-page",
  components: {MoveRoverBtn},
  data() {
    return {
      rover_step:0,
      current_step: 0,
      mapData: null,
      roverStatus: null,
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
        this.rover_step = res.data.rover_step
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
        this.current_step = res.data.current_step
      }  catch (err) {
        alert(err)
      }

    }
  }
}

</script>