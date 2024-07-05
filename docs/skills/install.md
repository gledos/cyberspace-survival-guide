---
title: "安装"
description:
published: true
date: "2024-07-04T23:25:00"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-04T23:25:00"
icon: material/package-variant-plus
---

## 简介

安装程序或者系统，步骤通常如下：[^wiki]

[^wiki]: <https://zh.wikipedia.org/zh-tw/安裝程式>

1.  欢迎使用该软体的讯息提示
2.  阅读最终用户许可条款（EULA）
3.  选择要安装的部分
4.  选择要安装到何处
5.  等待安装
6.  完成页面，通常会有软件文档、运行软件以及重启电脑，以上三种选项。

## 技能等级

### 高级

拥有运行安装程序，并确保安装到正确位置的能力。

需要注意的是，一些兼容性不高的软件，需要安装到纯英文目录下，防止运行出错。使用下划线或者短横线替代空格，效果更好。

> [!note]+ 前置技能
>
> [文件（初级）](./file.md)

### 测验

> [!question]+ 安装（高级）测试
>
> <div class="container">
>     <div class="question-container" data-quiz="install_advanced">
>         <div class="question" id="question"></div>
>         <ul class="task-list" id="answers"></ul>
>         <button class="md-button" onclick="submitAnswer()">提交答案</button>
>         <button class="md-button" onclick="retryQuiz()">全部重试</button>
>     </div>
> </div>

<script>
    // 题目数据，假设从 JSON 文件或其他数据源加载
    const quizData = {
        "install_advanced": {
            "title": "安装（高级）技能测验",
            "questions": [
                {
                    "question": "以下安装路径，什么最好？",
                    "answers": [
                        "E:\\game_data\\",
                        "E:\\游戏\\",
                        "E:\\software site\\"
                    ],
                    "correct_answer": 0
                }
            ]
        }
    };
</script>
