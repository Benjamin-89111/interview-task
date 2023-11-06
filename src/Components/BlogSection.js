import { Col, Row } from "react-bootstrap"
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Grid,
} from '@mui/material';
import img01 from '../Images/Brass elephant lord ganesha india.png'
import img02 from '../Images/Brass Antique Durga Statue - 1.png'
import img03 from '../Images/Goddess Maa Laxmi Murti With Carvings.png'
function Blog1({ title, content, imageUrl, author, date }) {

    const cardStyle = {
        // maxWidth: 345,
        margin: '16px',
    };

    const mediaStyle = {
        height: 200,
    };

    const readMoreButtonStyle = {
        marginLeft: 'auto',
    };


    return (
        <>
            <div className='card-bg'>
                <h4 className='text-center fw-semibold pt-3 pb-3'>BLOG</h4>
                <Row>
                    <Col md={4}>
                        <Card className="card-bg-gold" style={cardStyle}>
                            <img src={img01} style={{ objectFit: "cover", height: "auto" }} className='w-100 bg-white' alt={title} />
                            <CardContent>
                                <Typography component="div">
                                    <h4 className=" black-txt">Urban Modesty: Using Waterfall Countertops For Chic Kitchen</h4>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span className="text-dark text-center">5 Min Read</span>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small" color="primary">
                                {"author"}
                            </Button>
                            <Button size="small" color="primary">
                                {"date"}
                            </Button> */}
                                <Button size="small" style={{ color: "rgb(149, 120, 81)", background: "rgb(26, 26, 26)" }} className="" >
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-bg-gold" style={cardStyle}>
                            <img src={img02} style={{ objectFit: "cover", height: "auto" }} className='w-100 bg-white' alt={title} />
                            <CardContent>
                                <Typography component="div">
                                    <h4 className=" black-txt">Urban Modesty: Using Waterfall Countertops For Chic Kitchen</h4>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span className="text-dark text-center">5 Min Read</span>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" style={{ color: "rgb(149, 120, 81)", background: "rgb(26, 26, 26)", fontSize: "12px" }} >
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="card-bg-gold" style={cardStyle}>
                            <img src={img03} style={{ objectFit: "cover", height: "auto" }} className='w-100 bg-white' alt={title} />
                            <CardContent>
                                <Typography component="div">
                                    <h4 className=" black-txt">Urban Modesty: Using Waterfall Countertops For Chic Kitchen</h4>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <span className="text-dark text-center">5 Min Read</span>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {/* <Button size="small" color="primary">
                                {"author"}
                            </Button>
                            <Button size="small" color="primary">
                                {"date"}
                            </Button> */}
                                <Button size="small" style={{ color: "rgb(149, 120, 81)", background: "rgb(26, 26, 26)" }} className="" >
                                    Read More
                                </Button>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Blog1