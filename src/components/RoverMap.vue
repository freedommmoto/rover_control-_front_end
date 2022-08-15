<template>
  <div style="padding: 20px">
    <div v-if="xx">
      <h5 class="directionNSymbol">N</h5>

      <table>
        <tr v-for="positionY in edgeYSet" :key="positionY">
          <td v-for="positionX in edgeXSet" :key="positionX">
            <div v-if="positionX === xx-1 && positionY === yy">
              <img src="@/assets/rover_pic.jpeg" :class="`direction${direction}`" width="20px" height="20px"/>
            </div>
            <div v-else>
              <div style="width: 20px;height: 30px ">
<!--                {{ positionX }} , {{ positionY }}-->
                &nbsp;
              </div>
            </div>
          </td>
        </tr>
      </table>

      <h5 class="directionWSymbol">W</h5>
      <h5 class="directionESymbol">E</h5>

      <h5 class="init_map_x">{{ edgeX }}</h5>
      <h5 class="init_map_y">{{ edgeY }}</h5>
    </div>
    <div v-else>
      loading
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoverMap',
  props: ['xx', 'yy', 'direction', 'edgeXSet', 'edgeYSet', 'edgeX', 'edgeY'],
}
</script>
<style>

.directionN {
  transform: rotate(0deg);
}

.directionNSymbol {
  position: absolute;
  left: 49%;
  margin-top: -30px
}

.directionW {
  transform: rotate(270deg);
}

.directionWSymbol {
  float: left;
  margin-top: -200px;
  margin-left: -22px
}

.directionE {
  transform: rotate(90deg);
}

.directionESymbol {
  float: right;
  margin-top: -200px;
  margin-right: -22px
}

.directionS {
  transform: rotate(180deg);
}

.init_map_y {
  opacity: 0.4;
  position: absolute;
  margin-top: 12px;
  margin-left: 18px
}

.init_map_x {
  opacity: 0.3;
  position: absolute;
  margin-top: -22px;
  margin-left: -18px
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  border: 1px solid #ddd;
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}


</style>