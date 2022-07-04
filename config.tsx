import React from 'react';

const packages = require('./package.json');

export default {
    base: '/',
    publicPath: `/`,
    exportStatic: {},
    dynamicImport: {},
    mode: 'site',
    title: 'packjs',
    logo: '/logo.svg',
    favicon: '/favicon.svg',
    navs: [
        null,
        {
            title: ()=>{
                console.log("123123",123123);
                return <span>123</span>
            },
            children: [
                {
                    title: 'v2.x',
                    path: 'https://packjs.js.org',
                },
                {
                    title: 'v1.x',
                    path: 'https://packjs-v1.js.org',
                },
            ],
        },
        { title: 'GitHub', path: 'https://github.com/packjs-org/packjs' },
    ],
    links: [{ rel: 'stylesheet', href: '/style.css' }],
    headScripts: [
        ` const customInspect = function(){
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
