<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="用户管理"><tuodong/></el-tab-pane>
    <el-tab-pane label="配置管理">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import tuodong from "./draggable.vue";

import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 800px;
}
.el-tabs__content,.el-tab-pane{
  height: 100%;
}
/* .el-tabs__nav-scroll{
  height: calc(100vh - 60px);
} */
</style>