<script setup lang="ts">
import mainHeader from "./components/header1.vue";
import menu1 from "./components/menu.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="mainHeader flex-w-b">
        <mainHeader />
      </el-header>
      <el-container>
        <el-aside class="mainLeft" width="400px">
          <menu1/>
        </el-aside>
        <el-main class="mainRight">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.mainHeader {
  box-shadow: 0px 1px 5px  #8f8f8f;
  z-index: 10;
}
.mainLeft {
  height: calc(100vh - 60px);
}
.mainRight{
  background: #f0f0f0;
}
</style>
