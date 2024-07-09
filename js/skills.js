// 获取 localStorage 数据
const localStorageKey = "cyberspace-survival-guide";
let localStorageData = JSON.parse(localStorage.getItem(localStorageKey)) || { skills: {} };

// 定义技能等级和对应的类
const skillLevels = ["primary", "intermediate", "advanced"];

// 查找页面中的 <pre> 和 <code> 元素
const preElements = document.querySelectorAll('pre code');

// 处理每一个 <pre> 和 <code> 元素
preElements.forEach(pre => {
    let codeContent = pre.textContent;

    // 检查 <code> 内容是否以 "flowchart" 开头
    if (codeContent.trim().startsWith('flowchart')) {
        // 创建一个新的行，用于添加类标记
        let newLines = [];

        // 用于跟踪每个技能的最高等级
        let skillMaxLevels = {};

        // 遍历 localStorage 数据中的技能
        Object.keys(localStorageData.skills).forEach(skill => {
            // 提取技能名称和等级
            let [skillName, skillLevel] = skill.split('_');
            let levelIndex = skillLevels.indexOf(skillLevel);

            // 如果找到对应的技能
            if (levelIndex !== -1) {
                // 更新每个技能的最高等级
                if (!skillMaxLevels[skillName] || levelIndex > skillLevels.indexOf(skillMaxLevels[skillName])) {
                    skillMaxLevels[skillName] = skillLevel;
                }
            }
        });

        // 生成新行，包含每个技能的最高等级
        for (let skillName in skillMaxLevels) {
            let classMark = `${skillName}:::${skillMaxLevels[skillName]}`;
            newLines.push(classMark);
        }

        // 将类标记行插入到 flowchart 内容的下一行
        if (newLines.length > 0) {
            let flowchartEndIndex = codeContent.indexOf('\n') + 1;
            codeContent = codeContent.slice(0, flowchartEndIndex) + newLines.join('\n') + '\n' + codeContent.slice(flowchartEndIndex);
            pre.textContent = codeContent;
        }
    }
});
