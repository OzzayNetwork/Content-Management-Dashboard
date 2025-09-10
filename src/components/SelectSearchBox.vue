<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import VueSelect from 'vue3-select-component';

const props = defineProps<{
  modelValue: any;
  options: { label: string; value: any }[];
  placeholder?: string;
  isMulti?: boolean;
  disabled?: boolean;
  inputClass?: string;
  className?: string;
}>();

const emit = defineEmits(['update:modelValue']);

const updateValue = (newValue: any) => {
  emit('update:modelValue', newValue);
};
</script>

<template>
  <VueSelect
    v-model="props.modelValue"
    :options="props.options"
    :placeholder="props.placeholder"
    :is-multi="props.isMulti"
    :disabled="props.disabled"
    :input-class="props.inputClass"
    :class="props.className"
    @update:modelValue="updateValue"
  />
</template>
