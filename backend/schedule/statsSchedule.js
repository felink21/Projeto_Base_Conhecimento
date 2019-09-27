const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/1 * * * *', async function () {
        const usersCount = await app.db('users').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()

        const { Stat } = app.api.stat

        const lastGuardedStat = await Stat.findOne({}, {},
            { Sort: { 'createdAt': -1 } })

        const moreRecentStat = new Stat({
            users: usersCount.count,
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createdAt: new Date()
        })

        const changeUsers = !lastGuardedStat || moreRecentStat.users !== lastGuardedStat.users
        const changeCategories = !lastGuardedStat || moreRecentStat.categories !== lastGuardedStat.categories
        const changeArticles = !lastGuardedStat || moreRecentStat.articles !== lastGuardedStat.articles

        if (changeUsers || changeCategories || changeArticles) {
            moreRecentStat.save().then(() => console.log('[Stats] Estatísticas Atualizadas!'))
        }
    })
}