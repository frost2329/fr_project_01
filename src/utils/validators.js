export const required = value => {
    if (value) return undefined
    return 'Field is required'
}
export const maxLengthCreator =  (maxlength) => {
    return (value) => {
        if (value && value.length > maxlength) return `Max length is ${maxlength} symbols`
        return undefined
    }
}