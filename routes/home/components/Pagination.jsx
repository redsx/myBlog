import React from 'react'
import {Link} from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import ArrowPre from 'material-ui/svg-icons/navigation/chevron-left'
import ArrowNext from 'material-ui/svg-icons/navigation/chevron-right'
const styles = {
    button:{
        minWidth:'2rem'
    }
}
const Pagination = React.createClass({
    componentDidMount:function () {
        var category = this.props.category || '';
        this.props.getMaxPage(category);        
    },
    componentWillReceiveProps:function (nextProps) {
        console.log();
        if(this.props.curPage !== nextProps.curPage || this.props.category !== nextProps.category ){
            var category = nextProps.category || '';
            this.props.getMaxPage(category);
        }
    },
    render:function () {
        var maxPage = parseInt(this.props.maxPage);
        var curPage = parseInt(this.props.curPage);
        var route = this.props.category === '' ? '/page/':('/page/'+this.props.category+'/');  
        var cont = [];
        var i = curPage > 2 ? curPage-2 : curPage
        var n = maxPage > curPage+2 ? curPage+2 : maxPage
        for(; i <= n ; i++ ){
            if( curPage === i ){
                cont.push(
                        <FlatButton 
                            disabled = {true}
                            style = {styles.button}
                        > 
                        {i} 
                        </FlatButton>
                    );
            }else{
                cont.push(
                       <Link to = {route + i }> 
                       <FlatButton
                            style = {styles.button}
                       > 
                       {i} 
                       </FlatButton> 
                       </Link>
                    );
            }
        }
        return (
            <div>
                {
                    curPage === 1? <FlatButton 
                                        icon = {<ArrowPre />}
                                        disabled = {true}
                                        style = {styles.button}
                                    /> : <Link to = {route+ (curPage-1) }>
                                            <FlatButton
                                                icon = {<ArrowPre />}
                                                style = {styles.button}
                                            />
                                         </Link>
                }
                {cont}
                {
                    curPage === maxPage? <FlatButton 
                                        icon = {<ArrowNext />}
                                        disabled = {true}
                                        style = {styles.button}
                                    /> : <Link to = {route +(curPage+1) }>
                                            <FlatButton
                                                icon = {<ArrowNext />}
                                                style = {styles.button}
                                            />
                                         </Link>
                }
            </div>
        );
    }
});
export default Pagination;