<template>
  <div class="rover-body">
    <RoverMap v-if="this.edge" :mapSize="8" :xx="this.xx+1" :yy="this.yy+1"
              :direction="this.direction" :edge="this.edge"></RoverMap>
    <MoveRoverBtn :rover_step="this.roverStep" :current_step="this.currentStep"
                  :status_text_format="this.statusTextFormat"></MoveRoverBtn>
  </div>
</template>

<script>
import axios from "axios";
import {config} from '../../config';
import MoveRoverBtn from '../components/MoveRoverBtn.vue';
import RoverMap from '../components/RoverMap.vue';

export default {
  name: "Rover-page",
  components: {MoveRoverBtn, RoverMap},
  data() {
    return {
      xx: 0,
      yy: 0,
      direction: "N",
      mapSize: 0,
      statusTextFormat: "N,0.0",
      roverStep: 0,
      currentStep: 0,
      mapData: null,
      roverStatus: null,
      apiUrl: config.$api_url,
      edge: [],
    }
  },
  mounted() {
    this.getMapInfo()
    this.getRoverStatus(0)
  },
  methods: {
    makeNewMap() {
      let maxEdge = 8
      for (let i = maxEdge; i > 0; i--) {
        this.edge.push(i);
      }
    },
    async getMapInfo() {
      try {
        const res = await axios.get(this.apiUrl + '/map-info')
        if (!res.data || !res.data.map_size) {
          throw "no map data found from api";
        }
        this.mapData = res.data
        this.mapSize = this.mapData.map_size
        this.roverStep = this.mapData.rover_step
        this.makeNewMap()
      } catch (err) {
        alert(err)
      }
    },
    async getRoverStatus(step) {
      try {
        const res = await axios.get(this.apiUrl + '/rover-status?step=' + step)
        if (!res.data || !res.data.status_text_format) {
          throw "no rover data found from api";
        }
        this.roverStatus = res.data
        this.currentStep = res.data.current_step
        this.xx = this.roverStatus.status.position_x
        this.yy = this.roverStatus.status.position_y
        this.direction = this.roverStatus.status.direction
        this.statusTextFormat = this.roverStatus.status_text_format
      } catch (err) {
        alert(err)
      }
    }
  }
}

</script>
<style>
.rover-body {
  max-width: 900px;
  margin: 0 auto;
}
</style>