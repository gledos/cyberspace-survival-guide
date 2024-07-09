// 主要由 GPT-4o 编写，gledos 提供设计


const quizContainer = document.querySelector('.question-container');
let currentQuiz = quizContainer.getAttribute('data-quiz');
// let currentQuiz = "search_primary"; // 初始值为中级搜索测验
let currentQuestionIndex = 0; // 当前题目索引
let currentCorrectAnswer = null; // 当前题目正确答案
let currentSelectedAnswer = undefined; // 当前选中的答案索引
let correctAnswersCount = 0; // 记录正确答案数量
let allCorrect = true; // 标记所有题目是否都正确

// 初始化加载试卷
loadQuiz(currentQuiz);

// 加载试卷函数
function loadQuiz(quizName) {
    const quizContainer = document.querySelector(".question-container");
    const quiz = quizData[quizName];

    quizContainer.setAttribute("data-quiz", quizName);
    document.getElementById("question").innerHTML = quiz.questions[currentQuestionIndex].question;
    const answersList = document.getElementById("answers");
    answersList.innerHTML = ""; // 清空之前的答案

    quiz.questions[currentQuestionIndex].answers.forEach((answer, idx) => {
        const listItem = document.createElement("li");
        listItem.className = "task-list-item";
        listItem.innerHTML = `
            <label class="task-list-control">
                <span onclick="toggleAnswer(${idx})">${answer}</span>
                <input type="checkbox" style="display: none;">
                <span class="task-list-indicator"></span>
            </label>
        `;
        answersList.appendChild(listItem);
    });

    currentCorrectAnswer = quiz.questions[currentQuestionIndex].correct_answer;
}

// 切换试卷函数
function changeQuiz(quizName) {
    currentQuiz = quizName;
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    allCorrect = true;
    loadQuiz(currentQuiz);
}

// 切换答案选择状态函数
function toggleAnswer(index) {
    // 获取所有答案的输入元素
    const answerInputs = document.querySelectorAll('.task-list-control input[type="checkbox"]');

    // 取消所有答案的选择状态
    answerInputs.forEach((input, idx) => {
        if (idx !== index) {
            input.checked = false;
        }
    });

    // 更新当前选择的答案索引
    if (currentSelectedAnswer === index) {
        currentSelectedAnswer = undefined; // 取消选择
    } else {
        currentSelectedAnswer = index; // 选择新的答案
    }
}

// 在生成答案的函数中，为每个输入元素添加单选功能
questionData.answers.forEach((answer, idx) => {
    const li = document.createElement("li");
    li.className = "task-list-item";
    li.innerHTML = `
        <label class="task-list-control">
            <span onclick="toggleAnswer(${idx})">${answer}</span>
            <input type="checkbox" onclick="toggleAnswer(${idx})">
            <span class="task-list-indicator"></span>
        </label>
    `;
    answersElement.appendChild(li);
});

// 提交答案函数
function submitAnswer() {
    if (currentSelectedAnswer === undefined) {
        alert$.next("请选择一个答案！");
        return;
    }

    if (currentSelectedAnswer === currentCorrectAnswer) {
        alert$.next("答案正确！");
        correctAnswersCount++; // 增加正确答案计数
    } else {
        alert$.next("答案错误！");
        allCorrect = false; // 标记不是所有题目都正确
    }

    // 进入下一个题目或完成所有题目
    if (currentQuestionIndex < quizData[currentQuiz].questions.length - 1) {
        currentQuestionIndex++;
        currentSelectedAnswer = undefined; // 重置选择的答案
        loadQuiz(currentQuiz);
    } else {
        // 显示完成所有题目的信息
        if (allCorrect) {
            alert$.next("所有题目回答正确！");
            saveSkillToLocalStorage(currentQuiz); // 保存技能状态到 localStorage
            // 可在此保存技能完成状态或其他操作
        } else {
            alert$.next("题目未全部回答正确。");
        }
    }
}

// 全部重试函数
function retryQuiz() {
    currentQuestionIndex = 0;
    correctAnswersCount = 0;
    allCorrect = true;
    loadQuiz(currentQuiz);
}

// 保存技能状态到 localStorage
function saveSkillToLocalStorage(quizName) {
    const localStorageKey = "cyberspace-survival-guide";
    let localStorageData = JSON.parse(localStorage.getItem(localStorageKey)) || {
        skills: {},
    };

    localStorageData.skills[quizName] = true;
    localStorage.setItem(localStorageKey, JSON.stringify(localStorageData));
}
