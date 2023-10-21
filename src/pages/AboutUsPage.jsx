import React, {Fragment, useState} from "react";
import "../Styles/AboutUs.css";

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
                                <h2>Skills</h2>
                            </div>
                            <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
                            onClick={() => toggleState(3)}>
                                <h2>Clients</h2>
                            </div>
                        </div>

                        <div className="tab-content">
                            {/* About Content */}
                            <div className={toggleTab === 1 ? "content active-content": "content"}>
                                <h2>My Story</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ullam, delectus necessitatibus eos possimus culpa cupiditate, iste ea debitis, molestiae dolores! Odio molestiae esse nisi facere iure eaque. Laboriosam!</p>
                                <h3>We're ...</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi numquam laboriosam laborum delectus provident est voluptate perferendis fugit, minus excepturi odio, vitae officiis labore corrupti iure at vel, iste dolorem.</p>
                            </div>

                            {/* Skills Content */}

                            <div className={toggleTab === 2 ? "content active-content": "content"}>
                                <h2>Skills</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ullam, delectus necessitatibus eos possimus culpa cupiditate, iste ea debitis, molestiae dolores! Odio molestiae esse nisi facere iure eaque. Laboriosam!</p>
                                <h3>Something ...</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi numquam laboriosam laborum delectus provident est voluptate perferendis fugit, minus excepturi odio, vitae officiis labore corrupti iure at vel, iste dolorem.</p>
                            </div>

                            {/* Experience Content */}

                            <div className={toggleTab === 3 ? "content active-content": "content"}>
                                <div className="exp-column">
                                <h2>Clients</h2>
                                    <h3>Company 1</h3>
                                    <span>2021-2023</span>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ullam, delectus necessitatibus eos possimus culpa cupiditate, iste ea debitis, molestiae dolores! Odio molestiae esse nisi facere iure eaque. Laboriosam!</p>
                                </div>
                                <div className="exp-column">
                                    <h3>Company 2</h3>
                                    <span>2019-2023</span>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur doloremque ullam, delectus necessitatibus eos possimus culpa cupiditate, iste ea debitis, molestiae dolores! Odio molestiae esse nisi facere iure eaque. Laboriosam!</p>
                                </div>
                                <div className="exp-column">
                                    <h3>Company 3</h3>
                                    <span>2018-2023</span>
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