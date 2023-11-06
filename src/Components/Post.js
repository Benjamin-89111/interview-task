import { Button } from "@mui/material"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

function Post() {
    return (
        <>
            <div className="cta-2 text-center">
                <h1 className="text-center pt-5 ps-5 pe-5 pb-3">Need Bulk Orders !!!</h1>
                <h4 className="text-white text-center">Get your free, no obligation quote for your products today!</h4>
                <Link to="/BulkOrders" target="_parent">
                <Button style={{ color: "rgb(75,75,75)" }} className="card-bg-gold  mt-3">Click Here</Button>
                </Link>
            </div>
        </>
    )
}
export default Post