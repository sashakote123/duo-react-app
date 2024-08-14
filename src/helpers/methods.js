
export function shuffleArray(array) {
    // Создаем копию исходного массива
    let shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Выбираем случайный индекс от 0 до i
        const j = Math.floor(Math.random() * (i + 1));

        // Меняем местами элементы shuffledArray[i] и shuffledArray[j]
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

export function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export const firstShuffle = (wordArray) => {
    let arr = new Set([])
    while (arr.size !== 5) arr.add(randomInteger(0, 4))
    let array = []
    for (let item of arr.values()) array.push(item)

    let newArray = [];
    for (let i = 0; i < 5; i++) {
        newArray.push(wordArray[array[i]])
    }

    let tmp = wordArray.slice(0)
    tmp.splice(0, 5)

    return newArray.concat(tmp)
}

export const addFromQueue = (array, queue) => {

    if (queue.length === 0) return array
    let finalArray = []


    let counter = 0
    for (let el of array) {
        if (el.word === null || el.translate === null) {
            finalArray.push(queue.shift())
        } else {
            finalArray.push(el)
        }
    }

    return finalArray
}