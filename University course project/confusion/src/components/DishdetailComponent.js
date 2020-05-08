import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props)
    {
        super(props);
    }

    //to format GMT date 
    formatDate(d) 
    {
      var date = new Date(d);

     if ( isNaN( date .getTime() ) ) 
     {
        return d;
     }
     else
    {
      
      var month = new Array();
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sept";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";

      var day = date.getDate();
      
      if(day < 10)
      {
         day = "0"+day;
      }
      
      return month[date.getMonth()] + " " + day  + ", " +date.getFullYear();
      }   
     }


    renderComments(comments) {
        if(comments==null)
        return (
            <div></div>
        )

       
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className = "list-unstyled">
                    { comments.map((comm)=>{

                    var date_resp = this.formatDate(comm.date); 
                        return(
                        <li>
                            <ul className = "list-unstyled">
                                <li>{comm.comment}</li><br/>
                                <li> -- {comm.author} , {date_resp}</li>
                            </ul>
                            <br/>
                        </li>
                        
                        )
                    })}
                </ul>
            </div>
            
        )
        
    }

    renderDish(dish)
    {
        if (this.props.dish == null)
        return(
                <div></div>
        );

        return ( <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                    <CardTitle>{this.props.dish.name}</CardTitle>
                    <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )

    }


    render()
    {
        if (this.props.dish == null)
            return(
                <div></div>
            );

            return(
                <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
                </div>

            );
    }
}

export default DishDetail;
