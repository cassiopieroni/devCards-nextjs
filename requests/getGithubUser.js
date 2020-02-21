export const getGithubUser = userName => {

    return fetch(`https://api.github.com/users/${userName}`);
}