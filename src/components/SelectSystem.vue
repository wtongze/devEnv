<template>
  <div class="select-system">
    <p class="mb-2 font-medium">操作系统</p>
    <select @change="handleChange" class="select">
      <option
        v-for="(system, index) in systems"
        :key="system.code"
        :selected="system === systems[modelValue]"
        :value="index"
      >
        {{ system.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface System {
  name: string;
  code: string;
}

export default defineComponent({
  name: 'SelectSystem',
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    systems: {
      type: Array as PropType<System[]>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    handleChange(event: any) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
});
</script>
