---
title: "技能"
description:
published: true
date: "2024-07-04T12:55:28"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-04T09:17:00"
icon: material/pencil-ruler
---

## 技能树

```mermaid
flowchart TD

    classDef advanced fill:#E8B647,color:#000000
    classDef intermediate fill:#91989F,color:#000000
    classDef primary fill:#5C3719,color:#FFFFFF

    browser(浏览器)
    downloader(下载器)
    file(文件)
    install(安装)
    keyboard(键盘)
    search(搜索)
    shopping(网上购物)
    user_account(帐号)

    keyboard --> file --> downloader
    keyboard --> user_account --> shopping
    keyboard --> browser --> search
    file --> install

    click keyboard "../skills/keyboard.html"
    click file "../skills/file.html"
    click install "../skills/install.html"
    click downloader "../skills/downloader.html"
    click browser "../skills/browser.html"
    click search "../skills/search.html"
    click user_account "../skills/user_account.html"
    click shopping "../skills/shopping.md"
```

<!--
<span class="skill_list_icon" markdown="1">
:material-web:{ .browser }
:material-download:{ .downloader }
:material-file:{ .file }
:material-package-variant-plus:{ .install }
:material-keyboard:{ .keyboard }
:material-search-web:{ .search }
:material-shopping:{ .shopping }
:material-package-variant-plus:{ .user_account }
</span>
-->

## 技能清单

<div class="grid" markdown>

:material-web: [浏览器](./browser.md)
{ .card .skill_browser }

:material-download: [下载器](./downloader.md)
{ .card .skill_downloader }

:material-file: [文件](./file.md)
{ .card .skill_file }

:material-package-variant-plus: [安装](./install.md)
{ .card .skill_install }

:material-keyboard: [键盘](./keyboard.md)
{ .card .skill_keyboard }

:material-search-web: [搜索](./search.md)
{ .card .skill_search }

:material-shopping: [网上购物](./shopping.md)
{ .card .skill_shopping }

:material-account: [帐号](./user_account.md)
{ .card .skill_user_account }

</div>
