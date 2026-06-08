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

## ⚡ 腾讯云 CDN 加速配置

由于 GitHub Pages 在国内访问速度较慢，推荐使用腾讯云 CDN 或 EdgeOne 加速。

> ⚠️ **重要前提：ICP 备案**
> 使用中国大陆 CDN 加速服务需要域名已完成 **ICP 备案**。如果域名未备案，请先通过腾讯云或阿里云等服务商提交备案申请（通常需要 5-20 个工作日）。如果域名不方便备案，可跳过此节，直接使用 GitHub Pages 原链访问。

### 方案 A：腾讯云 EdgeOne（推荐）

[EdgeOne](https://cloud.tencent.com/product/teo) 是腾讯云的边缘安全加速平台，配置更简单。

1. **登录腾讯云控制台** → 搜索 "EdgeOne"
2. **创建站点**
   - 填写你的自定义域名（例如 `thanks.yourdomain.com`）
   - 选择加速区域（全球/中国大陆/境外）
3. **添加源站**
   - 源站类型选择 **「源站域名」**
   - 填写你的 GitHub Pages 地址（`你的用户名.github.io`）
   - 端口保持默认 443（HTTPS）
4. **DNS 解析**
   - 在域名 DNS 管理后台，添加一个 CNAME 记录
   - 主机记录：`thanks`
   - 记录值：EdgeOne 提供的 CNAME 地址
5. **HTTPS 配置**
   - 在 EdgeOne 中申请或上传 SSL 证书
   - 开启 **强制 HTTPS**
6. **缓存规则**（可选）
   - 静态文件（html, js, css）建议缓存 7-30 天

### 方案 B：腾讯云 CDN

1. **登录腾讯云控制台** → 搜索 "CDN"
2. **添加域名**
   - 填写你的自定义域名
   - 加速区域按需选择
3. **源站配置**
   - 源站类型：**源站域名**
   - 源站地址：`你的用户名.github.io`
   - 回源协议：HTTPS
4. **HTTPS 配置**
   - 上传/申请 SSL 证书
   - 开启 HTTPS 强制跳转
5. **缓存配置**
   - 业务类型：静态加速
   - 文件类型缓存规则中添加：`index.html` 缓存 1 天，`.js` 缓存 30 天

### 验证 CDN 生效

```bash
# 查看 DNS 解析
dig thanks.yourdomain.com

# 或者使用 curl 测试
curl -I https://thanks.yourdomain.com
```

响应头中出现 `X-Cache-Lookup: Hit From ` 或类似标记说明 CDN 已生效。

## 📝 本地预览

直接双击 `index.html` 即可在浏览器中打开预览，无需任何服务器。

## 💡 自定义提示

- **修改标题**：在 `index.html` 中搜索 `✨ 致 谢 名 单 ✨` 替换
- **修改副标题**：在 `index.html` 中搜索 `感谢每一位陪伴与付出的人` 替换
- **修改粒子数量**：搜索 `PARTICLE_COUNT` 调整数值（移动端自动减半）
- **修改页脚文字**：在 `index.html` 中搜索 `Made with` 替换

## 🧩 技术栈

- 纯 HTML + CSS + JavaScript（零外部依赖）
- Canvas 2D 粒子系统和五彩纸屑
- CSS `backdrop-filter` 毛玻璃效果
- Intersection Observer 滚动动画
- CSS 3D Transform 倾角交互
- 响应式设计（CSS Grid + Media Query）

---

> 💡 **提示**：所有视觉效果均为纯前端实现，无需后端。纯静态页面配合 CDN 加速，国内外用户都能获得流畅的访问体验。
