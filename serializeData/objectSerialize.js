import {unserialize} from 'php-serialize';


export  class User {
    constructor({ data, knowledge, skills }) {
        this.data = data
        this.knowledge = knowledge
        this.skills = skills
    }
    display() {
        const newData = unserialize(this.data) // Unserialize Data
        console.log("NewData", newData)
        this.data = newData;
        this.knowledge = newData.knowledge.map((knowledge) => { return parseFloat(knowledge) });
        this.skills = newData.skills.map((skill) => { return parseFloat(skill) });
        this.sumArray(this.knowledge, this.skills); // Sum of knowledge and skills
        this.sumArrayObj(this.data);
    }
    sumArrayObj(data) {
        data.knowledge = [... new Set(data.knowledge)].map((m_knowledge) => { return parseFloat(m_knowledge) }).reduce((sum_knowledge, a) => sum_knowledge + a, 0)
        data.skills = [... new Set(data.skills)].map((s_skills) => { return parseFloat(s_skills) }).reduce((sum_skills, b) => sum_skills + b, 0)
        data.behaviour = [... new Set(data.behaviour)].map((m_behaviour) => { return parseFloat(m_behaviour) }).reduce((sum_behaviour, c) => sum_behaviour + c, null)
        console.log("dataObject", data);
    }
    sumArray(knowledgeData, skillsData) {
        let knowledgeSum = 0;
        for (let i = 0; i < knowledgeData.length; i += 1) {
            knowledgeSum = knowledgeSum + knowledgeData[i];
        }
        console.log("knowledge", knowledgeSum)

        let skilllSum = 0;
        for (let i = 0; i < skillsData.length; i += 1) {
            skilllSum = skilllSum + skillsData[i];
        }
        console.log("Skills", skilllSum)
        return { skilllSum, knowledgeSum }
    }
}

