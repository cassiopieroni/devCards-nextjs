import fetch from 'isomorphic-unfetch';

export const getGithubUser = userName => {

    return fetch(`https://api.github.com/users/${userName}`);
}