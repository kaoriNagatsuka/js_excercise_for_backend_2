// index.jsには次の機能を実装する
// 4でインストールした「axios」を使って以下のURLからクイズデータを取得する
// 利用するAPIのURL : https://opentdb.com/api.php?amount=10
// API提供サイト: https://opentdb.com/
// axiosの使い方はaxiosのGitHubレポジトリを参照
// 発展タスク: async/await を使って実装する
// 「axios」を使って習得したクイズデータをconsole.logでターミナルに出力する
const API_URL = 'https://opentdb.com/api.php?amount=10';
const axios = require('axios');
const getQuizData = async () => {
    try {
        const response = await axios.get(API_URL);
        const results = await response.data.results;
        console.log('クイズデータ :', results);
    } catch (error) {
        console.log(error);
    }

};
getQuizData();
