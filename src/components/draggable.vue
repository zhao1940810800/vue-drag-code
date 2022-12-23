<template>
  <div class="itxst">
    <div>
      <draggable
        :group="{ name: 'site', pull: 'clone' }"
        :clone="clone"
        :list="modules"
        ghost-class="ghost"
        chosen-class="chosenClass"
        animation="300"
        @start="onStart"
        @end="onEnd"
        style="height: 100%"
      >
        <template #item="{ element }">
          <div class="item">
            <component :is="element.preview()"></component>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
import draggable from "vuedraggable";
import modules from "./base-widgets/index";
const state = reactive({
  //需要拖拽的数据，拖拽后数据的顺序也会变化
  list: [
    { name: "www.itxst.com" },
    { name: "www.baidu.com" },
    { name: "www.google.com" },
  ],
});
//拖拽开始的事件
const onStart = () => {
  console.log("开始拖拽left");
};
const clone = (e) => {
  console.log(e);
  let arr = {};
  for (let ele in e) {
    if (!e[ele]) {
      return;
    }

    if (typeof(e[ele]) == "object") {
      arr[ele] = JSON.parse(JSON.stringify(e[ele]));
    } else {
      arr[ele] = e[ele];
    }
  }

  // for(ele in e){
  //   console.log(ele);
  // }
  return arr;
};
//拖拽结束的事件
const onEnd = () => {
  console.log("结束拖拽left");
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
  width: 270px;
  padding-left: 20px;
}
.item {
  border: solid 1px #eee;
  padding: 6px 10px;
  text-align: center;
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
</style>
