export default
    function con(url) {
        var re = new RegExp('@?(https?:)?(\/\/)?((github|twitter|www|telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)', 'i');
        var sern = url.match(re)[5];
        console.log(sern);
        return '@' + sern;
    }
