import { Button } from 'vant';
export default {
  key: 'button',
  moduleName: 'baseWidgets',
  label: '按钮',
  preview: () => <Button>Default</Button>,
  render({ props,style }) {
    console.log(props);
    let styleArr:any={}
    let propsArr:any={}
    for (const ele in style) {
      styleArr[ele]=style[ele].defaultValue
    }
    for (const ele in props) {
      propsArr[ele]=props[ele].defaultValue
    }

    return () => (
      <div style={styleArr}>
        <Button {...propsArr}>{props.text.defaultValue || '按钮1'}</Button>
      </div>
    );
  },
  props: {
    text: { defaultValue: "按钮", type: "input", label: "文字内容" },
    type: {
      options: [
        { label: "primary", value: "主要按钮" },
        { label: "success", value: "成功按钮" },
        { label: "default", value: "默认按钮" },
        { label: "warning", value: "警告按钮" },
        { label: "danger", value: "危险按钮" }],
      defaultValue: "default",
      type: "select",
      label: "按钮样式"
    }
  },
  style: {
    textAlign: {
      options: [
        { label: "left", value: "左侧" },
        { label: "center", value: "中间" },
        { label: "right", value: "右侧" }],
      defaultValue: "left",
      type: "radio",
      label: "按钮位置"
    }
  }
};
