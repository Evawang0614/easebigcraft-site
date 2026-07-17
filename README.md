# Easebig Craft 官网 — 部署说明

## 文件结构
```
ebc-site/
├── index.html      主页面
├── style.css       样式
├── script.js       交互脚本(移动菜单、滚动动画、表单校验)
├── assets/logo.webp
└── README.md       本说明
```

## 第一步:部署到 GitHub Pages(免费)

1. 在 GitHub 上新建一个仓库,比如 `easebigcraft-site`(设为 Public)
2. 把这个文件夹里的所有文件上传到仓库根目录
3. 进入仓库 Settings → Pages
4. Source 选择 `Deploy from a branch`,Branch 选择 `main` / `root`
5. 保存后几分钟,GitHub 会给你一个网址,比如:
   `https://你的用户名.github.io/easebigcraft-site/`

## 第二步:绑定你自己的域名(可选,约$10-15/年)

如果你想用 easebigcraft.com(而不是 github.io 的长网址):

1. 在 Namecheap / Cloudflare 等平台购买域名
2. 在域名的 DNS 设置里添加:
   - 一条 `CNAME` 记录,指向 `你的用户名.github.io`
   - 或者 4 条 `A` 记录,指向 GitHub Pages 的 IP(GitHub 官方文档里有最新IP列表)
3. 在仓库根目录新建一个叫 `CNAME` 的文件(无后缀),内容写你的域名,比如:
   ```
   easebigcraft.com
   ```
4. 回到 Settings → Pages,在 Custom domain 里填入你的域名并保存

## 第三步:激活询盘表单(免费,每月50条足够起步用)

目前 `index.html` 里的表单指向一个占位地址,需要替换成你自己的:

1. 去 https://formspree.io 免费注册
2. 新建一个 Form,拿到你的 Form ID(类似 `xandbcde`)
3. 打开 `index.html`,搜索这一行:
   ```html
   <form class="quote-form" id="quote-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   把 `YOUR_FORM_ID` 换成你自己的 ID
4. 表单提交后,询盘会直接发到你注册 Formspree 时用的邮箱

## 后续要做的事

- [ ] 把 `assets/` 里的占位产品图换成真实产品照片(建议每张至少 800×600px)
- [ ] 检查所有文案(目前是纯英文,面向美国/欧洲采购商)
- [ ] 激活 Formspree 表单(见上)
- [ ] (可选)购买并绑定域名
- [ ] (可选)加 Google Analytics 追踪访问数据

## 本地预览

如果想在上传前先在自己电脑上看效果,进入这个文件夹后运行:
```bash
python3 -m http.server 8000
```
然后浏览器打开 `http://localhost:8000`
