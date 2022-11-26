# @liangshen/typora

**用于获取 Typora 软件的偏好设置信息**

- 良好的偏好类型声明
- 使用 ESModule 模块方式

## 安装

```shell
npm i @liangshen/typora -S
```

## 使用方法

```typescript
import typora from '@liangshen/typora';

const preferences = await typora.getPreferences();
console.log(preferences);
```