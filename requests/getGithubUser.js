export const getGithubUser = userName => {

    return fetch(`https://api.github.com/users/${userName}`)
        .then( res => {
            if (!res.ok) throw Error(res.status);

            return res.json();
        })
}