import fetch from 'isomorphic-unfetch';

const baseURL = 'https://api.github.com/users';

const consumeAPI = (parameter = '') => {
    return fetch(`${baseURL}/${parameter}`)
        .then(res => handleError(res))
        .then(res => res.json())
};

const handleError = res => {
    if(!res.ok)
        throw Error(res.status);

    return res;
}

export const getGithubUser = userName => consumeAPI(userName);

export const getInitialData = params => fetch(`${baseURL}/${params}`);

export const getInitialRepos = params => fetch(`${baseURL}/${params}/repos`);

