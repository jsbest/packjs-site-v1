const packages = require("./package.json");

export default {
  base: "/",
  publicPath: `/`,
  exportStatic: {},
  dynamicImport: {},
  mode: "site",
  title: "packjs",
  logo: "/logo.svg",
  favicon: "/favicon.svg",
  navs: [
    null,
    {
      title: "历史版本",
      children: [
        {
          title: "v2.x",
          path: "https://packjs.tagee.cc",
        },
        {
          title: "v1.x",
          path: "https://v1.packjs.tagee.cc",
        },
      ],
    },
    { title: "GitHub", path: "https://github.com/tageecc/packjs" },
  ],
  links: [{ rel: "stylesheet", href: "/style.css" }],
  headScripts: [
    `
      const customInspect = function(){
        const dom = document.createElement('span');
        dom.id = 'logo-version';
        dom.innerHTML = '${packages.version}';
        const logo = document.querySelector('.__dumi-default-navbar-logo');
        if(logo){
          logo.parentNode.insertBefore(dom, logo.nextSibling);
        }else{
          setTimeout(()=>{
            customInspect();
          }, 100)
        }
      }
      customInspect();
      `,
  ],
};
