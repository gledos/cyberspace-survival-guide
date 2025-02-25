---
title: "Steam"
description:
published: true
date: "2024-07-03T23:55:28"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-03T16:27:00"
icon: material/steam
---

## 简介

本生存指南，将会介绍使用 Steam 所需的技能树，方便玩家使用 Steam。

> [!abstract]+ 使用 Steam 所需的技能树
>
> ```mermaid
> flowchart TD
>
>     classDef advanced fill:#E8B647,color:#000000
>     classDef intermediate fill:#91989F,color:#000000
>     classDef primary fill:#5C3719,color:#FFFFFF
>
>     browser(浏览器)
>     downloader(下载器)
>     file(文件)
>     install(安装)
>     keyboard(键盘)
>     search(搜索)
>     shopping(网上购物)
>     user_account(帐号)
>
>     keyboard --> file --> downloader
>     keyboard --> user_account --> shopping
>     keyboard --> browser --> search
>     file --> install
>
>     click keyboard "../skills/keyboard.html"
>     click file "../skills/file.html"
>     click install "../skills/install.html"
>     click downloader "../skills/downloader.html"
>     click browser "../skills/browser.html"
>     click search "../skills/search.html"
>     click user_account "../skills/user_account.html"
>     click shopping "../skills/shopping.md"
> ```

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

## 操作细节

> [!note]+ 0. 获悉 Steam 官网的链接。
>
> 目标：打开电脑的浏览器，通过搜索引擎寻找 Steam 官网。
>
> 难点：避开搜索引擎的竞价广告。
>
> 所需技能：「[键盘][keyboard]」「鼠标」「[浏览器（初级）][browser]」「[搜索（初级）][search]」
>
> <!-- 之所以有键盘，是因为链接 -->

[keyboard]: ../skills/keyboard.md
[browser]: ../skills/browser.md
[search]: ../skills/search.md

> [!note]+ 1. 使用浏览器进入 Steam 的官网。
>
> 从搜索引擎给出的链接直接进入，或者在地址栏输入 [https://store.steampowered.com/][steam] 并按下 Enter。
>
> 如果无法正常开启 Steam 官网，那么需要使用加速器、Proxy/VPN，或者 SNI 伪装工具，以绕过 GFW 审查。
>
> 所需技能：「[浏览器（初级）][browser]」「Proxy」「SNI 伪装」

[steam]: https://store.steampowered.com/

> [!note]+ 2. 从网页中找到下载链接并下载。
>
> Steam 官网的右上角，有绿色的「安装 Steam」按钮，点击就会来到下载页面。该下载页面会出现较大的蓝色下载按钮，
> 点击后就会触发浏览器自带的下载器。
>
> 因为是程序的安装包，所以下载到任意位置都没问题。
>
> 所需技能：「[下载器][downloader]」

[downloader]: ../skills/downloader.md

> [!note]+ 3. 安装 Steam 客户端
>
> 打开下载到的安装包，完成 Steam 客户端的安装。
>
> 所需技能：「[安装][install]」
>
> <!-- 打开下载的安装文件，按照提示进行安装。 -->
> <!-- 选择安装路径并完成安装。 -->

[install]: ../skills/install.md

> [!note]+ 4. 启动 Steam
>
> 安装好的 Steam，应该会在桌面创建快捷方式，可以执行该快捷方式，来运行 Steam。
>
> 难点：可能意外删除快捷方式，导致无法找到 Steam。这种情况可以在开始 Windows 的菜单里，搜索 Steam，就能找到它。
> 右键菜单里有「打开文件位置」，就能找到它的位置了。
>
> 如果它是快捷方式，那么复制一份到桌面即可。如果它是 `.exe` 扩展名的可执行文件，那么右键「发送到」「桌面快捷方式」就好。
>
> 所需技能：「[文件][file]」

[file]: ../skills/file.md

> [!note]+ 5. 创建／登录 Steam 账户
>
> 所需技能：「[帐号][user_account]」
>
> <!-- 打开已安装的 Steam 客户端，点击“创建新账户”。 -->
> <!-- 按照提示填写个人信息并完成注册。 -->
> <!-- 在 Steam 客户端中输入注册的账号和密码，点击“登录”。 -->

[user_account]: ../skills/user_account.md

> [!note]+ 6. 浏览 Steam 商店
>
> 需要熟悉 Steam 客户端的用户界面，避免出现找不到下好的游戏或者商店的情况。可能需要设置下载区域（服务器），
> 修改开机启动等设置。
>
> 然后要注意的是，Steam 商店的搜索功能没有模糊搜索。
>
> 所需技能：「搜索」「设置管理（软件）」
>
> <!-- 登录后，点击“商店”标签页，可以浏览游戏、软件、DLC 等内容。 -->
> <!-- 使用搜索栏查找特定游戏或软件。 -->

> [!note]+ 7. 购买并下载游戏
>
> 在 Steam 大陆区、香港区，能使用支付宝进行购买，之后将安装到合适的硬盘、路径下。
>
> 所需技能：「[网上购物][shopping]」「[下载器][downloader]」
>
> <!-- 找到想要购买的游戏，点击游戏页面上的“添加到购物车”按钮。 -->
> <!-- 点击购物车，进行结算并完成购买。 -->
> <!-- 完成购买后，游戏会自动下载到你的库中。 -->

[shopping]: ../skills/shopping.md

> [!note]+ 8. 运行游戏
>
> 下载完成后，Steam 会在桌面创建新游戏的快捷方式，可以执行该快捷方式，来运行游戏。如果删除后想要找回快捷方式，
> 可以在 Steam 的「库」页面中，右键游戏，开启「管理」二级菜单中，然后点击「新增桌面快捷方式」即可。
>
> 通常没有太大的困难，不过可能还是有一些潜在问题：
>
> 1.  部分游戏有特殊 DRM，需要注册／登录该平台的帐号。
> 2.  部分游戏需要安装汉化补丁，详情请参考「Mod 安装」事件。（待编写）
> 3.  部分需要联网的游戏，需要 Proxy／加速器才能正常使用。
>
> 所需技能：「[帐号][user_account]」「Proxy」
>
> <!-- 在 Steam 客户端中，点击“库”标签页，找到已购买的游戏。 -->
> <!-- 点击“安装”按钮，选择安装路径并开始安装。 -->
> <!-- 安装完成后，点击“运行”按钮即可开始游戏。 -->

> [!note]+ 9. 配置游戏设置
>
> 进入游戏后，建议前往游戏设置，将画面、操作等设置最佳化。
>
> 所需技能：「设置管理（游戏）」
>
> <!-- 进入游戏后，根据需要调整游戏设置，如画质、控制键位、音效等。 -->
