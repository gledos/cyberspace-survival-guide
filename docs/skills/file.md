---
title: "文件"
description:
published: true
date: "2024-07-03T23:55:28"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-03T16:27:00"
---

## 简介

本指南，将会介绍使用文件所需的技能树。

关于文件，有许多相关知识点：路径、扩展名、重命名、覆盖、可执行文件。（待续）

> [!note]+ 可执行文件
>
> 「可执行文件」大概是很直观的名字，代表可以运行的文件。换句话说，它就是程序，或者程序的部分。

<!-- ## 二进制文件

待续。

> [!tip]+ 外部资料
>
> 维基页面：[binary file][]（二进制）。

[binary file]: https://en.wikipedia.org/wiki/Binary_file -->

## 技能等级

### 初级

了解常见文件扩展名，会移动、复制文件。

### 中级

熟悉树形路径，知道文件名不能使用的符号（保留符）。

### 高级

能够重命名、覆盖文件／文件夹，以及能够压缩与解压缩文件。

### 测验

> [!question]+ 安装（高级）测试
>
> <div class="button-container">
>     <button class="md-button" onclick="changeQuiz('file_primary')">文件（初级）测验</button>
>     <button class="md-button" onclick="changeQuiz('file_intermediate')">文件（中级）测验</button>
>     <button class="md-button" onclick="changeQuiz('file_advanced')">文件（高级）测验</button>
> </div>
>
> <div class="container">
>     <div class="question-container" data-quiz="file_primary">
>         <div class="question" id="question"></div>
>         <ul class="task-list" id="answers"></ul>
>         <button class="md-button" onclick="submitAnswer()">提交答案</button>
>         <button class="md-button" onclick="retryQuiz()">全部重试</button>
>     </div>
> </div>

<script>
    // 题目数据，假设从 JSON 文件或其他数据源加载
    const quizData = {
        "file_primary": {
            "title": "文件（初级）技能测验",
            "questions": [
                {
                    "question": "以下文件扩展名，不是图片的是？",
                    "answers": [
                        ".jpg",
                        ".png",
                        ".css"
                    ],
                    "correct_answer": 2
                }
            ]
        },
        "file_intermediate": {
            "title": "文件（中级）技能测验",
            "questions": [
                {
                    "question": "以下文件名，能够在 Windows 下正常创建的是？",
                    "answers": [
                        "[test]-(index).html.7z",
                        "why?.mp4",
                        "\\^o^/.txt"
                    ],
                    "correct_answer": 0
                }
            ]
        },
        "file_advanced": {
            "title": "文件（高级）技能测验",
            "questions": [
                {
                    "question": "占位题目 1",
                    "answers": [
                        "答案选项 1",
                        "答案选项 2",
                        "答案选项 3（正确答案）"
                    ],
                    "correct_answer": 2
                }
            ]
        }
    };
</script>
