<template>
  <div class="debian">
    <tutorial-title
      title="Debian 切换镜像源教程"
      :src="LOGO_DEBIAN"
      alt="Debian Logo"
    ></tutorial-title>
    <guide-card>
      <guide-card-step :step="1">
        <p class="text-gray-500 mb-4">
          注：此教程目前只包括关于在 x86 架构的 Debian 上使用 apt
          软件包管理器的信息。
        </p>
        <p class="mb-4">请填写以下信息：</p>
        <select-system
          v-model="selectedSystem"
          :systems="systems"
          class="mb-4"
        ></select-system>
        <select-mirror
          v-model="selectedMirror"
          :mirrors="mirrors"
        ></select-mirror>
      </guide-card-step>
      <guide-card-step :step="2">
        <p class="mb-2">打开命令行并执行以下命令：</p>
        <div class="code">
          <p class="text-red-500">
            sudo cp /etc/apt/sources.list{,.bk} &amp;&amp; cat &lt;&lt; EOF >
            /etc/apt/sources.list &amp;&amp; apt update
          </p>
          <p class="text-gray-700">
            deb {{ mirrors[selectedMirror].link }}
            {{ systems[selectedSystem].code }} main contrib non-free
            <br />
            deb {{ mirrors[selectedMirror].link }}
            {{ systems[selectedSystem].code }}-updates main contrib non-free
            <br />
            deb {{ mirrors[selectedMirror].link }}
            {{ systems[selectedSystem].code }}-backports main contrib non-free
            <br />
            deb {{ mirrors[selectedMirror].link }}
            {{ systems[selectedSystem].code }}-security main contrib non-free
          </p>
          <p class="text-red-500">EOF</p>
        </div>
      </guide-card-step>
      <guide-card-step :step="3" final>
        <p class="mb-2">
          现在您可以使用由{{ mirrors[selectedMirror].name }}提供的 Debian
          镜像源了。
        </p>
        <div class="code">
          <p class="text-red-500">apt install &lt;package name&gt;</p>
        </div>
      </guide-card-step>
    </guide-card>
    <div class="legal">
      <h3 class="text-sm">法律声明</h3>
      <p class="text-xs">
        "Debian" 及 Debain 相关徽标是由 Software in the Public Interest, Inc.
        持有的商标或注册商标。本网站依据合理使用原则使用其持有的商标。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TutorialTitle from '../../components/TutorialTitle.vue';
import GuideCard from '../../components/GuideCard.vue';
import GuideCardStep from '../../components/GuideCardStep.vue';
import SelectMirror from '../../components/SelectMirror.vue';
import LOGO_DEBIAN from '../../assets/logos/debian.svg';
import SelectSystem from '../../components/SelectSystem.vue';

export default defineComponent({
  components: {
    TutorialTitle,
    GuideCard,
    GuideCardStep,
    SelectMirror,
    SelectSystem,
  },
  name: 'Debian',
  data() {
    return {
      LOGO_DEBIAN,
      step: 1,
      selectedMirror: 0,
      selectedSystem: 0,
      mirrors: [
        {
          name: '清华大学',
          website: 'https://mirrors.tuna.tsinghua.edu.cn/',
          link: 'https://mirrors.tuna.tsinghua.edu.cn/debian/',
        },
        {
          name: '北京外国语大学',
          website: 'https://mirrors.bfsu.edu.cn/',
          link: 'https://mirrors.bfsu.edu.cn/debian/',
        },
      ],
      systems: [
        {
          name: 'Bullseye',
          code: 'bullseye',
        },
        {
          name: 'Buster',
          code: 'buster',
        },
        {
          name: 'Stretch',
          code: 'stretch',
        },
        {
          name: 'Jessie',
          code: 'jessie',
        },
      ],
    };
  },
});
</script>
