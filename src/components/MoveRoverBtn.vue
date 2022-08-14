<template>
  <div class="move-rover-brn">

    <div class="center">
      <div>
        <a v-if="this.current_step==0" href="#" @click="back" class="previous">&laquo; Previous</a>
        <a v-else href="#" @click="back" class="next">&laquo; Previous</a>
      </div>

      <div>
        <a v-if="this.current_step==this.rover_step" href="#" @click="next" class="previous">Next &raquo;</a>
        <a v-else href="#" @click="next" class="next">Next &raquo;</a>
      </div>
      <div class="clear"></div>
    </div>

    <div>
      <h1>Step : {{ current_step }}</h1>
      <h4>Position: {{ status_text_format }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MoverRoverBtb',
  props: ['rover_step', 'current_step', 'status_text_format'],
  methods: {
    back() {
      if (this.current_step - 1 >= 0) {
        this.$parent.getRoverStatus(this.current_step - 1)
      }
    },
    next() {
      if (this.current_step + 1 <= this.rover_step) {
        this.$parent.getRoverStatus(this.current_step + 1)
      }
    },
  }
}
</script>

<style>
.clear {
  clear: both;
}

.center {
  width: 205px;
  margin: 10px auto;
}

div a {
  float: left;
  margin-left: 10px;
}

a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
}

@media (hover: hover) and (pointer: fine) {
  a:hover {
    background-color: #a2d2c0;
    color: black;
  }
}

.previous {
  background-color: #f1f1f1;
  color: black;
}

.next {
  background-color: #04AA6D;
  color: white;
}

</style>