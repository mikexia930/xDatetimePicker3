// 导入组件
import XDatetimePicker from './XDatetimePicker';

// 组件列表
const components = [
  XDatetimePicker,
];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach((component: any) => {
    Vue.component(component.name, component)
  });
};

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
};

export { XDatetimePicker };
