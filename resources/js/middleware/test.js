export default (to, from, next) => {
    if (to.query.name !== undefined) {
        console.log(to.query.name)
    }

    next()
}
