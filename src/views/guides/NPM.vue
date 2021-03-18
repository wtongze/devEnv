<template>
  <div class="npm">
    <tutorial-title
      title="npm 切换镜像源教程"
      :src="LOGO_NPM"
      alt="npm Logo"
    ></tutorial-title>
    <guide-card>
      <guide-card-step :step="1">
        <p class="mb-4">请填写以下信息：</p>
        <select-mirror
          v-model="selectedMirror"
          :mirrors="mirrors"
        ></select-mirror>
      </guide-card-step>
      <guide-card-step :step="2">
        <p class="mb-2">打开命令行并执行以下命令：</p>
        <div class="code">
          <p class="text-red-500">
            npm config set registry
            {{ mirrors[selectedMirror].link }}
          </p>
        </div>
      </guide-card-step>
      <guide-card-step :step="3" final>
        <p class="mb-2">
          现在您可以使用由{{ mirrors[selectedMirror].name }}提供的 npm registry
          镜像源了。
        </p>
        <div class="code">
          <p class="text-red-500">npm install &lt;package name&gt;</p>
        </div>
      </guide-card-step>
    </guide-card>
    <div class="legal">
      <h3 class="text-sm">法律声明</h3>
      <p class="text-xs">
        "npm" 及 npm 相关徽标是由 npm, Inc.
        持有的商标或注册商标，上述权力持有人已准许本网站使用其持有的商标。上述权利人与本网站不存在任何隶属或赞许关系。
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
import LOGO_NPM from '../../assets/logos/npm.svg';

export default defineComponent({
  components: { TutorialTitle, GuideCard, GuideCardStep, SelectMirror },
  name: 'NPM',
  data() {
    return {
      LOGO_NPM,
      step: 1,
      selectedMirror: 0,
      mirrors: [
        {
          name: '中国科技大学',
          website: 'https://mirrors.ustc.edu.cn',
          link: 'https://npmreg.proxy.ustclug.org',
        },
        {
          name: '上海交通大学（思源服务器）',
          website: 'https://mirror.sjtu.edu.cn/',
          link: 'https://mirrors.sjtug.sjtu.edu.cn/npm-registry',
        },
        {
          name: '上海交通大学（致远服务器）',
          website: 'https://mirrors.sjtug.sjtu.edu.cn/',
          link: 'https://mirrors.sjtug.sjtu.edu.cn/npm-registry',
        },
      ],
    };
  },
});
</script>
