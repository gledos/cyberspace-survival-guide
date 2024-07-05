---
title: "键盘"
description:
published: true
date: "2024-07-03T23:55:28"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-03T16:27:00"
icon: material/keyboard
---

## 简介

本指南，将会介绍使用键盘所需的技能。

## 技能等级

### 初级

认识主键盘区上，所有按钮的作用。包括按下 Shift 键，就能「换档」，能输入大写字母以及数字上面的符号。
能够输入 ASCII 可视字符，比如文件路径、URL。

![由 Mysid 绘制的键盘图：https://en.wikipedia.org/wiki/File:Qwerty.svg](https://upload.wikimedia.org/wikipedia/commons/3/3a/Qwerty.svg)
{: style="background-color: white" }

> [!note]+ 潜在前置技能
>
> ASCII

### 中级

掌握输入法，能输入汉字、中文标点符号。

### 高级

熟悉常用的组合键，新软件里的组合键也能快速上手。常用的组合键有：

+   关闭：++ctrl+w++
+   新建：++ctrl+t++
+   全选：++ctrl+a++
+   保存：++ctrl+s++
+   搜索：++ctrl+f++
+   撤销：++ctrl+z++
+   剪切：++ctrl+x++
+   复制：++ctrl+c++
+   粘贴：++ctrl+v++
+   测试：++ctrl+shift+alt+7++

### 测验

> [!question]+ 键盘测试
>
> <div class="button-container">
>     <button class="md-button" onclick="changeQuiz('keyboard_primary')">键盘（初级）测验</button>
>     <button class="md-button" onclick="changeQuiz('keyboard_intermediate')">键盘（中级）测验</button>
>     <button class="md-button" onclick="changeQuiz('keyboard_advanced')">键盘（高级）测验</button>
> </div>
>
> <div class="container">
>     <div class="question-container" data-quiz="keyboard_primary">
>         <div class="question" id="question"></div>
>         <ul class="task-list" id="answers"></ul>
>         <button class="md-button" onclick="submitAnswer()">提交答案</button>
>         <button class="md-button" onclick="retryQuiz()">全部重试</button>
>     </div>
> </div>

<script>
    // 题目数据，假设从 JSON 文件或其他数据源加载
    const quizData = {
        "keyboard_primary": {
            "title": "键盘（初级）技能测验",
            "questions": [
                {
                    "question": "如何输入「&」符号？",
                    "answers": [
                        "<span class='keys'><kbd class='key-control'>Ctrl</kbd><span>+</span><kbd class='key-a'>A</kbd><span>+</span><kbd class='key-n'>N</kbd><span>+</span><kbd class='key-d'>D</kbd></span>",
                        "<span class='keys'><kbd class='key-shift'>Shift</kbd><span>+</span><kbd class='key-7'>7</kbd></span>",
                        "<span class='keys'><kbd class='key-control'>Ctrl</kbd><span>+</span><kbd class='key-7'>7</kbd></span>"
                    ],
                    "correct_answer": 1
                }
            ]
        },
        "keyboard_intermediate": {
            "title": "键盘（中级）技能测验",
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
        "keyboard_advanced": {
            "title": "键盘（高级）技能测验",
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

