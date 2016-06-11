import reqwest from 'reqwest'
//pagination
export const LIMIT = 5;
export const SET_MAX_PAGE = 'SET_MAX_PAGE';
export const SET_CUR_PAGE = 'SET_CUR_PAGE';
export const setMaxPage = (maxPage) => {
    return {
        type:SET_MAX_PAGE,
        maxPage
    }
};
export const getMaxPage = (category = '') => {
    return (dispatch,getState)=>{
        reqwest({
            url:'http://localhost:1337/countArticle',
            method:'get',
            type:'jsonp',
            data: {
                category:category
            },
            success:function (data) {
                let maxPage =Math.ceil(parseInt(data.count)/LIMIT);
                dispatch(setMaxPage(maxPage));
            },
            error:function () {
                dispatch(setSnackbar('获取分页数据失败T_T'))
            }
        });
    }
}
export const setCurPage = (curPage) => {
    return {
        type:SET_CUR_PAGE,
        curPage
    }
}
//articleList
export const SET_ARTICLE_LIST = 'SET_ARTICLE_LIST';
export const setArticleList = (articles)=>{
    return {
        type:SET_ARTICLE_LIST,
        articles
    }
}
export const getArticles = (curPage,category = '') => {
    return (dispatch,getState)=>{
        reqwest({
                url:'http://localhost:1337/article/list',
                method:'get',
                type:'jsonp',
                data:{
                    limit:LIMIT,
                    page:curPage,
                    category:category
                },
                error:function (error) {
                    dispatch(setSnackbar('加载文章列表失败了T—T 刷新试试'));
                },
                success:function (data) {
                    dispatch(setLoading(false));          
                    dispatch(setArticleList(data.articleList));
                    dispatch(setCurPage(curPage));
                }
            });
    }
}
//message
export const SET_MESSAGE = 'SET_MESSAGE';
export const setMessage = (messages)=>{
    return {
        type:SET_MESSAGE,
        messages
    }
}
export const getMessage = (page = 1) => {
    return (dispatch,getState)=>{
        var state = getState();
        reqwest({
            url:'http://localhost:1337/message/list',
            method:'get',
            type:'jsonp',
            data:{
                page:page,
                limit:LIMIT
            },
            success:function (data) {
                dispatch(setLoading(false)); 
                dispatch(setMessage(data.messages));
            },
            error:function (error) {
                dispatch(setSnackbar('获取评论失败了T—T 查看一下网络状态'));
            }
        });
    }
}
export const sendMessage = (message) => {
    return (dispatch,getState)=>{
        var page = (getState()).messages.curPage;
        reqwest({
            url:'http://localhost:1337/message/add',
            method:'get',
            type:'jsonp',
            data:message,
            success:function (data) {
                dispatch(setSnackbar('留言成功^_^'));
                dispatch(getMessage(page));
            },
            error:function () {
                dispatch(setSnackbar('评论失败了T—T 查看一下网络状态'));
            }
        });
    }
}
export const sendReply = (reply) => {
    return (dispatch,getState)=>{
        var page = (getState()).messages.curPage;
        reqwest({
            url:'http://localhost:1337/reply/add',
            method:'get',
            type:'jsonp',
            data:reply,
            success:function (data) {
                dispatch(setSnackbar('回复成功^_^'));
                dispatch(getMessage(page));
            },
            error:function (data) {
                dispatch(setSnackbar('回复失败了T—T 查看一下网络状态'));
            }
        });
    }
}
//article
export const SET_ARTICLE = 'SET_ARTICLE';
export const setArticle = (article) => {
    return {
        type:SET_ARTICLE,
        article
    }
}
export const getArticle = (title) => {
    return (dispatch) => {
        reqwest({
            url:'http://localhost:1337/getArticle',
            method:'get',
            type:'jsonp',
            data:{ title },
            success:function (data) {
                if(data.article){
                    dispatch(setLoading(false)); 
                    dispatch(setArticle(data.article));
                    dispatch(getComment());
                }
            },
            error:function (error) {
                console.log(error);
            }
        });
    }
}
//comment
export const SET_COMMENT = 'SET_COMMENT';
export const setComment = (comment) => {
    return {
        type:SET_COMMENT,
        comment
    }
}
export const getComment = () => {
    return (dispatch,getState) => {
        var state = getState();
        if(state.article.id){
            reqwest({
                url:'http://localhost:1337/getComment',
                method:'get',
                type:'jsonp',
                data:{id:state.article.id},
                success:function (data) {
                    dispatch(setComment(data.comment));
                },
                error:function (error) {
                    dispatch(setSnackbar('获取评论失败了T—T 查看一下网络状态'));
                }
            });
        }
    }
}
export const sendComment = (comment) => {
    return (dispatch,getState)=>{
        reqwest({
            url:'http://localhost:1337/comment/add',
            method:'get',
            type:'jsonp',
            data:comment,
            success:function (data) {
                dispatch(setSnackbar('留言成功^_^'));
                dispatch(getComment());
            },
            error:function () {
                dispatch(setSnackbar('评论失败了T—T 查看一下网络状态'));
            }
        });
    }
}
export const sendReplyToComment = (reply) => {
    return (dispatch,getState)=>{
        reqwest({
            url:'http://localhost:1337/comment/reply',
            method:'get',
            type:'jsonp',
            data:reply,
            success:function (data) {
                dispatch(setSnackbar('回复成功^_^'));
                dispatch(getComment());
            },
            error:function (data) {
                dispatch(setSnackbar('回复失败了T—T 查看一下网络状态'));
            }
        });
    }
}
//category
export const SET_CATEGORY = 'SET_CATEGORY';
export const setCategory = (category) => {
    return {
        type:SET_CATEGORY,
        category
    }
}
export const getCategory = () => {
    return (dispatch) => {
        reqwest({
            url:'http://localhost:1337/newArticleList',
            method:'get',
            type:'jsonp',
            success:function (data) {
                dispatch(setCategory(data.newArticleList));
            }
        });
    }
}
//resState
export const SET_LOADING = 'SET_LOADING';
export const setLoading = (isLoading) => {
    return {
        type:SET_LOADING,
        isLoading
    }
}
export const SET_SNACKBAR = 'SET_SNACKBAR';
export const setSnackbar = (message) => {
    return {
        type:SET_SNACKBAR,
        message
    }
}