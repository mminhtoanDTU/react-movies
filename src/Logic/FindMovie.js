export default function FindMovie(movies, name) {
    if (movies.phimbo.find(item => {
        if (item.title === name) return true;
        else return false;
    })) {
        return movies.phimbo.find(item => item.title === name);
    }
    else if (movies.phimchieurap.find(item => {
        if (item.title === name) return true;
        else return false;
    })) {
        return movies.phimchieurap.find(item => item.title === name);
    }
    else if (movies.phimhoathinh.find(item => {
        if (item.title === name) return true;
        else return false;
    })) {
        return movies.phimhoathinh.find(item => item.title === name);
    }
    else if (movies.phimle.find(item => {
        if (item.title === name) return true;
        else return false;
    })) {
        return movies.phimle.find(item => item.title === name);
    }
}