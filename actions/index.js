import reqwest from 'reqwest'
//pagination
export const LIMIT = 2;
export const SET_MAX_PAGE = 'SET_MAX_PAGE';
export const SET_CUR_PAGE = 'SET_CUR_PAGE';
export const setMaxPage = (maxPage)=>{
    return {
        type:SET_MAX_PAGE,
        maxPage
    }
};
export const getMaxPage = ()=>{
    return (dispatch,getState)=>{
        reqwest({
            url:'http://localhost:1337/countArticle',
            method:'get',
            type:'jsonp',
            success:function (data) {
                let maxPage =Math.ceil(parseInt(data.count)/LIMIT);
                dispatch(setMaxPage(maxPage));
            },
            error:function () {
                
            }
        });
    }
}
export const setCurPage = (curPage)=>{
    return {
        type:SET_CUR_PAGE,
        curPage
    }
}
//articles
export const SET_ARTICLES = 'SET_ARTICLES';
export const setArticles = (articles)=>{
    return {
        type:SET_ARTICLES,
        articles
    }
}
export const getArticles = (curPage)=>{
    return (dispatch,getState)=>{
        reqwest({
                url:'http://localhost:1337/list',
                method:'get',
                type:'jsonp',
                data:{
                    limit:LIMIT,
                    page:curPage
                },
                success:function (data) {
                    dispatch(setArticles(data));
                    dispatch(setCurPage(curPage));
                }
            })
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
export const getMessage = ()=>{
    return (dispatch,getState)=>{
        reqwest({
            url:'http://localhost:1337/message/list',
            method:'get',
            type:'jsonp',
            success:function (data) {
                console.log(data);
                dispatch(setMessage(data));
            }
        })
    }
}
export const sendMessage = (message)=>{
    return (dispatch,getState)=>{
        reqwest({
            url:'http://localhost:1337/message/add',
            method:'get',
            type:'jsonp',
            data:message,
            success:function (data) {
                console.log('send message success');
            },
            error:function () {
                console.log('send message error');
            }
        })
    }
}