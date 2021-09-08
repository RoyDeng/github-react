export const getLastPage = (reposLength: number, reposPerPage: number) => {
    return Math.ceil(reposLength / reposPerPage);
};

export function createPages(pages: number[], pagesCount: number, currentPage: number) {
    if (pagesCount > 5) {
        if (currentPage > 3) {
            for (let i = currentPage - 1; i <= currentPage + 2; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        }
        else {
            for (let i = 1; i <= 4; i++) {
                pages.push(i)
                if (i === pagesCount) break
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}
export function getNewPage(field: string, currentPage: number, lastPage: number) {
    if (field === "left") {
        if ((currentPage) === 1) {
            return currentPage;
        }
        return currentPage - 1;
    }
    if (field === "right") {
        if ((currentPage) === lastPage) {
            return currentPage;
        }
        return currentPage + 1;
    }
    return
};
