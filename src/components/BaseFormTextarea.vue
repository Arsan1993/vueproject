<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <BaseFormField :title="title" :error="error">
            <label>
               <textarea class="form__input form__input--area" v-model="dataValue" :placeholder="placeholder"></textarea>
            </label>
          </BaseFormField>
</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
  mixins: [formFieldMixin],
};
</script>
