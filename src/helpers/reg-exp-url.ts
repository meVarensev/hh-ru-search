export const regExpURL = (url: string): string | undefined => {
    const pattern = /\/vacancy\/(\d+)/
    const matchResult = url.match(pattern);

    if (!matchResult || !matchResult[1]) {
        console.log("No vacancy ID found in the URL.");
        return;
    }

    const vacancyId = matchResult[1];
    return vacancyId
}
