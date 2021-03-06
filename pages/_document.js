import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                
                {/* <!-- Bootstrap Min CSS --> */}
                <link scroll={false} rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                {/* <!-- Animate Min CSS --> */}
                <link scroll={false} rel="stylesheet" href="/assets/css/animate.css" />
                {/* <!-- Font Awesome Min CSS --> */}
                <link scroll={false} rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
                {/* <!-- Magnific Popup Min CSS --> */}
                <link scroll={false} rel="stylesheet" href="/assets/css/magnific-popup.css" />
                {/* <!-- IcoFont Min CSS --> */}
                <link scroll={false} rel="stylesheet" href="/assets/css/icofont.css" />
                {/* <!-- Owl Carousel Min CSS --> */}
                <link scroll={false} rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
                {/* <!-- Classy Nav Min CSS--> */}
                <link scroll={false} rel="stylesheet" href="/assets/css/classy-nav.min.css" />
                {/* <!-- Gallery Slider CSS--> */}
                <link scroll={false} rel="stylesheet" href="/assets/css/gallery-slider.css" />
                {/* <!-- Style CSS --> */}
                <link scroll={false} rel="stylesheet" href="/assets/css/style.css" />
                {/* <!-- Responsive Min CSS --> */}
                <link scroll={false} rel="stylesheet" href="/assets/css/responsive.css" />
                {/* <!-- Color Default CSS -->	 */}
                <link scroll={false} rel="stylesheet" href="/assets/css/color/color-default.css" />
                {/* <!-- Color Switcher CSS -->	 */}
                <link scroll={false} rel="stylesheet" href="/assets/dist/color-switcher.css" />

                <link scroll={false} rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
