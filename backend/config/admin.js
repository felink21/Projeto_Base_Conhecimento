module.exports = middleware => {
    return (req, res, next) => {
        if (req.user.admin) {
            middleware(req, res, next)
            console.log(req.user.admin)
        } else {
            res.status(402).send('Usuário não é administrador!')
        }
    }
}