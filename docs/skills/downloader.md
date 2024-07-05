---
title: "下载器"
description:
published: true
date: "2024-07-05T16:13:00"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-05T16:13:00"
icon: material/download
---

## 简介

下载器是下载文件的工具，通常具有断线重连、多线程以及文件校验功能。

下载器不仅可以作为独立软件，也可能是内置到其他软件里。比如内置到浏览器、网盘等软件中。

## 技能等级

### 高级

能够配置下载路径到合适的位置，不会出现找不到下载文件的情况。

> [!note]+ 前置技能
>
> [文件（初级）](./file.md)

### 测验

> [!question]+ 下载器技能测验
>
> <div class="container">
>     <div class="question-container" data-quiz="downloader_advanced">
>         <div class="question" id="question"></div>
>         <ul class="task-list" id="answers"></ul>
>         <button class="md-button" onclick="submitAnswer()">提交答案</button>
>         <button class="md-button" onclick="retryQuiz()">全部重试</button>
>     </div>
> </div>

<script>
    // 题目数据，假设从 JSON 文件或其他数据源加载
    const quizData = {
        "downloader_advanced": {
            "title": "下载器技能测验",
            "questions": [
                {
                    "question": "忘记检查文件的下载路径，那么文件可能被下载到什么路径？",
                    "answers": [
                        "C:\\Users\\name\\Downloads\\",
                        "C:\\Users\\name\\Documents\\",
                        "C:\\Program Files\\"
                    ],
                    "correct_answer": 0
                }
            ]
        }
    };
</script>
