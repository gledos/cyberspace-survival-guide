---
title: "帐号"
description:
published: true
date: "2024-07-04T23:25:00"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-04T23:25:00"
icon: material/package-variant-plus
---

## 简介

帐号是软件、App 或服务，通过用户名、密码等认证手段，授予相应权限的机制。

## 技能等级

### 初级

拥有电子邮箱或者手机号，这是许多服务对注册帐号的基本要求。

### 高级

能够使用密码管理工具，管理各种帐号不同的密码，防止忘记密码或密码相同导致的安全隐患。

### 测验

> [!question]+ 帐号技能测验
>
> <div class="button-container">
>     <button class="md-button" onclick="changeQuiz('user_account_primary')">帐号（初级）技能测验</button>
>     <button class="md-button" onclick="changeQuiz('user_account_advanced')">帐号（高级）技能测验</button>
> </div>
>
> <div class="container">
>     <div class="question-container" data-quiz="user_account_advanced">
>         <div class="question" id="question"></div>
>         <ul class="task-list" id="answers"></ul>
>         <button class="md-button" onclick="submitAnswer()">提交答案</button>
>         <button class="md-button" onclick="retryQuiz()">全部重试</button>
>     </div>
> </div>

<script>
    // 题目数据，假设从 JSON 文件或其他数据源加载
    const quizData = {
        "user_account_primary": {
            "title": "帐号（初级）技能测验",
            "questions": [
                {
                    "question": "是否拥有电子邮箱或者手机号？",
                    "answers": [
                        "拥有",
                        "没有"
                    ],
                    "correct_answer": 0
                }
            ]
        },
        "user_account_advanced": {
            "title": "帐号（高级）技能测验",
            "questions": [
                {
                    "question": "有使用密码管理工具吗？例如 KeePass、1Password 和 Bitwarden 或是其他的方案。",
                    "answers": [
                        "有在使用",
                        "没有使用"
                    ],
                    "correct_answer": 0
                }
            ]
        }
    };
</script>
