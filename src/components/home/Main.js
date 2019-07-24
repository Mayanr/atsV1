import React, { Fragment, Component } from 'react';
import Heading from '../layout/Heading';

const Main = () => {
    return(
        <Fragment>
            <Heading/>
                <div className ="main">
                    <div id="mainTitle">
                        <h1>Supercharge Your Recruiting Team </h1>
                            <p>
                            Phasellus eleifend commodo justo, at pharetra ipsum. Praesent tristique mauris quis urna consectetur ultrices. Praesent metus nisi, faucibus in sodales sit amet, ultricies at sem. Etiam sed suscipit neque, vel tincidunt justo. Aliquam rutrum ante eget metus suscipit aliquam. Cras neque sapien, condimentum sit amet lorem vel, bibendum interdum risus.
                            </p>
                            <div id="CTAbuttons">
                                <button>Call To Action</button>
                                <button>Call To Action</button>
                            </div>
                    </div>
                    <img src="http://kanpaiblue.com.br/templates/foundation/tpl/plugins/masterslider/slider-templates/phone/style/phone.png" alt="phone" />
                </div>

                <section id= "features">
                <h1>Features</h1>
                </section>

                <section id= "testimonials">
                <h1>Testimonials</h1>
                </section>

                <section id= "blog">
                <h1>Blog</h1>
                </section>

                <section id= "pricing">
                <h1>Pricing</h1>
                </section>
        </Fragment>
    )
}

export default Main;