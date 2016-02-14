import axios from 'axios';

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

function getGithubInfo(username) {
  return axios.all([
      getRepos(username),
      getUserInfo(username)
    ])
    .then(([repos, userInfo]) => ({
      repos: repos.data,
      bio: userInfo.data
    }));
}

export default getGithubInfo;
