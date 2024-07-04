---
title: "搜索"
description:
published: true
date: "2024-07-04T12:55:28"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-04T09:17:00"
---

## 简介

> [!summary inline end]+ 当前等级
>
> <div class="grid" markdown>
>
> :material-search-web: [搜索](./search.md)
> { .card .skill_search }
>
> </div>

「搜索」是赛博世界的导航，是往目的地的最佳指引。通常分为网络搜索（搜索引擎）与本地搜索两种。

## 技能等级

### 初级

拥有识别广告、内容农场程度的能力。

百度搜索的广告非常多，在不了解的情况下，很容易进入竞价排名的页面，导致无法前往官网。

另一个问题是内容农场，由于网站可以靠广告联盟赚钱，所以一些站长利用 SEO 的漏洞，通过机器生成关键词、伪原创等方式。
让劣质、无用的文章，被搜索引擎以为是优质内容，排上前列。

> [!note]+ 前置技能
>
> [浏览器（初级）](./browser.md)

### 高级

了解常用的搜索引擎命令／语法的能力，包括精确匹配、排除、指定域名和资源扩展名。对于要检索的目标，还需要构造合适的关键词。

### 测验

> [!question]+ 搜索（初级）测试
>
> <div class="button-container">
>     <button class="md-button" onclick="changeQuiz('search_primary')">搜索（初级）测验</button>
>     <button class="md-button" onclick="changeQuiz('search_intermediate')">搜索（中级）测验</button>
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

<script>
    // 题目数据，假设从 JSON 文件或其他数据源加载
    const quizData = {
        "search_primary": {
            "title": "搜索技能测验",
            "questions": [
                {
                    "question": "如何识别正确的 Steam 官网？",
                    "answers": [
                        "<div class='result-item'><span style='color:var(--md-typeset-a-color);'>欢迎来到stbig-正版游戏-客户端下载</span><p>stbig客户端下载，专业游戏平台，为玩家免费领取海量奖品...</p><div class='company-info'>杭州市生物科技有限公司 - 广告</div>", // 0
                        "<div class='result-item'><span style='color:var(--md-typeset-a-color);'>Steam正版下载-安全流畅</span><p>steam正版账号购买，玩家可以在商城购买国区、美区等多地区正版账号...</p><div class='company-info'>武汉兴洪山区网络科技有限公司 - 广告</div></div>", // 1
                        "<div class='result-item'><span style='color:var(--md-typeset-a-color);'>games on steam - 欢迎来到 Steam</span> <span class='official'>官方</span><p>The Steam Summer Sale is on now — find great deals on thousands of games! Plus claim a daily sticker...</p><div class='company-info'>store.steampowered.com</div></div>" // 2
                    ],
                    "correct_answer": 2
                },
                {
                    "question": "如何使用百度搜索某个游戏？",
                    "answers": [
                        "打开浏览器，输入游戏名称，点击搜索",
                        "在搜索结果中点击第一个链接",
                        "随便选择一个结果"
                    ],
                    "correct_answer": 0
                },
                {
                    "question": "如何避免内容农场？",
                    "answers": [
                        "识别广告和低质量内容",
                        "只相信排名靠前的结果",
                        "不使用搜索引擎"
                    ],
                    "correct_answer": 0
                }
            ]
        },
        "search_intermediate": {
            "title": "中级搜索技能测验",
            "questions": [
                {
                    "question": "占位题目 1",
                    "answers": [
                        "答案选项 1",
                        "答案选项 2",
                        "答案选项 3"
                    ],
                    "correct_answer": 2
                }
            ]
        },
        "search_advanced": {
            "title": "高级搜索技能测验",
            "questions": [
                // 高级搜索技能的题目数据
            ]
        }
    };
</script>
