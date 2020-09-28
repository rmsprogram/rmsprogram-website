import React from 'react'
import Card from '../UI/Card';
import './style.css';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {
  return(
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">Beautiful</h1>
                    <span className="postedBy">posted on September 13, 2020 by Aatmi Mehta</span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/gs7-DrHirenPatel.png')} alt="Guest Speaker #7: Dr. Hiren Patel MD MCHM"></img>
                </div>
            </Card>
        </div>
   )

 }

export default BlogPost