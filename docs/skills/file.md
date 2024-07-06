---
title: "文件"
description:
published: true
date: "2024-07-07T00:15:54"
特殊标签标记: #无标签
editor: markdown
dateCreated: "2024-07-03T16:27:00"
icon: material/file
---

## 简介

本指南，将会介绍使用文件所需的技能树。

<!--
关于文件，有许多相关知识点：路径、扩展名、重命名、覆盖、可执行文件。（待续）

> [!note]+ 可执行文件
>
> 「可执行文件」大概是很直观的名字，代表可以运行的文件。换句话说，它就是程序，或者程序的部分。
-->

<!-- ## 二进制文件

待续。

> [!tip]+ 外部资料
>
> 维基页面：[binary file][]（二进制）。

[binary file]: https://en.wikipedia.org/wiki/Binary_file -->

## 技能等级

### 初级

了解常见文件扩展名，会移动、复制文件。

#### 常见文件扩展名

系统为了节省资源，会使用扩展名来标识不同文件的格式，如果文件的扩展名不符合该文件的格式，那么软件可能无法正常读取。

比如该网页名为 `file.html`，扩展名为 `.html`，如果修改为 `file.pdf`，那么运行时会调用 PDF 阅读器，
很可能会被识别为文件损坏。

所以系统默认隐藏了文件的扩展名，需要了解扩展名后，在系统里通过设置，让扩展名可见。

???+ info "启用扩展名的方法"

    === ":material-microsoft-windows: Windows"

        打开「文件资源管理器」。（桌面上的【此电脑】，这个页面就是「文件资源管理器」，打开即可）

        点击「文件资源管理器」顶部的【查看】按钮。找到展开的设置中，「显示/隐藏」区域里的【文件扩展名】复选框，勾选即可。[^win_fne]

    === ":material-apple: macOS"

        进入【访达】->【设置】->【高级】，然后选择【显示所有文件扩展名】。[^mac_fne]

    === ":material-linux: Linux"

        通常，Linux 各大发行版的文件管理软件，会默认显示扩展名。

[^win_fne]: [Windows 中的常见文件扩展名 - Microsoft 支持](https://support.microsoft.com/zh-cn/windows/windows-中的常见文件扩展名-da4a4430-8e76-89c5-59f7-1cdbbc75cb01)
[^mac_fne]: [在 Mac 上显示或隐藏文件扩展名 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/guide/mac-help/mchlp2304/mac)

> [!note]+ 常见的文件扩展名
>
> | 类型                          | 扩展名               | 容器格式或编码的全称                                |
> | ----------------------------- | -------------------- | --------------------------------------------------- |
> | :material-file-document: 文档 | `.txt`               | [text file][txt]                                    |
> | :material-file-document: 文档 | `.docx`              | [Office Open XML][docx]                             |
> | :material-file-pdf-box: 文档  | `.pdf`               | [Portable Document Format][pdf]                     |
> | :material-file-gif-box: 图片  | `.gif`               | [Graphics Interchange Format][gif]                  |
> | :material-file-jpg-box: 图片  | `.jpeg`<br>`.jpg`    | [Joint Photographic Experts Group][jpeg]            |
> | :material-file-png-box: 图片  | `.png`               | [Portable Network Graphics][png]                    |
> | :material-file-music: 音频    | `.m4a`<br>`.aac`     | [Advanced Audio Coding][aac]                        |
> | :material-file-music: 音频    | `.flac`              | [Free Lossless Audio Codec][flac]                   |
> | :material-file-music: 音频    | `.mp3`               | [MPEG-1 Audio Layer III][mp3]                       |
> | :material-file-video: 视频    | `.mkv`               | [Matroska][mkv]                                     |
> | :material-file-video: 视频    | `.mp4`               | [MPEG-4 Part 14][mp4]                               |

> [!note]- 其他文件扩展名
>
> | 类型                          | 扩展名               | 容器格式或编码的全称                                |
> | ----------------------------- | -------------------- | --------------------------------------------------- |
> | :material-file-document: 文档 | `.odt`               | [Open Document Format for Office Applications][odt] |
> | :material-file-document: 文档 | `.rtf`               | [Rich Text Format][rtf]                             |
> | :material-file-document: 文档 | `.tex`               | [TeX][tex]                                          |
> | :material-file-document: 文档 | `.md`<br>`.markdown` | [Markdown][md]                                      |
> | :material-file-image: 图片    | `.webp`              | [WebP][webp]                                        |
> | :material-file-music: 音频    | `.ogg`               | [Ogg][ogg]                                          |
> | :material-file-music: 音频    | `.opus`              | [Opus][opus]                                        |
> | :material-file-music: 音频    | `.wav`               | [Waveform Audio File Format][wav]                   |
> | :material-file-video: 视频    | `.avi`               | [Audio Video Interleave][avi]                       |
> | :material-file-video: 视频    | `.webm`              | [WebM][webm]                                        |

[txt]: https://en.wikipedia.org/wiki/Text_file
[odt]: https://en.wikipedia.org/wiki/OpenDocument
[docx]: https://en.wikipedia.org/wiki/Office_Open_XML
[pdf]: https://en.wikipedia.org/wiki/PDF
[rtf]: https://en.wikipedia.org/wiki/Rich_Text_Format
[tex]: https://en.wikipedia.org/wiki/TeX
[md]: https://en.wikipedia.org/wiki/Markdown

[gif]: https://en.wikipedia.org/wiki/GIF
[jpeg]: https://en.wikipedia.org/wiki/JPEG
[png]: https://en.wikipedia.org/wiki/PNG
[webp]: https://en.wikipedia.org/wiki/WebP

[aac]: https://en.wikipedia.org/wiki/Advanced_Audio_Coding
[flac]: https://en.wikipedia.org/wiki/FLAC
[mp3]: https://en.wikipedia.org/wiki/MP3
[ogg]: https://en.wikipedia.org/wiki/Ogg
[opus]: https://en.wikipedia.org/wiki/Opus_(audio_format)
[wav]: https://en.wikipedia.org/wiki/WAV

[avi]: https://en.wikipedia.org/wiki/Audio_Video_Interleave
[mkv]: https://en.wikipedia.org/wiki/Matroska
[mp4]: https://en.wikipedia.org/wiki/MP4_file_format
[webm]: https://en.wikipedia.org/wiki/WebM

#### 文件管理器

〔后文待填充〕

#### 复制粘贴

关于复制，可以使用键盘的 [快捷键](./keyboard.html#高级)。

### 中级

熟悉树形路径，知道文件名不能使用的符号（保留符）。

### 高级

能够重命名、覆盖文件／文件夹，以及能够压缩与解压缩文件。

> [!note]+ 前置技能
>
> [键盘（初级）](./keyboard.md)

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

## 指南

| 路径                                               | 描述                                         |
| -------------------------------------------------- | -------------------------------------------- |
| `C:\Documents\Newsletters\Summer2018.pdf`          | 含有盘符的绝对路径                           |
| `\Program Files\Custom Utilities\StringFinder.exe` | 当前硬盘上的相对路径                         |
| `2018\January.xlsx`                                | 相对路径                                     |
| `..\Publications\TravelBrochure.pdf`               | 指向从当前目录开始的目录中的文件的相对路径。 |
