<script setup lang="ts">
import mainHeader from "./components/header1.vue";
import menu1 from "./components/menu.vue";
import { ref, reactive } from "vue";
import draggable from "vuedraggable";
const state = reactive({
  //需要拖拽的数据，拖拽后数据的顺序也会变化
  list: [
    { name: "www.itxst.com", id: 0 },
    { name: "www.baidu.com", id: 1 },
    { name: "www.google.com", id: 2 },
  ],
});
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="mainHeader flex-w-b">
        <mainHeader />
      </el-header>
      <el-container>
        <el-aside class="mainLeft" width="400px">
          <menu1 />
        </el-aside>
        <el-main class="mainRight">
          <div class="draggableMain">
            <draggable
              group="site"
              :list="state.list"
              ghost-class="ghost"
              chosen-class="chosenClass"
              animation="300"
              @start="onStart"
              @end="onEnd"
              style="height:100%"
            >
              <template #item="{ element }">
                <div class="item">
                  {{ element.name }}
                </div>
              </template>
            </draggable>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang=less>
.mainHeader {
  box-shadow: 0px 1px 5px #8f8f8f;
  z-index: 10;
}
.mainLeft {
  height: calc(100vh - 60px);
  padding: 10px 0;
}
.mainRight {
  background: #f0f0f0;
}
main{
  display: flex;
  align-items: center;
  justify-content: center;
}
.draggableMain {
  background-color: #ffffff;
  height: 80%;
  width: 280px;
  padding: 10px;

  .item {
    border: solid 1px #eee;
    padding: 6px 10px;
    text-align: left;
  }

  .item:hover {
    cursor: move;
  }
  .item + .item {
    margin-top: 10px;
  }
  .ghost {
    border: solid 1px rgb(19, 41, 239);
  }
  .chosenClass {
    background-color: #f1f1f1;
  }
}
</style>
