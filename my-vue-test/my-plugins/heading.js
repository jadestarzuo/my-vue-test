const myPlugin = {
    install(Vue, options){

        //heading组件
    //   <heading level="1" :title="title" icon="gouwuche">
    //     {{title}}
    //   </heading>
        Vue.component("heading", {
            props: {
              level: {
                type: String,
                required: true,
              },
              title: {
                type: String,
                default: "title",
              },
              icon: {
                type: String,
              },
            },
            render(h) {
              // 子节点数组
              let children = [];
    
              // icon图标处理
              if (this.icon) {
                // <svg><use x:href="#icon-cart"></svg>
                children.push(h("svg", { class: "icon" }, [h('use',{attrs:{'xlink:href': '#icon-' + this.icon}})]));
              }
              // snabbdom
              // 拼接子节点
              children = children.concat(this.$slots.default)
    
              const vnode = h(
                "h" + this.level, //参数1，tagname
                { attrs: { title: this.title } }, // 参数2，{...}
                children //参数3， 子节点的vnode数组
              );
    
              console.log(vnode);
              return vnode;
            },
          });
    }
    
}

if(typeof window !== 'undefined' && window.Vue){
    //使用插件使用Vue.use
    window.Vue.use(MyPlugin)
}