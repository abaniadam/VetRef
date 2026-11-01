// کپی فونت وزیرمتن (فقط زیرمجموعه‌های عربی و لاتین) از @fontsource به www/fonts
const fs=require('fs'),path=require('path');
const src=path.join(__dirname,'..','node_modules','@fontsource','vazirmatn','files');
const out=path.join(__dirname,'..','www','fonts');
let css='';
for(const w of [400,600,700])for(const sub of ['arabic','latin']){
  const f=`vazirmatn-${sub}-${w}-normal.woff2`;
  if(!fs.existsSync(path.join(src,f))){console.warn('missing',f);continue}
  fs.copyFileSync(path.join(src,f),path.join(out,f));
  const range=sub==='arabic'?'U+0600-06FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE80-FEFC':'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122';
  css+=`@font-face{font-family:Vazirmatn;font-style:normal;font-weight:${w};font-display:swap;src:url(${f}) format('woff2');unicode-range:${range}}\n`;
}
fs.writeFileSync(path.join(out,'vazirmatn.css'),css);
console.log('font ready');
