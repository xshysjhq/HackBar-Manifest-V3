# HackBar (Manifest V3)

[English Version](README_en.md)

## 概述

HackBar 是一个用于渗透测试的浏览器扩展，现已迁移到 Manifest V3 标准，完全兼容 Chrome 和 Edge 浏览器。该工具为网络安全研究人员和开发人员提供了便捷的方式来测试 Web 应用程序的安全性。

## 功能特性

### 加密/解密功能
- MD5, SHA-1, SHA-256 哈希计算
- ROT13 编码
- Base64 编码/解码
- URL 编码/解码
- Hex 编码/解码

### SQL 注入辅助
- MySQL/MSSQL/Oracle 字符转换
- 基本信息列构造
- UTF-8/Latin-1 编码转换
- UNION SELECT 语句生成
- 空格转内联注释

### XSS 攻击辅助
- String.fromCharCode 转换
- HTML 字符转换
- XSS Alert 模板

### LFI (本地文件包含) 测试
- 基本 LFI 测试向量
- 空字节绕过
- 双重编码
- 路径和点截断
- 过滤器绕过技巧
- 包装器利用 (php://filter, zip://, data://, expect://, input://)

### 其他功能
- JSON 格式化
- 字符串大小写转换

## 安装方法

1. 下载或克隆此仓库
2. 打开 Chrome/Edge 浏览器
3. 导航到 `chrome://extensions/` 或 `edge://extensions/`
4. 启用"开发者模式"
5. 点击"加载已解压的扩展程序"
6. 选择包含此项目的文件夹

## 使用说明

1. 在开发者工具中打开 HackBar 面板
2. 在 URL 字段中输入目标地址
3. 使用各种工具修改 URL 或 POST 数据
4. 点击"Execute"执行请求

## 注意事项

此工具仅用于合法的渗透测试和安全研究，请勿用于非法目的。

## 许可证

此项目基于原始 HackBar 扩展进行修改，以符合 Manifest V3 规范。