# ✨ 致谢名单 - 炫酷展示页

一个纯静态的炫酷致谢名单页面，采用深色太空主题，包含粒子星空背景、毛玻璃卡片、3D 倾角交互等多种视觉特效。

## 🎨 特性

- 🌌 **粒子星空背景** — Canvas 手写粒子系统，支持鼠标交互
- ⌨️ **打字机标题** — 逐字显示的动态标题
- 🪟 **毛玻璃卡片** — 每个致谢对象一张精致的毛玻璃卡片
- 🌀 **3D 鼠标倾角** — 卡片跟随鼠标产生 3D 旋转效果
- 🔍 **分类筛选** — 按赞助者/贡献者/朋友/特别感谢分类查看
- 📜 **滚动揭示动画** — 卡片在滚动时依次淡入
- 🎊 **光点爆炸** — 页面加载和切换分类时触发绚丽的径向光点特效
- 📱 **响应式设计** — 桌面端/平板/手机自适应

## 📁 文件结构

```
├── index.html     # 主页面（内嵌所有 CSS 和 JS，零外部依赖）
├── data.js        # 致谢名单数据文件（编辑此文件更新内容）
└── README.md      # 部署和配置指南
```

### 编辑名单数据

打开 `data.js`，在 `THANK_YOU_LIST` 数组中添加或修改条目：

```js
{
  name: '姓名/昵称',                  // 必填
  role: '身份/头衔',                  // 可选
  message: '感谢语',                  // 可选
  category: 'sponsor',               // 必填，可选值见下文
  avatar: 'https://example.com/avatar.jpg' // 可选，头像URL
}
```

**分类标签说明：**

| 标识 | 显示文字 |
|------|----------|
| `sponsor` | 💎 赞助者 |
| `contributor` | 🚀 贡献者 |
| `friend` | 🤝 朋友 |
| `special` | ❤️ 特别感谢 |

> **提示**：不填写 `avatar` 时会根据姓名首字自动生成彩色头像。

## 🚀 部署到 GitHub Pages

### 方法一：通过 Git 命令行

```bash
# 1. 进入项目目录
cd /home/aklnaaw/二创

# 2. 初始化 Git 仓库
git init
git add .
git commit -m "初始化致谢名单页面"

# 3. 在 GitHub 上创建一个新仓库（不要勾选 README 初始化）

# 4. 关联远程仓库并推送
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

### 方法二：通过 GitHub 网页上传

1. 登录 [GitHub](https://github.com)
2. 点击 **New repository** 创建新仓库
3. 进入仓库后点击 **Add file** → **Upload files**
4. 将 `index.html`、`data.js`、`README.md` 拖拽上传
5. 点击 **Commit changes**

### 启用 GitHub Pages

1. 进入你仓库的 **Settings** → **Pages**
2. 在 **Source** 中选择 `Deploy from a branch`
3. Branch 选择 `main`，目录选 `/ (root)`
4. 点击 **Save**
5. 等待 1-2 分钟，你的页面将在 `https://你的用户名.github.io/你的仓库名/` 上线

## ⚡ Cloudflare 加速配置（推荐）

由于 GitHub Pages 在国内访问速度一般，推荐使用 Cloudflare 免费套餐加速，全球节点覆盖，**无需 ICP 备案**，配置仅需几分钟。

### 方案 A：Cloudflare 代理（免费，推荐）

1. **将域名托管到 Cloudflare**
   - 登录 [Cloudflare 仪表盘](https://dash.cloudflare.com)
   - 点击 **Add a site**，输入你的域名
   - 选择 **Free** 计划
   - 按照提示将域名的 DNS 服务器改为 Cloudflare 指定的 NS 地址

2. **添加 DNS 记录**
   - 在 Cloudflare DNS 设置页面，添加一条 **CNAME** 记录：
     - 名称：`www`（或你想要的子域名）
     - 目标：`你的用户名.github.io`
     - 代理状态：开启橙色云朵 ⚡（Proxied）
   - 如果需要根域名（如 `example.com`）：
     - 类型选择 **CNAME**，名称填 `@`
     - 或者用 **A 记录** 指向 GitHub Pages 的 IP：`185.199.108.153` / `185.199.109.153` / `185.199.110.153` / `185.199.111.153`

3. **开启 HTTPS**
   - Cloudflare 仪表盘 → **SSL/TLS** → **概述**
   - SSL 加密等级选择 **Full （strict）**（需要源站也有证书，GitHub Pages 默认支持）
   - 开启 **Always Use HTTPS**（始终强制 HTTPS）

4. **设置缓存规则（可选）**
   - **SSL/TLS** → **Edge Certificates** → **Always Use HTTPS**：开启
   - **Rules** → **Page Rules**：
     - 规则：`你的域名.com/*.js` → **Cache Level：Standard** + **Edge Cache TTL：a month**
     - 规则：`你的域名.com/*.css` → **Cache Level：Standard** + **Edge Cache TTL：a month**
     - 规则：`你的域名.com/index.html` → **Cache Level：Standard** + **Edge Cache TTL：1 day**

5. **可选：开启 Cloudflare Web Analytics**
   - Cloudflare 仪表盘 → **Analytics & Logs** → **Web Analytics**
   - 添加站点，免费使用，无需在页面嵌入任何脚本

### 方案 B：GitHub Pages + 自定义域名

如果你不需要 CDN 加速，也可直接配置 GitHub Pages 自定义域名：

1. 在仓库 **Settings** → **Pages** → **Custom domain** 输入你的域名
2. 在域名 DNS 管理后台添加一条 CNAME 记录指向 `你的用户名.github.io`
3. 开启 **Enforce HTTPS**（GitHub 会自动申请 Let's Encrypt 证书）

### 验证加速生效

```bash
curl -I https://你的域名
```

响应头中出现 `CF-Cache-Status: HIT` 或 `Server: cloudflare` 即表示 Cloudflare 代理已生效。

## 📝 本地预览

直接双击 `index.html` 即可在浏览器中打开预览，无需任何服务器。

## 💡 自定义提示

- **修改标题**：在 `index.html` 中搜索 `✨ 致 谢 名 单 ✨` 替换
- **修改副标题**：在 `index.html` 中搜索 `感谢每一位陪伴与付出的人` 替换
- **修改粒子数量**：搜索 `PARTICLE_COUNT` 调整数值（移动端自动减半）
- **修改页脚文字**：在 `index.html` 中搜索 `Made with` 替换

## 🧩 技术栈

- 纯 HTML + CSS + JavaScript（零外部依赖）
- Canvas 2D 粒子系统和光点爆炸
- CSS `backdrop-filter` 毛玻璃效果
- Intersection Observer 滚动动画
- CSS 3D Transform 倾角交互
- 响应式设计（CSS Grid + Media Query）

---

> 💡 **提示**：所有视觉效果均为纯前端实现，无需后端。纯静态页面配合 CDN 加速，国内外用户都能获得流畅的访问体验。
