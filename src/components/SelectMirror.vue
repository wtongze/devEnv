<template>
  <div class="select-mirror flex flex-wrap">
    <div class="mr-8 mb-4">
      <p class="mb-2 font-medium">希望使用的开源软件镜像站</p>
      <select class="w-auto md:w-64 select" @change="handleChange">
        <option
          v-for="(mirror, index) in mirrors"
          :key="mirror.name"
          :value="index"
          :selected="index === modelValue"
        >
          {{ mirror.name }}
        </option>
      </select>
    </div>

    <a
      :href="mirrors[modelValue].website"
      target="_blank"
      class="self-end btn-outline rounded-lg py-3/2 mb-4"
      >镜像源官网
      <span class="material-icons align-baseline text-sm"> open_in_new </span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Mirror {
  name: string;
  website: string;
  link: string;
}

export default defineComponent({
  name: 'SelectMirror',
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    mirrors: {
      type: Array as PropType<Mirror[]>,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    handleChange(event: any) {
      this.$emit('update:modelValue', parseInt(event.target.value));
    },
  },
});
</script>
