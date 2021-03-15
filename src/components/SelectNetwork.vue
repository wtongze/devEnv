<template>
  <div class="select-network">
    <p class="mb-2 font-medium">当前网络环境</p>
    <select
      @change="$emit('update:modelValue', $event.target.value)"
      class="select"
    >
      <option
        v-for="network in networks"
        :key="network"
        :selected="network === modelValue"
      >
        {{ network }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SelectNetwork",
  props: {
    modelValue: {
      type: String,
      default: "IPv4",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      networks: ["IPv4", "IPv6", "IPv4 + IPv6"],
    };
  },
});
</script>
