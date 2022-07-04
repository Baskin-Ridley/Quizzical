import {
    CHANGE_AMOUNT,
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_TYPE,
    CHANGE_SCORE
} from "./actionTypes"

export const handleCategoryChange = (category: string) => {
    return {
        type: CHANGE_CATEGORY,
        payload: category
    }
}

export const handleTypeChange = (type: string) => {
    return {
        type: CHANGE_TYPE,
        payload: type
    }
}

export const handleDifficultyChange = (difficulty: string) => {
    return {
        type: CHANGE_DIFFICULTY,
        payload: difficulty
    }
}

export const handleAmountChange = (amount: number) => {
    return {
        type: CHANGE_AMOUNT,
        payload: amount
    }
}

export const handleScoreChange = (score: number) => {
    return {
        type: CHANGE_SCORE,
        payload: score
    }
}


