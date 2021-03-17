<template>
  <div class="Nodejs">
    <tutorial-title
      title="Node.js 切换镜像源教程"
      :src="LOGO_NODEJS"
      alt="Nodejs Logo"
    ></tutorial-title>
    <guide-card>
      <guide-card-step :step="1">
        <p class="text-gray-500 mb-4">
          注：此教程目前只包括使用 nvm 来管理 Node.js 的信息。
        </p>
        <p class="mb-4">请填写以下信息：</p>
        <select-mirror
          v-model="selectedMirror"
          :mirrors="mirrors"
        ></select-mirror>
      </guide-card-step>
      <guide-card-step :step="2">
        <p class="mb-2">打开命令行并执行以下命令：</p>
        <div class="code">
          <p class="text-gray-500"># bash</p>
          <p class="text-red-500">
            echo 'export NVM_NODEJS_ORG_MIRROR="{{
              mirrors[selectedMirror].link
            }}"' >> ~/.bash_profile
          </p>
          <p class="text-red-500">source ~/.bash_profile</p>
          <br />
          <p class="text-gray-500"># zsh</p>
          <p class="text-red-500">
            echo 'export NVM_NODEJS_ORG_MIRROR="{{
              mirrors[selectedMirror].link
            }}"' >> ~/.zshrc
          </p>
          <p class="text-red-500">source ~/.zshrc</p>
        </div>
      </guide-card-step>
      <guide-card-step :step="3" final>
        <p class="mb-2">
          现在您可以使用由{{ mirrors[selectedMirror].name }}提供的 Node.js
          Releases 镜像源了。
        </p>
        <div class="code">
          <p class="text-red-500">nvm install { stable || latest }</p>
        </div>
      </guide-card-step>
    </guide-card>
    <div class="legal">
      <h3 class="text-sm">法律声明</h3>
      <p class="text-xs">
        "Node.js" 及 Node.js 相关徽标是由 OpenJS Fundation
        持有的商标或注册商标，上述权力持有人已准许本网站使用其持有的商标。
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
import LOGO_NODEJS from '../../assets/logos/nodejs.svg';

export default defineComponent({
  components: { TutorialTitle, GuideCard, GuideCardStep, SelectMirror },
  name: 'Nodejs',
  data() {
    return {
      LOGO_NODEJS,
      step: 1,
      selectedMirror: 0,
      mirrors: [
        {
          name: '中国科技大学',
          website: 'https://mirrors.ustc.edu.cn',
          link: 'https://mirrors.ustc.edu.cn/node/',
        },
        {
          name: '清华大学',
          website: 'https://mirrors.tuna.tsinghua.edu.cn/',
          link: 'https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/',
        },
        {
          name: '北京外国语大学',
          website: 'https://mirrors.bfsu.edu.cn/',
          link: 'https://mirrors.bfsu.edu.cn/nodejs-release/',
        },
      ],
    };
  },
});
</script>
