import React, { Component } from 'react';
import { Navbar, Button, Grid, Col, Image, Row } from 'react-bootstrap'

import './PostContainer.css';

const PostContainer = ({ postData }) => {
    console.log(postData.username);
return <div className="show-grid">
<Grid className="show-grid">
<Row className="mainBox_header" xs={12} > 
    <Col> <Image src={postData.thumbnailUrl} rounded /></Col>
</Row>
<Row className="mainBox_Image">{postData.username}</Row>

<Row className="mainBox_interactivity">{postData.username}</Row>
    {/* {comments section} */}
</Grid>
</div>
}




export default PostContainer;