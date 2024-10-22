---
title: "浏览器"
description:
published: true
date: "2024-07-03T23:55:28"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-03T16:27:00"
icon: material/web
---

## 简介

本指南，将会介绍使用浏览器相关技能树。

浏览器可能是赛博空间最重要的载具，因为浏览器具有很强的通用性，因为浏览器是几乎存在于所有的平台。

> [!abstract]- 原理
>
> 浏览器能阅读网络上的网站，原理是：
>
> 1.  浏览器通过 URL，获取到 HTML（超文本标记语言格式）的网页文件，作为缓存。
> 2.  浏览器通过排版引擎，将 HTML 排列为网站。
>
> 这些网页文件缓存，会被排版引擎渲染／排列为用户可见的网站。

## 技能等级

### 初级

掌握地址栏的用法，以及对链接（URL）有基础的认识。对网站无法正常浏览，显示 HTTP 404、「连接被重置」等错误信息有基础认识。

> [!tip]+ 外部资料
>
> 维基页面：[地址栏][]、[链接][]。

[地址栏]: https://zh.wikipedia.org/wiki/地址栏

[链接]: https://zh.wikipedia.org/wiki/统一资源定位符

## 中级

了解小书签、插件／扩展等用法。

## 高级

了解用户脚本（user script）、用户样式（user style/css）、开发者工具等用法。以及对网页的 HTML、JavaScript 与 CSS，
有基础认识。

### 测验

> [!question]+ 浏览器测试
>
> <div class="button-container">
>     <button class="md-button" onclick="changeQuiz('browser_primary')">浏览器（初级）测验</button>
>     <button class="md-button" onclick="changeQuiz('browser_intermediate')">浏览器（中级）测验</button>
>     <button class="md-button" onclick="changeQuiz('browser_advanced')">浏览器（高级）测验</button>
> </div>
>
> <div class="container">
>     <div class="question-container" data-quiz="browser_primary">
>         <div class="question" id="question"></div>
>         <ul class="task-list" id="answers"></ul>
>         <button class="md-button" onclick="submitAnswer()">提交答案</button>
>         <button class="md-button" onclick="retryQuiz()">全部重试</button>
>     </div>
> </div>

<script>
    // 题目数据，假设从 JSON 文件或其他数据源加载
    const quizData = {
        "browser_primary": {
            "title": "浏览器（初级）技能测验",
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
        "browser_intermediate": {
            "title": "浏览器（中级）技能测验",
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
        "browser_advanced": {
            "title": "浏览器（高级）技能测验",
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
    };
</script>

