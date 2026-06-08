/**
 * ============================================
 *  📋 致谢名单数据文件
 *  ============================================
 *  编辑此文件即可更新页面内容，无需修改 index.html
 *  格式说明见下方示例
 * ============================================
 */

// ============================================
//  🏷️ 分类定义
//  ============================================
//  key: 分类标识（用于 category 字段）
//  label: 显示在页面标签上的文字
//  color: 标签颜色
const CATEGORIES = {
  all:         { label: '🌟 全部',     color: '#6366f1' },
  sponsor:     { label: '💎 赞助者',   color: '#f59e0b' },
  contributor: { label: '🚀 贡献者',   color: '#10b981' },
  friend:      { label: '🤝 朋友',     color: '#3b82f6' },
  special:     { label: '❤️ 特别感谢', color: '#ec4899' }
};

// ============================================
//  👥 致谢名单数据
//  ============================================
//  字段说明:
//    name     - [必填] 姓名或昵称
//    role     - [可选] 身份/头衔（如 "核心贡献者"）
//    message  - [可选] 感谢语（描述贡献或致谢理由）
//    category - [必填] 分类标识，取值：sponsor | contributor | friend | special
//    avatar   - [可选] 头像图片 URL（正方形图片最佳）
//               留空则根据姓名首字自动生成头像
//
//  📝 编辑方法: 在大括号 {} 间添加条目，注意最后一个条目后面不要加逗号
//  💡 新增条目示例:
//    {
//      name: '张三',
//      role: '核心贡献者',
//      message: '感谢你的代码贡献和日夜付出',
//      category: 'contributor',
//      avatar: ''
//    },
//
const THANK_YOU_LIST = [
  // -------- 贡献者 --------
  {
    name: 'aklnaaw',
    role: '👨‍💻 开发和维护',
    message: '负责项目的日常开发和维护工作，持续优化和修复',
    category: 'contributor',
    avatar: '头像/aklnaaw.png'
  },

  // -------- 赞助者 --------
  {
    name: '烤炉',
    message: '感谢烤炉的大力支持！🔥',
    category: 'sponsor',
    avatar: '头像/烤炉.jpg'
  },

  // -------- 特别感谢 --------
  {
    name: 'Cloudflare',
    role: '⚡ CDN 加速',
    message: '感谢 Cloudflare 提供的全球 CDN 网络加速服务，让访问更快更稳定',
    category: 'special',
    avatar: 'https://www.cloudflare.com/favicon.ico'
  },
  {
    name: '开源社区',
    role: '🌍 开源贡献者',
    message: '感谢所有提交 Issue 和 PR 的开发者，你们的每一份贡献都让项目变得更好',
    category: 'special',
    avatar: 'https://github.githubassets.com/favicons/favicon.svg'
  },
  {
    name: '你',
    role: '👀 正在阅读的你',
    message: '感谢你关注这个项目，你的支持是我们前进的最大动力 ❤️',
    category: 'special',
    avatar: ''
  }
];
