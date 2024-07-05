document.addEventListener("DOMContentLoaded", function () {
    const localStorageKey = "cyberspace-survival-guide";
    let localStorageData = JSON.parse(localStorage.getItem(localStorageKey)) || {
        "cyberspace-survival-guide-version": "0.0.1",
        skills: {},
    };

    const skillLevels = {
        browser: [
            { key: "browser_advanced", label: "浏览器（高级）" },
            { key: "browser_intermediate", label: "浏览器（中级）" },
            { key: "browser_primary", label: "浏览器（初级）" },
        ],
        downloader: [
            { key: "downloader_advanced", label: "下载器" },
        ],
        file: [
            { key: "file_advanced", label: "文件（高级）" },
            { key: "file_intermediate", label: "文件（中级）" },
            { key: "file_primary", label: "文件（初级）" },
        ],
        install: [
            { key: "install_advanced", label: "安装" },
        ],
        keyboard: [
            { key: "keyboard_advanced", label: "键盘（高级）" },
            { key: "keyboard_intermediate", label: "键盘（中级）" },
            { key: "keyboard_primary", label: "键盘（初级）" },
        ],
        search: [
            { key: "search_advanced", label: "搜索（高级）" },
            { key: "search_intermediate", label: "搜索（中级）" },
            { key: "search_primary", label: "搜索（初级）" },
        ],
        shopping: [
            { key: "shopping_advanced", label: "网上购物（高级）" },
            { key: "shopping_intermediate", label: "网上购物（中级）" },
            { key: "shopping_primary", label: "网上购物（初级）" },
        ],
        user_account: [
            { key: "user_account_advanced", label: "帐号（高级）" },
            { key: "user_account_primary", label: "帐号（初级）" },
        ],
    };

    const grid = document.querySelector(".grid");
    const cards = Array.from(grid.querySelectorAll("p"));

    cards.forEach((card) => {
        const skillTypeMatch = card.className.match(/skill_(\w+)/);
        if (!skillTypeMatch) return;

        const skillType = skillTypeMatch[1];
        const skillLevelsData = skillLevels[skillType];
        const userSkills = localStorageData.skills;

        let highestSkill = null;

        for (const skillLevel of skillLevelsData) {
            if (userSkills[skillLevel.key]) {
                highestSkill = skillLevel;
                break;
            }
        }

        if (highestSkill) {
            card.classList.add("card", `skill_${skillType}`, highestSkill.key);
            card.querySelector("a").innerText = highestSkill.label;
        } else {
            const blockquote = document.createElement("blockquote");
            blockquote.appendChild(card.cloneNode(true));
            card.parentNode.replaceChild(blockquote, card);
        }
    });

    // Reorder the cards based on the user's skills
    const sortedCards = Array.from(grid.children).sort((a, b) => {
        const aSkillType = a.className.match(/skill_(\w+)/);
        const bSkillType = b.className.match(/skill_(\w+)/);

        if (!aSkillType && !bSkillType) return 0;
        if (aSkillType && !bSkillType) return -1;
        if (!aSkillType && bSkillType) return 1;

        const aUserSkill = skillLevels[aSkillType[1]].find((level) => localStorageData.skills[level.key]);
        const bUserSkill = skillLevels[bSkillType[1]].find((level) => localStorageData.skills[level.key]);

        if (aUserSkill && !bUserSkill) return -1;
        if (!aUserSkill && bUserSkill) return 1;
        if (aUserSkill && bUserSkill) {
            return skillLevels[bSkillType[1]].indexOf(bUserSkill) - skillLevels[aSkillType[1]].indexOf(aUserSkill);
        }

        return 0;
    });

    // Append the reordered cards and blockquotes to the grid
    sortedCards.forEach((card) => {
        grid.appendChild(card);
    });
});
