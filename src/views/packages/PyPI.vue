<template>
  <div class="pypi">
    <tutorial-title
      title="PyPI 切换镜像源教程"
      :src="LOGO_PYPI"
      alt="PyPI Logo"
    ></tutorial-title>
    <guide-card>
      <guide-card-step :step="1">
        <p class="mb-4">请完善以下信息：</p>
        <select-mirror
          v-model="selectedMirror"
          :mirrors="mirrors"
        ></select-mirror>
      </guide-card-step>
      <guide-card-step :step="2">
        <p class="mb-2">打开命令行并执行以下命令：</p>
        <div class="code">
          <p># Python 2</p>
          <p class="text-red-500">
            pip config set global.index-url {{ mirrors[selectedMirror].link }}
          </p>
          <br />
          <p># Python 3</p>
          <p class="text-red-500">
            pip3 config set global.index-url
            {{ mirrors[selectedMirror].link }}
          </p>
        </div>
      </guide-card-step>
      <guide-card-step :step="3" final>
        <p class="mb-2">
          现在您可以使用由{{ mirrors[selectedMirror].name }}提供的 PyPI
          镜像源了。
        </p>
        <div class="code">
          <p># Python 2</p>
          <p class="text-red-500">pip install &lt;package name&gt;</p>
          <br />
          <p># Python 3</p>
          <p class="text-red-500">pip3 install &lt;package name&gt;</p>
        </div>
      </guide-card-step>
    </guide-card>
    <div class="legal">
      <h3 class="text-sm">法律声明</h3>
      <p class="text-xs">
        "Python" 及 Python 相关徽标是由 Python Software Foundation
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
import LOGO_PYPI from '../../assets/logos/pypi.svg';

export default defineComponent({
  components: { TutorialTitle, GuideCard, GuideCardStep, SelectMirror },
  name: 'PyPI',
  data() {
    return {
      LOGO_PYPI,
      step: 1,
      selectedMirror: 0,
      mirrors: [
        {
          name: '清华大学',
          website: 'https://mirrors.tuna.tsinghua.edu.cn/',
          link: 'https://pypi.tuna.tsinghua.edu.cn/simple',
        },
        {
          name: '北京外国语大学',
          website: 'https://mirrors.bfsu.edu.cn/',
          link: 'https://mirrors.bfsu.edu.cn/pypi/web/simple',
        },
      ],
    };
  },
});
</script>
