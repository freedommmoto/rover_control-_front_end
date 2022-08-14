<template>
  <div style="">
    <div v-if="xx">
      <h5 class="init_map_x">{{ EdgeXX }}</h5>
      <h5 class="init_map_y">{{ EdgeYY }}</h5>
      <table>
        <tr v-for="positionX in mapSize" :key="positionX">
          <td v-for="positionY in mapSize" :key="positionY">
            <div v-if="positionX === xx && positionY === yy">
              {{ direction }}
            </div>
            <div v-else>
              &nbsp;
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      loading
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoverMap',
  props: ['mapSize', 'xx', 'yy', 'direction'],
  data() {
    return {
      EdgeXX: 1,
      EdgeYY: 1,
    }
  },
  computed: {
    reverseItems() {
      return this.items.slice().reverse();
    }
  }

}
</script>
<style>
.init_map_y {
  position: absolute;
  margin-top: 12px;
  margin-left: -10px
}

.init_map_x {
  position: absolute;
  margin-top: -22px;
  margin-left: 10px
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