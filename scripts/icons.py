# ساخت آیکن‌های لانچر اندروید از resources/icon-192.png (پس از npx cap add android اجرا شود)
from PIL import Image
import os
src=Image.open(os.path.join(os.path.dirname(__file__),'..','resources','icon-192.png')).convert('RGBA')
base=os.path.join(os.path.dirname(__file__),'..','android','app','src','main','res')
sizes={'mdpi':48,'hdpi':72,'xhdpi':96,'xxhdpi':144,'xxxhdpi':192}
for d,s in sizes.items():
    p=os.path.join(base,'mipmap-'+d); os.makedirs(p,exist_ok=True)
    im=src.resize((s,s),Image.LANCZOS)
    for n in ('ic_launcher.png','ic_launcher_round.png'): im.save(os.path.join(p,n))
    # foreground adaptive (۶۶٪ ناحیه امن)
    fg=Image.new('RGBA',(int(s*108/48),)*2,(0,0,0,0)); k=int(fg.width*0.6)
    fg.paste(src.resize((k,k),Image.LANCZOS),((fg.width-k)//2,)*2)
    fg.save(os.path.join(p,'ic_launcher_foreground.png'))
print('icons done')
