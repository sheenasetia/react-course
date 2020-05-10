import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    //to format GMT date 
    /*
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
    */

   function RenderDish({dish}) {
    
    if (dish == null)
        return(
                <div></div>
        );

        return ( <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )

    }

    function RenderComments({comments}) {
      
        if(comments==null)
        return (
            <div></div>
        )

       
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className = "list-unstyled">
                    { comments.map((comm)=>{

                    {/*var date_resp = this.formatDate(comm.date); */}
                        return(
                        <li>
                            <ul className = "list-unstyled">
                                <li>{comm.comment}</li><br/>
                                <li> -- {comm.author} , {new Intl.DateTimeFormat('en-US', 
                                { year: 'numeric', month: 'short', day: '2-digit'})
                                .format(new Date(Date.parse(comm.date)))}
                                </li>
                                {/*<li> -- {comm.author} , {date_resp}</li>*/}
                            </ul>
                            <br/>
                        </li>
                        
                        )
                    })}
                </ul>
            </div>
            
        )
        
    }

    const  DishDetail = (props) => {

        if (props.dish == null)
            return(
                <div></div>
            );

            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
            
                </div>
                </div>
            );
        
      }

export default DishDetail;
