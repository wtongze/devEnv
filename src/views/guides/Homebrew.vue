<template>
  <div class="homebrew">
    <tutorial-title
      title="Homebrew 切换镜像源教程"
      :src="LOGO_HOMEBREW"
      alt="Homebrew Logo"
    ></tutorial-title>
    <guide-card>
      <guide-card-step :step="1">
        <p class="text-gray-500 mb-4">
          注：此教程目前只包括关于 Homebrew bottles 的信息。
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
            echo 'export HOMEBREW_BOTTLE_DOMAIN="{{
              mirrors[selectedMirror].link
            }}"' >> ~/.bash_profile
          </p>
          <p class="text-red-500">source ~/.bash_profile</p>
          <br />
          <p class="text-gray-500"># zsh</p>
          <p class="text-red-500">
            echo 'export HOMEBREW_BOTTLE_DOMAIN="{{
              mirrors[selectedMirror].link
            }}"' >> ~/.zshrc
          </p>
          <p class="text-red-500">source ~/.zshrc</p>
        </div>
      </guide-card-step>
      <guide-card-step :step="3" final>
        <p class="mb-2">
          现在您可以使用由{{ mirrors[selectedMirror].name }}提供的 Homebrew
          bottles 镜像源了。
        </p>
        <div class="code">
          <p class="text-red-500">brew install &lt;package name&gt;</p>
        </div>
      </guide-card-step>
    </guide-card>
    <div class="legal">
      <h3 class="text-sm">法律声明</h3>
      <p class="text-xs">
        Homebrew 相关徽标是由 Max Howell 以 MIT 协议许可本站使用的。
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
import LOGO_HOMEBREW from '../../assets/logos/homebrew.svg';

export default defineComponent({
  components: { TutorialTitle, GuideCard, GuideCardStep, SelectMirror },
  name: 'NPM',
  data() {
    return {
      LOGO_HOMEBREW,
      step: 1,
      selectedMirror: 0,
      mirrors: [
        {
          name: '中国科技大学',
          website: 'https://mirrors.ustc.edu.cn',
          link: 'https://mirrors.ustc.edu.cn/homebrew-bottles',
        },
        {
          name: '清华大学',
          website: 'https://mirrors.tuna.tsinghua.edu.cn/',
          link: 'https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles',
        },
        {
          name: '北京外国语大学',
          website: 'https://mirrors.bfsu.edu.cn/',
          link: 'https://mirrors.bfsu.edu.cn/homebrew-bottles',
        },
      ],
    };
  },
});
</script>
