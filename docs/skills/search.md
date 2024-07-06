---
title: "搜索"
description:
published: true
date: "2024-07-04T12:55:28"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-04T09:17:00"
icon: material/search-web
---

## 简介

「搜索」是赛博世界的导航，是往目的地的最佳指引。通常分为网络搜索（搜索引擎）与本地搜索两种。

## 技能等级

### 初级

拥有识别广告、内容农场程度的能力。

百度搜索的广告非常多，在不了解的情况下，很容易进入竞价排名的页面，导致无法前往官网。这些广告，
通常会标注「广告」「推广」字样或以不同的颜色背景显示。

另一个问题是内容农场，由于网站可以靠广告联盟赚钱，所以一些站长利用 SEO 的漏洞，通过机器生成关键词、伪原创等方式。
让劣质、无用的文章，被搜索引擎以为是优质内容，排上前列。

> [!note]+ 前置技能
>
> [浏览器（初级）](./browser.md)

操作步骤和工具：

### 中级

认识精准匹配与模糊搜索的差异，能在简单查找数次后，分清某个搜索工具是否支持模糊搜索。

浏览器支持扩展或插件时，知道如何使用 uBlock Origin 等广告拦截工具，减少广告的干扰。

> [!note]+ 前置技能
>
> [浏览器（中级）](./browser.md)

### 高级

了解常用的搜索引擎命令／语法的能力，包括精确匹配、排除、指定域名和资源扩展名。对于要检索的目标，还需要构造合适的关键词。



### 测验

> [!question]+ 搜索测试
>
> <div class="button-container">
>     <button class="md-button" onclick="changeQuiz('search_primary')">搜索（初级）测验</button>
>     <button class="md-button" onclick="changeQuiz('search_advanced')">搜索（高级）测验</button>
> </div>
>
> <div class="container">
>     <div class="question-container" data-quiz="search_primary">
>         <div class="question" id="question"></div>
>         <ul class="task-list" id="answers"></ul>
>         <button class="md-button" onclick="submitAnswer()">提交答案</button>
>         <button class="md-button" onclick="retryQuiz()">全部重试</button>
>     </div>
> </div>

<!-- <button class="md-button" onclick="changeQuiz('search_intermediate')">搜索（中级）测验</button> -->

<script>
    // 题目数据，假设从 JSON 文件或其他数据源加载
    const quizData = {
        "search_primary": {
            "title": "搜索技能测验",
            "questions": [
                {
                    "question": "（1/3）以下搜索结果里，Steam 官网是？",
                    "answers": [
                        "<div class='result-item'><span style='color:var(--md-typeset-a-color);'>欢迎来到stbig-正版游戏-客户端下载</span><p>stbig客户端下载，专业游戏平台，为玩家免费领取海量奖品...</p><div class='company-info'>杭州市生物科技有限公司 - 广告</div>", // 0
                        "<div class='result-item'><span style='color:var(--md-typeset-a-color);'>Steam正版下载-安全流畅</span><p>steam正版账号购买，玩家可以在商城购买国区、美区等多地区正版账号...</p><div class='company-info'>武汉兴洪山区网络科技有限公司 - 广告</div></div>", // 1
                        "<div class='result-item'><span style='color:var(--md-typeset-a-color);'>games on steam - 欢迎来到 Steam</span> <span class='official'>官方</span><p>The Steam Summer Sale is on now — find great deals on thousands of games! Plus claim a daily sticker...</p><div class='company-info'>store.steampowered.com</div></div>" // 2
                    ],
                    "correct_answer": 2
                },
                {
                    "question": "（2/3）如果要查询某个软件的官网，应该避开什么样的结果？",
                    "answers": [
                        "官方网站",
                        "官方中文绿色免安装版",
                        "官网"
                    ],
                    "correct_answer": 1
                },
                {
                    "question": "（3/3）如果要搜索香蕉的百科，下列搜索选项，谁的结果可能更好？",
                    "answers": [
                        "香蕉的百科是什么？",
                        "香蕉 百科"
                    ],
                    "correct_answer": 1
                }
            ]
        },
        "search_intermediate": {
            "title": "中级搜索技能测验",
            "questions": [
                {
                    "question": "占位题目 1",
                    "answers": [
                        "答案选项 0",
                        "答案选项 1",
                        "答案选项 2（正确答案）"
                    ],
                    "correct_answer": 2
                }
            ]
        },
        "search_advanced": {
            "title": "高级搜索技能测验",
            "questions": [
                {
                    "question": "占位题目 1",
                    "answers": [
                        "答案选项 0",
                        "答案选项 1",
                        "答案选项 2（正确答案）"
                    ],
                    "correct_answer": 2
                }
            ]
        }
    };
</script>
