import { Score } from "../type";

export const testData = (): Promise<Score[]> => {
    return new Promise((resolve) => resolve([["Pakistan", 2], ["Pakistan", 127], ["India", 3], ["India", 71], ["Australia", 31], ["India", 22], ["Pakistan", 81]]))
};

export const serverData = (): Promise<Score[]> =>  {
    return fetch('https://assessments.reliscore.com/api/cric-scores/').then(res => res.json())
}