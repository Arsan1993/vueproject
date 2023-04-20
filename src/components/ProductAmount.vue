<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click.prevent="decrease">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>
    <label>
    <input type="number" min="1" step="1"
           v-model.number="amount" name="count" @keyup="update"/>
    </label>
    <button type="button" aria-label="Добавить один товар" @click.prevent="increase">
      <svg width="12" height="12" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'ProductAmount',
  props: ['value'],
  data() {
    return {
      amount: this.value,
    };
  },
  methods: {
    decrease() {
      if (this.amount > 1) {
        this.amount -= 1;
        this.$emit('update:value', Math.trunc(this.amount));
      }
    },
    increase() {
      this.amount += 1;
      this.$emit('update:value', Math.trunc(this.amount));
    },
    update() {
      this.$emit('update:value', Math.trunc(this.amount));
    },
  },
};
</script>
