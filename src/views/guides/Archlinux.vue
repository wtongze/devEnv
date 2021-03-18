<template>
  <div class="archlinux">
    <tutorial-title
      title="ArchLinux 切换镜像源教程"
      :src="LOGO_ARCHLINUX"
      alt="ArchLinux Logo"
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
            sudo sed \
            <br />
            -i '1s/^/Server =
            {{ mirrors[selectedMirror].link }}/$repo/os/$arch\n/' \
            <br />
            /etc/pacman.d/mirrorlist &amp;&amp; pacman -Syy
          </p>
        </div>
      </guide-card-step>
      <guide-card-step :step="3" final>
        <p class="mb-2">
          现在您可以使用由{{ mirrors[selectedMirror].name }}提供的 ArchLinux
          镜像源了。上述权利人与本网站不存在任何隶属或赞许关系。
        </p>
        <div class="code">
          <p class="text-red-500">pacman install &lt;package name&gt;</p>
        </div>
      </guide-card-step>
    </guide-card>
    <div class="legal">
      <h3 class="text-sm">法律声明</h3>
      <p class="text-xs">
        "ArchLinux" 及 ArchLinux 相关徽标是由 Aaron Griffin 与 Judd Vinet
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
import LOGO_ARCHLINUX from '../../assets/logos/archlinux.svg';

export default defineComponent({
  components: {
    TutorialTitle,
    GuideCard,
    GuideCardStep,
    SelectMirror,
  },
  name: 'Archlinux',
  data() {
    return {
      LOGO_ARCHLINUX,
      step: 1,
      selectedMirror: 0,
      mirrors: [
        {
          name: '中国科技大学',
          website: 'https://mirrors.ustc.edu.cn',
          link: 'https://mirrors.ustc.edu.cn/archlinux',
        },
        {
          name: '清华大学',
          website: 'https://mirrors.tuna.tsinghua.edu.cn/',
          link: 'https://mirrors.tuna.tsinghua.edu.cn/archlinux',
        },
        {
          name: '北京外国语大学',
          website: 'https://mirrors.bfsu.edu.cn/',
          link: 'https://mirrors.bfsu.edu.cn/archlinux',
        },
        {
          name: '北京理工大学',
          website: 'https://mirrors.bit.edu.cn/web/',
          link: 'https://mirrors.bit.edu.cn/archlinux',
        },
        {
          name: '上海交通大学（思源服务器）',
          website: 'https://mirror.sjtu.edu.cn/',
          link: 'https://mirrors.sjtug.sjtu.edu.cn/archlinux',
        },
        {
          name: '上海交通大学（致远服务器）',
          website: 'https://mirrors.sjtug.sjtu.edu.cn/',
          link: 'https://mirrors.sjtug.sjtu.edu.cn/archlinux',
        },
        {
          name: '哈尔滨工业大学',
          website: 'https://mirrors.hit.edu.cn/#/home',
          link: 'https://mirrors.hit.edu.cn/archlinux',
        },
        {
          name: '华南农业大学',
          website: 'https://mirrors.scau.edu.cn/',
          link: 'https://mirrors.scau.edu.cn/archlinux',
        },
      ],
    };
  },
});
</script>
