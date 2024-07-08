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
能够输入 ASCII 中的可视字符，就算达标，比如在输入文件路径、URL 时，能分清斜线与反斜线。

```ascii
.--------------------------------------------------------------------.
| [_]  [_][_][_][_] [_][_][_][_] [_][_][_][_] [P][S][P]  o   o   o   |
|                                                                    |
| [`][1][2][3][4][5][6][7][8][9][0][-][=][_<] [I][H][U] [N][/][*][-] |
| [Tb][Q][W][E][R][T][Y][U][I][O][P][{][}][\] [D][E][D] [7][8][9]|+| |
| [CLK][A][S][D][F][G][H][J][K][L][;]['][ENT]           [4][5][6]|_| |
| [SHIFT][Z][X][C][V][B][N][M][,][.][/][SHIF]    [^]    [1][2][3]|E| |
| [CT][__][AL][_____________][AL][__][__][CT] [<][V][>] [_0__][.]|_| |
`--------------------------------------------------------------------'

参考自：<https://www.asciiart.eu/computers/keyboards>
```

![由 Mysid 绘制的键盘图：https://en.wikipedia.org/wiki/File:Qwerty.svg](https://upload.wikimedia.org/wikipedia/commons/3/3a/Qwerty.svg)
{: style="background-color: white" }

> [!note]+ 潜在前置技能
>
> ASCII

### 中级

<style>
.white_background_color > details > .mermaid {
    background-color: white !important;
}
</style>

<div class="white_background_color" markdown="1">

> [!note inline end]+ 快捷键含义象限
>
> ```mermaid
> %%{init: {"quadrantChart": {"chartWidth": 200, "chartHeight": 200}}}%%
> quadrantChart
>     x-axis "单个按键" --> "多个按键"
>     y-axis "中文" --> "英文"
>     shortcut, hotkey: [0.5, 0.75]
>     "组合键": [0.75, 0.35]
>     "快捷键、热键": [0.5, 0.15]
> ```

了解热键、组合键、快捷键这些概念。

</div>

需要注意的是，快捷键的英文 shortcut、hotkey，对单个按键或多个按键的倾向性不高。而中文的快捷键，具有组合键的倾向性。

掌握输入法，能输入汉字、中文标点符号。（如果使用手写板、语音输入，可以不掌握）

### 高级

熟悉常用的快捷键，新软件里的快捷键也能快速上手。常用的快捷键有：

<div class="grid cards" markdown="1">

+   :material-close: 关闭 ++ctrl+w++
+   :material-tab-plus: 新建 ++ctrl+t++
+   :material-check-all: 全选 ++ctrl+a++
+   :material-content-save: 保存 ++ctrl+s++
+   :material-search-web: 搜索 ++ctrl+f++
+   :material-redo-variant: 撤销 ++ctrl+z++
+   :material-content-cut: 剪切 ++ctrl+x++
+   :material-content-copy: 复制 ++ctrl+c++
+   :material-content-paste: 粘贴 ++ctrl+v++

</div>

对于能自己绑定新的快捷键时，能够注意到或者解决各种问题，比如快捷键已被占用，或者与其他软件冲突的问题。

### 测验

> [!question]+ 键盘技能测验
>
> <div class="button-container">
>     <button class="md-button" onclick="changeQuiz('keyboard_primary')">初级测验</button>
>     <button class="md-button" onclick="changeQuiz('keyboard_intermediate')">中级测验</button>
>     <button class="md-button" onclick="changeQuiz('keyboard_advanced')">高级测验</button>
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

## 指南

<ruby>微软<rt>Microsoft</rt></ruby>有篇叫《[使用键盘][]》的文章，详细介绍了键盘布局，每个按键的作用，以及快捷键。
微软的键盘指南，优点是足够详尽，缺点可能有点长，会有些枯燥。

[使用键盘]: https://support.microsoft.com/zh-cn/windows/使用键盘-18b2efc1-9e32-ba5a-0896-676f9f3b994f

<!--
    Using your keyboard
    <https://support.microsoft.com/en-us/windows/using-your-keyboard-18b2efc1-9e32-ba5a-0896-676f9f3b994f>
-->

<style>
    canvas {
        border: 1px solid #ccc;
    }
    .message {
        margin-top: 20px;
        text-align: center;
    }
</style>

> [!note]- 失败的实验型交互式键盘教学
>
> <canvas id="keyboardCanvas" width="600" height="300"></canvas>
> <div class="message">点击此处文字开始教学模式</div>

<script>
    document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("keyboardCanvas");
    const ctx = canvas.getContext("2d");
    const messageDiv = document.querySelector(".message");

    const keyMappings = {
        "Ctrl+C": "复制",
        "Ctrl+V": "粘贴",
        "Ctrl+X": "剪切",
        "Ctrl+Alt+Del": "打开任务管理器"
    };

    let currentMode = "teaching";
    let currentStep = 0;
    let expectedKey = "";

    const keys = [
        { key: "Ctrl", x: 50, y: 200, width: 60, height: 40 },
        { key: "Alt", x: 120, y: 200, width: 60, height: 40 },
        { key: "Del", x: 190, y: 200, width: 60, height: 40 },
        { key: "C", x: 260, y: 200, width: 40, height: 40 },
        { key: "V", x: 310, y: 200, width: 40, height: 40 },
        { key: "X", x: 360, y: 200, width: 40, height: 40 },
    ];

    function drawKeyboard() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "#000";
        keys.forEach(key => {
            ctx.strokeRect(key.x, key.y, key.width, key.height);
            ctx.fillStyle = "#000";
            ctx.fillText(key.key, key.x + key.width / 2 - ctx.measureText(key.key).width / 2, key.y + key.height / 2 + 5);
        });
    }

    function highlightKey(keyCombo) {
        drawKeyboard();
        const keysToHighlight = keyCombo.split('+');
        keysToHighlight.forEach(key => {
            const keyObj = keys.find(k => k.key === key);
            if (keyObj) {
                ctx.fillStyle = "#ff0";
                ctx.fillRect(keyObj.x, keyObj.y, keyObj.width, keyObj.height);
                ctx.fillStyle = "#000";
                ctx.fillText(keyObj.key, keyObj.x + keyObj.width / 2 - ctx.measureText(keyObj.key).width / 2, keyObj.y + keyObj.height / 2 + 5);
            }
        });
    }

    function startTeachingMode() {
        messageDiv.innerText = "教学模式开始：请按下 Ctrl + C 复制";
        expectedKey = "Ctrl+C";
        highlightKey(expectedKey);
    }

    function handleKeyPress(event) {
        const keyCombination = `${event.ctrlKey ? "Ctrl+" : ""}${event.altKey ? "Alt+" : ""}${event.key.toUpperCase()}`;

        if (currentMode === "teaching") {
            if (keyCombination === expectedKey) {
                currentStep++;
                const nextKey = Object.keys(keyMappings)[currentStep];
                if (nextKey) {
                    messageDiv.innerText = `很好！请按下 ${nextKey} ${keyMappings[nextKey]}`;
                    expectedKey = nextKey;
                    highlightKey(expectedKey);
                } else {
                    messageDiv.innerText = "教学模式完成！";
                    currentMode = "idle";
                }
            } else {
                messageDiv.innerText = `错误！请按下 ${expectedKey}`;
                highlightKey(expectedKey);
            }
        } else if (currentMode === "guidance") {
            const actions = Object.keys(keyMappings)
                .filter(key => key.startsWith(keyCombination))
                .map(key => `${key}: ${keyMappings[key]}`)
                .join("\n");

            messageDiv.innerText = actions ? `你可以按下:\n${actions}` : "无可用快捷键";
        }
    }

    window.addEventListener("keydown", handleKeyPress);

    messageDiv.addEventListener("click", startTeachingMode);

    drawKeyboard();
});
</script>
