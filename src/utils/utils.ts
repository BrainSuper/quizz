// export function shuffle(array: string[]) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }
export function shuffle(array: []) {
    array.sort(() => Math.random() - 0.5);
}