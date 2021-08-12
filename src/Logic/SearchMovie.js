import FormatString from "./FormatString";

export function SearchMovie(Data = [], string) {
    const newList = [];
    for (const movies of Object.entries(Data)) {
        movies[1].forEach(item => {
            if (FormatString(item.title).includes(string)) {
                newList.push(item);
            }
        })
    }
    return newList;
}