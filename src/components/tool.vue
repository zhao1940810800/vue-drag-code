<script>
// const props = defineProps({
//   element: Object,
// });
// console.log(props);

// debugger
export default {
  data() {
    return {
      list: [],
      styleList:[]
    };
  },
  props: {
    element: Object,
    style:Object
  },
  mounted() {
    console.log(this.element);
    this.list = [];
    this.styleList = [];
    for (let item in this.element) {
      this.list.push({ type: this.element[item].type, key: item });
    }
    for (let item in this.style) {
      this.styleList.push({ type: this.style[item].type, key: item });
    }
  },
};
</script>
<template>
  <div class="flex-w-b form_item" v-for="(item, i) in styleList" :key="i">
    <div>{{ style[item.key].label }}：</div>
    <el-radio-group v-model="style[item.key].defaultValue" size="large">
      <el-radio-button v-for="ele in style[item.key].options" :key="ele.value" :label="ele.label" />
    </el-radio-group>
  </div>  


  <div class="flex-w-b form_item" v-for="(item, i) in list" :key="i">
    <div>{{ element[item.key].label }}：</div>
    <el-input v-if="item.type == 'input'" style="width:215px" v-model="element[item.key].defaultValue" />
    <el-select v-if="item.type == 'select'" v-model="element[item.key].defaultValue">
      <el-option
        v-for="ele in element[item.key].options"
        :key="ele.value"
        :label="ele.value"
        :value="ele.label"
      />
    </el-select>
  </div>
</template>
<style lang="less">
.form_item{
    margin-bottom: 15px;
}
</style>
