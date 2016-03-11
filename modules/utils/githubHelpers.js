import axios from 'axios'

var id = "YOUR_CLIENT_ID",
    sec = "YOUR_SECRET_ID",
    param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

var helpers = {
  getPlayersInfo(players) {
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    })).then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    }).catch(function(err) {
      console.warn('Error in getPlayersInfo', err)
    })
  }
};

module.exports = helpers;
