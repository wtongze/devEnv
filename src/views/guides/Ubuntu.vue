<template>
  <div class="ubuntu">
    <tutorial-title
      title="Ubuntu 切换镜像源教程"
      :src="LOGO_UBUNTU"
      alt="Ubuntu Logo"
    ></tutorial-title>
    <guide-card>
      <guide-card-step :step="1">
        <p class="text-gray-500 mb-4">
          注：此教程目前只包括关于在 x86 架构的 Ubuntu 上使用 apt
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
            cp /etc/apt/sources.list{,.bk} &amp;&amp; cat &lt;&lt; EOF >
            /etc/apt/sources.list &amp;&amp; apt update
          </p>
          <p class="text-gray-700">
            deb {{ mirrors[selectedMirror].link }}
            {{ systems[selectedSystem].code }} main restricted universe
            multiverse
            <br />
            deb {{ mirrors[selectedMirror].link }}
            {{ systems[selectedSystem].code }}-updates main restricted universe
            multiverse
            <br />
            deb {{ mirrors[selectedMirror].link }}
            {{ systems[selectedSystem].code }}-backports main restricted
            universe multiverse
            <br />
            deb {{ mirrors[selectedMirror].link }}
            {{ systems[selectedSystem].code }}-security main restricted universe
            multiverse
          </p>
          <p class="text-red-500">EOF</p>
        </div>
      </guide-card-step>
      <guide-card-step :step="3" final>
        <p class="mb-2">
          现在您可以使用由{{ mirrors[selectedMirror].name }}提供的 Ubuntu
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
        "Ubuntu" 及 Ubuntu 相关徽标是由 Canonical Ltd.
        持有的商标或注册商标。本网站依据合理使用原则使用其持有的商标。上述权利人与本网站不存在任何隶属或赞许关系。
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
import LOGO_UBUNTU from '../../assets/logos/ubuntu.svg';
import SelectSystem from '../../components/SelectSystem.vue';

export default defineComponent({
  components: {
    TutorialTitle,
    GuideCard,
    GuideCardStep,
    SelectMirror,
    SelectSystem,
  },
  name: 'Ubuntu',
  data() {
    return {
      LOGO_UBUNTU,
      step: 1,
      selectedMirror: 0,
      selectedSystem: 0,
      mirrors: [
        {
          name: '中国科技大学',
          website: 'https://mirrors.ustc.edu.cn',
          link: 'https://mirrors.ustc.edu.cn/ubuntu/',
        },
        {
          name: '清华大学',
          website: 'https://mirrors.tuna.tsinghua.edu.cn/',
          link: 'https://mirrors.tuna.tsinghua.edu.cn/ubuntu/',
        },
        {
          name: '北京外国语大学',
          website: 'https://mirrors.bfsu.edu.cn/',
          link: 'https://mirrors.bfsu.edu.cn/ubuntu/',
        },
        {
          name: '北京理工大学',
          website: 'https://mirrors.bit.edu.cn/web/',
          link: 'https://mirrors.bit.edu.cn/ubuntu/',
        },
        {
          name: '上海交通大学（思源服务器）',
          website: 'https://mirror.sjtu.edu.cn/',
          link: 'https://mirrors.sjtug.sjtu.edu.cn/ubuntu/',
        },
        {
          name: '上海交通大学（致远服务器）',
          website: 'https://mirrors.sjtug.sjtu.edu.cn/',
          link: 'https://mirrors.sjtug.sjtu.edu.cn/ubuntu/',
        },
        {
          name: '哈尔滨工业大学',
          website: 'https://mirrors.hit.edu.cn/#/home',
          link: 'https://mirrors.hit.edu.cn/ubuntu/',
        },
        {
          name: '华南农业大学',
          website: 'https://mirrors.scau.edu.cn/',
          link: 'https://mirrors.scau.edu.cn/ubuntu/',
        },
      ],
      systems: [
        {
          name: '20.04 LTS',
          code: 'focal',
        },
        {
          name: '18.04 LTS',
          code: 'bionic',
        },
        {
          name: '16.04 LTS',
          code: 'xenial',
        },
        {
          name: '14.04 LTS',
          code: 'trusty',
        },
      ],
    };
  },
});
</script>
