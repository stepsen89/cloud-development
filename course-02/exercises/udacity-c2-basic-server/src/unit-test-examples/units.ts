// Super Simple Unit Functions

export const add = (a: number, b: number) => {
    return a + b;
}

export const divide = (a: number, b: number) => {
    if (b === 0) { throw new Error('div by 0') }

    return a / b;
}

export const concat = (pre: string, post: string) => {
    if (!pre || !post || pre.length === 0 || post.length === 0) {
        throw new Error('Empty string')
    }

    return pre + post;
}