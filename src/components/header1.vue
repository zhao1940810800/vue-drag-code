<script setup lang="ts">
import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { Sunny, Moon } from "@element-plus/icons-vue";

const isDark = useDark({
  selector: "html",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);

let value1 = ref(false);
</script>
<template>
  <div class="headerLeft flex-w-b">
    <img src="../assets/logo.png" alt="" /><span>H5&nbsp;Code</span>
  </div>
  <div class="headerMain">
    <div class="flex justify-space-between mb-4 flex-wrap gap-4">
      <el-button text> plain111 </el-button>
      <el-button text> plain22 </el-button>
      <el-button text> plain </el-button>
      <el-button text> plain444444444444 </el-button>
      <el-button text> plain </el-button>
      <el-button text> plain </el-button>
    </div>
  </div>
  <div class="headerRight flex-w-b">
    <el-switch
      @change="toggleDark"
      v-model="value1"
      :active-icon="Moon"
      :inactive-icon="Sunny"
      inline-prompt
      style="margin-right: 10px"
    />
    <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
  </div>
</template>
<style lang="less">
.headerLeft {
  img {
    height: 50px;
  }
  font-weight: 600;
}
</style>
