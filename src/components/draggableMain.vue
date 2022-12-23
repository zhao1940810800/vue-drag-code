<template>
  <div class="itxst">
    <div>
      <!-- <el-input
        v-if="state.list.length > 0"
        v-model="state.list[0].props.text.defaultValue"
        placeholder="Please input"
      /> -->
      <draggable
        :group="site"
        :list="state.list"
        ghost-class="ghost"
        chosen-class="chosenClass"
        animation="350"
        @start="onStart"
        @end="onEnd"
        @add="add"
        style="height: 100%"
      >
        <template #item="{ element }">
          <div
            class="item"
            :class="{ active: state.activeGroupKey == element.key }"
            @click="selectGroup(element)"
          >
            <component :is="element.render({ props: element.props,style:element.style })"></component>
            <!-- {{ element.name }} -->
          </div>
        </template>
      </draggable>
      <el-drawer v-model="state.drawer" title="I am the title" :with-header="false">
        <tool v-if="state.drawer" :element="state.activeGroupItem.props" :style="state.activeGroupItem.style"/>
      </el-drawer>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import draggable from "vuedraggable";
import tool from "./tool.vue";
let site = ref("site");
const state = reactive({
  //需要拖拽的数据，拖拽后数据的顺序也会变化
  activeGroupKey: null,
  activeGroupItem: null,
  drawer: false,
  list: [
    // { name: "www.itxst.com", id: 0 },
    // { name: "www.baidu.com", id: 1 },
    // { name: "www.google.com", id: 2 },
  ],
});
function selectGroup(item) {
  state.activeGroupKey = item.key;
  state.activeGroupItem = item;
  state.drawer = true;
}
//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽");
  site.value = "tuodong";
};
const add = (e) => {
  debugger
  // state.list.forEach((item)=>{
  //   item=JSON.parse(JSON.stringify(item))
  // })
};
//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽");
  site.value = "site";
};
</script>
<style scoped>
.itxst {
  /* width: 100%; */
  margin-right: 8px;
  display: flex;
  height: 100%;
}
.itxst > div:nth-of-type(1) {
  flex: 1;
}
.itxst > div:nth-of-type(2) {
  width: 280px;
  padding-left: 20px;
}
.item {
  /* border: solid 1px #eee; */
  /* padding: 6px 10px; */
  text-align: left;
}

.item:hover {
  cursor: move;
}
.item + .item {
  margin-top: 10px;
}
.active {
  border: solid 1px rgb(19, 41, 239);
}
.ghost {
  border: solid 1px rgb(19, 41, 239);
}
.chosenClass {
  background-color: #f1f1f1;
}
</style>
