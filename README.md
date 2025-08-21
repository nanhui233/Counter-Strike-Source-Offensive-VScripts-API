# CSSO VScript API 开发文档桌面版 / CSSO VScript API Desktop Documentation

## 简介 / Introduction

本程序是 Counter Strike Source Offensive (CSSO) VScript API 的桌面开发文档，基于 Electron 打包。  
支持中英文切换、函数搜索、分类浏览、详细函数说明等功能，界面美观，体验丝滑。  
所有内容均由 AI 自动生成，包括文档翻译和结构整理，仅供参考。

This application is a desktop documentation for Counter Strike Source Offensive (CSSO) VScript API, packaged with Electron.  
It supports Chinese/English switching, function search, categorized browsing, and detailed function descriptions.  
All content is AI-generated, including translation and structure, and is for reference only.

## 功能特色 / Features

- **中英文切换 / Language Switch**：自动识别或手动切换文档语言。  
  Automatically detect or manually switch between Chinese and English.

- **函数搜索 / Function Search**：支持关键词实时搜索，快速定位 API。  
  Real-time keyword search for quick API lookup.

- **分类浏览 / Categorized Browsing**：按全局函数和类方法分组，结构清晰。  
  Grouped by global functions and class methods for clear structure.

- **详情展示 / Detail View**：点击函数可查看详细用法、参数和描述。  
  Click a function to view detailed usage, parameters, and description.

- **桌面体验 / Desktop Experience**：无需浏览器，直接运行 exe 文件，界面自适应。  
  No browser required, run the exe directly, adaptive UI.

## 使用场景 / Usage Scenarios

- CSSO/VScript 插件开发者查阅 API。  
  For CSSO/VScript plugin developers to consult the API.

- 学习 VScript 语法和函数用法。  
  Learn VScript syntax and function usage.

- 快速检索和对比中英文 API 文档。  
  Quickly search and compare Chinese/English API docs.

- 离线查阅，无需联网。  
  Offline access, no internet required.

## 使用方法 / How to Use

1. 下载并解压本程序。 <a href="https://github.com/nanhui233/Counter-Strike-Source-Offensive-VScripts-API/releases">点我下载</a> 
   Download and extract this application.<a href="https://github.com/nanhui233/Counter-Strike-Source-Offensive-VScripts-API/releases">Click Download</a> 

2. 双击运行 `文档EXE.exe`（或你打包的 exe 文件）。  
   Double-click `文档EXE.exe` (or your packaged exe file).

3. 根据需要切换语言、搜索函数、浏览分类。  
   Switch language, search functions, and browse categories as needed.

## 免责声明 / Disclaimer

- 本文档内容完全由 AI 自动生成，仅供参考。  
  All documentation is AI-generated and for reference only.

- 本程序完全免费，无任何商业用途。  
  This application is completely free and not for commercial use.

- 如有错误或遗漏，欢迎反馈和指正。  
  If there are errors or omissions, feedback is welcome.

## 词条补充 / Entry Correction

如有词条错误或缺失，请在 issue 中提出并补充，  
反馈格式请参考 `functions.json` 内的函数或类结构。

If you find any incorrect or missing entries, please submit and supplement them in the issue section.  
Please follow the function or class format in `functions.json` for your feedback.

```json
[
  {
    "function": "函数名或类名::方法名",
    "signature": "返回类型 函数名(参数类型, ...)",
    "description": "英文描述",
    "description_zh": "中文描述"
  }
]
```

> Powered by Electron & AI  
> © 2025 南方の辉 & Contributors
