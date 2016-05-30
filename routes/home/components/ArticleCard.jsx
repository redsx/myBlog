import React from 'react'
import {Link} from 'react-router'
import { Card, CardActions, CardText, CardTitle } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
const styles = {
    card:{
        margin:'20px'
    },
    span:{
        fontSize:'1.2rem'
    }
}
const ArticleCard = React.createClass({
    render:function () {
        var { time, title, introduce } = this.props.article
        return (
            <Card style={styles.card}>
                <CardTitle 
                    title = {title}
                    subtitle = {time}
                />
                <CardText>
                    <span style={styles.span}>
                        {introduce}
                    </span>
                </CardText>
                <CardActions>
                    <Link to={'article/'+title}><RaisedButton 
                        secondary = {true} 
                        label = 'read more'
                    >
                    </RaisedButton></Link>
                </CardActions>
            </Card>
        );
    }
});
export default ArticleCard;