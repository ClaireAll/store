# Storage

个人物品储存/库存管理平台，用于记录物品、位置、分类、标签和图片。

## 技术栈

- Next.js 16
- React 19
- Tailwind CSS 4
- shadcn/ui 约定
- 后续接入 Supabase PostgreSQL
- 后续接入阿里云 OSS
- 后续支持微信小程序客户端

## 本地开发

```bash
npm install
npm run dev
```

打开 http://localhost:3888。

## 引入阿里图标库

当前项目使用阿里 iconfont 的 Font class 在线链接：

```css
@import url("//at.alicdn.com/t/c/font_4012350_ae05l3rfouo.css");
```

该链接已在 `src/app/globals.css` 中全局引入。

使用图标时，在页面或组件中添加对应的 iconfont class：

```tsx
<i className="iconfont icon-xxx" />
```

其中 `icon-xxx` 替换为阿里图标库项目中对应图标的 class 名称。

如果后续在阿里图标库中新增或删除图标，需要先在 iconfont 项目中更新代码，然后同步替换 `src/app/globals.css` 里的在线链接。
