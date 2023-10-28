import React, {Fragment, useState} from "react";
import "../Styles/AboutUs.css";
import Img1 from "../assets/img/img1.jpg";

const AboutUsPage = () => {
    const [ toggleTab, setToggleTab] = useState(1)
    const toggleState = (index) => {
        setToggleTab(index)
    }
    return (
        <Fragment>
            <section className="about">
                <div className="row">
                    
                    <div className="column">
                        <div className="tabs">
                            <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(1)}
                            >
                                <h2>About</h2>
                            </div>
                            <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(2)}>
                                <h2>Products</h2>
                            </div>
                            <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(3)}>
                                <h2>Clients</h2>
                            </div>
                        </div>

                        <div className="tab-content">
                            {/* About Content */}
                            <div className={toggleTab === 1 ? "content active-content": "content"}>
                                <h2>Our Story</h2>
                                <p>The idea arose with the intention of providing our customers with original clothing that was easy to manage in quantity. Retail purchases or wholesale sales can be made to businesses, SMEs and companies.</p>
                                <h3>Our mission is ...</h3>
                                <p>Being able to make unique designs come true to give you style and why not, CREATE YOUR OWN EMPIRE!</p>
                            </div>

                            {/* Skills Content */}

                            <div className={toggleTab === 2 ? "content active-content": "content"}>
                                <h2>Quality of our products</h2>
                                <h3>T-shirts</h3>
                                <p>Garments 100% cotton Frosted Combed Jersey, matching Reeb collar with good rebound, entirely firm color with dye fixative for greater resistance to continuous washing, which highlights the excellent quality. We have a wide molding and size scale.</p>
                                <h3>Hoodies</h3>
                                <p>Visible Frisa garments, which are part cotton and part polyester, therefore they take very little to wash, with a wide shape, cuff on the neck and sleeve, neck strap or cleaning strip, made with two cotton threads and one made of polyester, with firm colors, and excellent touch.</p>
                                <h3>Accesories</h3>
                                <p>We have a variety of products, caps, headbands, necklaces, etc.</p>                            
                            </div>

                            {/* Experience Content */}

                            <div className={toggleTab === 3 ? "content active-content": "content"}>
                                <div className="exp-column">
                                <h2>Clients who trusted Reed</h2>
                                    <h3>Company 1</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ullam, delectus necessitatibus eos possimus culpa cupiditate, iste ea debitis, molestiae dolores! Odio molestiae esse nisi facere iure eaque. Laboriosam!</p>
                                </div>
                                <div className="exp-column">
                                    <h3>Company 2</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ullam, delectus necessitatibus eos possimus culpa cupiditate, iste ea debitis, molestiae dolores! Odio molestiae esse nisi facere iure eaque. Laboriosam!</p>
                                </div>
                                <div className="exp-column">
                                    <h3>Company 3</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ullam, delectus necessitatibus eos possimus culpa cupiditate, iste ea debitis, molestiae dolores! Odio molestiae esse nisi facere iure eaque. Laboriosam!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default AboutUsPage;