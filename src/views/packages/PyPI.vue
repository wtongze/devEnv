<template>
  <div class="pypi">
    <tutorial-title
      title="PyPI 切换镜像源教程"
      :src="LOGO.PyPI"
    ></tutorial-title>
    <div
      class="flex-1 border-2 border-gray-100 shadow p-8 rounded-lg w-4/5 mx-auto"
      style="height: 450px"
    >
      <div class="control mb-6 flex justify-between">
        <button class="btn-outline pl-2" @click="step--">
          <span class="material-icons align-bottom"> chevron_left </span>
          返回
        </button>
        <button class="btn pr-2" @click="step++">
          继续
          <span class="material-icons align-bottom"> chevron_right </span>
        </button>
      </div>
      <div class="steps">
        <div v-if="step === 1">
          <h2 class="text-2xl mb-4">Step 1</h2>
          <p class="mb-4">请完善以下信息：</p>
          <div class="flex space-x-8">
            <div>
              <p class="mb-2 font-medium">当前网络环境</p>
              <select class="select">
                <option value="IPv4">IPv4</option>
                <option value="IPv6">IPv6</option>
                <option value="IPv4+IPv6">IPv4 + IPv6</option>
              </select>
            </div>
            <div>
              <p class="mb-2 font-medium">希望使用的镜像源</p>
              <select class="w-64 select">
                <option value="tsinghua">清华大学 TUNA</option>
                <option value="IPv6">IPv6</option>
                <option value="IPv4+IPv6">IPv4 + IPv6</option>
              </select>
            </div>
            <div class="self-end btn-outline rounded-lg py-3/2">
              <a href="https://tuna.moe" target="_blank"
                >镜像源官网
                <span class="material-icons align-baseline text-sm">
                  open_in_new
                </span>
              </a>
            </div>
          </div>
        </div>
        <div v-if="step === 2">
          <h2 class="text-2xl mb-4">Step 2</h2>
          <p class="mb-2">打开命令行并执行以下命令：</p>
          <div class="code font-mono p-4 bg-gray-50 rounded-md">
            <p class="text-gray-500"># Python 2</p>
            <p class="text-red-500">
              pip config set global.index-url https://tuna.moe
            </p>
            <br />
            <p class="text-gray-500"># Python 3</p>
            <p class="text-red-500">
              pip3 config set global.index-url https://tuna.moe
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PyPI from '../../assets/logos/pypi.svg';
import TutorialTitle from '../../components/TutorialTitle.vue';

export default defineComponent({
  components: { TutorialTitle },
  name: 'PyPI',
  data() {
    return {
      LOGO: {
        PyPI,
      },
      step: 1,
    };
  },
});
</script>
