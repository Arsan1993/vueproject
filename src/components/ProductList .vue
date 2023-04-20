<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
   <ul class="catalog__list">
    <!-- <ProductItem :product="product" v-for="(product) in products" :key="product.id"></ProductItem> -->
    <ProductItem :product="product" v-for="product in products" :key="product.id"/>

        </ul>
  </template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'ProductList',
  props: ['products'],
  components: { ProductItem },
};

</script>
