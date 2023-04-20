<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <ul class="colors colors--black">
    <li class="colors__item" v-for="color in colors" :key="color.id">
      <label class="colors__label">
        <input class="colors__radio sr-only" type="radio" :value="color.id"
               :selected="colorId === color.id" v-model.number="color.id">
        <span class="colors__value" :style="'background-color: ' + color.code + ';'"></span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProductColor',
  props: ['colors', 'colorId'],
};
</script>

<style scoped>

</style>
