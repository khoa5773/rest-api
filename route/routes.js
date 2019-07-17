module.exports = (app) => {
    let articleCtrl = require('../controller/ArticlesController')
    app.route('/getArticlesList')
        .get(articleCtrl.getAllArticles);
    app.route('/getArticleDetails')
        .get(articleCtrl.appDetails);
}