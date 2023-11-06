
import logo from '../Images/logo_2.png'
import { Icon } from '@iconify/react'
import X from '../Images/X-01.png'
import Facebook from '../Images/FB-01.png'
import Youtube from '../Images/Youtube-01.svg'
import Pinterest from '../Images/Pintrest-01.svg'
import Instagram from '../Images/Insta-01.svg'
import Linkedin from '../Images/Lindin-01.png'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <>
            {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
            <div className='card-bg'>
                {/* <!-- Footer --> */}
                <footer
                    className="text-center text-lg-start text-dark"
                >
                    {/* <!-- Grid container --> */}
                    <div className=" p-4 pb-0">
                        {/* <!-- Section: as --> */}
                        <section className="">
                            {/* <!--Grid row--> */}
                            <div className="row">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <Link target="_parent" to="/">
                                        <img src={logo} width="170px" className='mb-3' />
                                    </Link>
                                    {/* <Link target="_parent" to="/about" > */}
                                        <p className='text-white'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                    {/* </Link> */}
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr className="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h5 style={{ color: "#fff" }} className="text-uppercase mb-4 fw-bold">Company</h5>

                                    {/* <Link target="_parent" to="/Property-Management" > */}
                                        <p>
                                            <a className="text-white ag-head">FAQ</a>
                                        </p>
                                    {/* </Link> */}

                                    {/* <Link target="_parent" to="/Man-Power" > */}
                                        <p>
                                            <a className="text-white ag-head">About Us</a>
                                        </p>
                                    {/* </Link> */}
                                    {/* <Link target="_parent" to="/Facility-Management" > */}
                                        <p>
                                            <a className="text-white ag-head">Terms & Conditions</a>
                                        </p>
                                    {/* </Link> */}
                                    {/* <Link target="_parent" to="/Maintainence" > */}
                                        <p>
                                            <a className="text-white ag-head">Privacy Policy</a>
                                        </p>
                                    {/* </Link> */}
                                    {/* <Link target="_parent" to="/Cleaning" > */}
                                        <p>
                                            <a className="text-white ag-head">Why Join us</a>
                                        </p>
                                    {/* </Link> */}
                                </div>
                                {/* <!-- Grid column --> */}

                                <hr className="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h5 style={{ color: "#fff" }} className="text-uppercase mb-4 fw-bold">
                                        Quick Links
                                    </h5>
                                    {/* <Link target="_parent" to="/Residential" > */}
                                        <p>
                                            <a className="text-white ag-head">Blog </a>
                                        </p>
                                    {/* </Link> */}
                                    {/* <Link target="_parent" to="/Commercial" > */}
                                        <p>
                                            <a className="text-white ag-head">Bulk Order</a>
                                        </p>
                                    {/* </Link> */}
                                    {/* <Link target="_parent" to="/Commercial" > */}
                                        <p>
                                            <a className="text-white ag-head">Sitemap</a>
                                        </p>
                                    {/* </Link> */}

                                </div>

                                {/* <!-- Grid column --> */}
                                <hr className="w-100 clearfix d-md-none" />

                                {/* <!-- Grid column --> */}
                                <div className="col-md-4 text-white col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h5 style={{ color: "#fff" }} className="text-uppercase mb-4 fw-bold">Contact Us</h5>
                                    {/* <p><span>Location </span> {' '}: <i className="fas fa-home mr-3"></i>India , Singapore , Malaysia</p> */}
                                    <p className='mb-0'><Icon className='me-1' icon="mingcute:mail-fill" color="rgb(149, 120, 81)" width="24" height="24" />Email Us :</p>
                                    <p className='mt-2'>info@india-produced.com</p>
                                    <p className='mb-0'><Icon className='me-1' icon="bi:phone-fill" color="rgb(149, 120, 81)" width="24" height="24" />Call Us :</p>
                                    <p className='mt-2'> 9840389051</p>
                                </div>
                                {/* <!-- Grid column --> */}
                            </div>
                            {/* <!--Grid row--> */}
                        </section>
                        {/* <!-- Section: as --> */}

                        <hr className="my-2 text-white" />

                        {/* <!-- Section: Copyright --> */}
                        <section className="p-3 pt-0">
                            <div className="row d-flex align-items-center">
                                {/* <!-- Grid column --> */}
                                <div className="col-md-7 col-lg-8 text-center text-md-start">
                                    {/* <!-- Copyright --> */}
                                    <div className="p-3 text-white">
                                        © 2023 Copyrights <span style={{ color: "rgb(149, 120, 81)" }} className='fw-semibold'>India-Produced.com</span>
                                    </div>
                                    {/* <!-- Copyright --> */}
                                </div>
                                {/* <!-- Grid column --> */}

                                {/* <!-- Grid column --> */}
                                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                    <div className="social-icons">

                                        <a to="https://www.facebook.com/agpropertyfacility/" className="icon-link m-1" title="Facebook">
                                            <img src={Facebook} width={28} />
                                        </a>
                                        <a to="https://twitter.com/AG_propfac" className="icon-link m-1" title="Twitter">
                                            <img src={X} width={30} />
                                        </a>
                                        <a to="https://www.youtube.com/channel/UC_OJpayOZRdt6I4vkG-9uqA" className="icon-link m-1" title="Youtube">
                                            <img src={Youtube} width={30} />
                                        </a>
                                        <a to="https://www.instagram.com/agpf_media/" className="icon-link m-1" title="Instagram">
                                            <img src={Instagram} width={30} />
                                        </a>
                                        <a to="https://www.linkedin.com/company/99914068/admin/feed/posts/" className="icon-link m-1" title="Linkedin">
                                            <img src={Linkedin} width={30} />
                                        </a>
                                        <a to="https://in.pinterest.com/agpropertymanagement/" className="icon-link m-1" title="Pinterest">
                                            <img src={Pinterest} width={30} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </footer>
            </div>
        </>
    )
}
export default Footer
