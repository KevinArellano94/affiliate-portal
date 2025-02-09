import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <div className="hero-container">
                <h1 className="hero-title">
                    Transform Your Influence Into Revenue
                </h1>
                <p className="hero-description">
                    Welcome to the next generation of affiliate marketing. Our AI-powered platform revolutionizes how you track, earn, and grow your passive income streams.
                </p>
                <button className="cta-button" onClick={ () => navigate("/login") }>
                    Start Earning Now
                </button>
            </div>
            <section className="features-section">
                <h2 className="features-title">Cutting-Edge Features</h2>
                
                <div className="feature-card">
                    <div className="feature-icon">
                        {/* icon */}
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 20.25C4.30189 20.2474 4.11263 20.1676 3.97253 20.0275C3.83244 19.8874 3.75259 19.6981 3.75 19.5V4.5C3.75 4.30109 3.82902 4.11032 3.96967 3.96967C4.11032 3.82902 4.30109 3.75 4.5 3.75C4.69891 3.75 4.88968 3.82902 5.03033 3.96967C5.17098 4.11032 5.25 4.30109 5.25 4.5V19.5C5.24741 19.6981 5.16756 19.8874 5.02747 20.0275C4.88737 20.1676 4.69811 20.2474 4.5 20.25Z" fill="#60A5FA"/>
                            <path d="M19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5C3.75 19.3011 3.82902 19.1103 3.96967 18.9697C4.11032 18.829 4.30109 18.75 4.5 18.75H19.5C19.6989 18.75 19.8897 18.829 20.0303 18.9697C20.171 19.1103 20.25 19.3011 20.25 19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25Z" fill="#60A5FA"/>
                            <path d="M8 16.75C7.80189 16.7474 7.61263 16.6676 7.47253 16.5275C7.33244 16.3874 7.25259 16.1981 7.25 16V12C7.25 11.8011 7.32902 11.6103 7.46967 11.4697C7.61032 11.329 7.80109 11.25 8 11.25C8.19891 11.25 8.38968 11.329 8.53033 11.4697C8.67098 11.6103 8.75 11.8011 8.75 12V16C8.74741 16.1981 8.66756 16.3874 8.52747 16.5275C8.38737 16.6676 8.19811 16.7474 8 16.75Z" fill="#60A5FA"/>
                            <path d="M11.5 16.75C11.3019 16.7474 11.1126 16.6676 10.9725 16.5275C10.8324 16.3874 10.7526 16.1981 10.75 16V8C10.75 7.80109 10.829 7.61032 10.9697 7.46967C11.1103 7.32902 11.3011 7.25 11.5 7.25C11.6989 7.25 11.8897 7.32902 12.0303 7.46967C12.171 7.61032 12.25 7.80109 12.25 8V16C12.2474 16.1981 12.1676 16.3874 12.0275 16.5275C11.8874 16.6676 11.6981 16.7474 11.5 16.75Z" fill="#60A5FA"/>
                            <path d="M15 16.75C14.8019 16.7474 14.6126 16.6676 14.4725 16.5275C14.3324 16.3874 14.2526 16.1981 14.25 16V12C14.25 11.8011 14.329 11.6103 14.4697 11.4697C14.6103 11.329 14.8011 11.25 15 11.25C15.1989 11.25 15.3897 11.329 15.5303 11.4697C15.671 11.6103 15.75 11.8011 15.75 12V16C15.7474 16.1981 15.6676 16.3874 15.5275 16.5275C15.3874 16.6676 15.1981 16.7474 15 16.75Z" fill="#60A5FA"/>
                            <path d="M18.5 16.75C18.3019 16.7474 18.1126 16.6676 17.9725 16.5275C17.8324 16.3874 17.7526 16.1981 17.75 16V8C17.75 7.80109 17.829 7.61032 17.9697 7.46967C18.1103 7.32902 18.3011 7.25 18.5 7.25C18.6989 7.25 18.8897 7.32902 19.0303 7.46967C19.171 7.61032 19.25 7.80109 19.25 8V16C19.2474 16.1981 19.1676 16.3874 19.0275 16.5275C18.8874 16.6676 18.6981 16.7474 18.5 16.75Z" fill="#60A5FA"/>
                        </svg>
                    </div>
                    <h3 className="feature-title">Smart Analytics Dashboard</h3>
                    <p className="feature-description">
                        Real-time performance metrics, revenue tracking, and AI-powered insights all in one intuitive interface. Monitor your success with precision.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        {/* icon */}
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="#60A5FA"/>
                        </svg>
                    </div>
                    <h3 className="feature-title">Multi-Platform Attribution</h3>
                    <p className="feature-description">
                        Advanced tracking algorithms identify your traffic sources across all major platforms, ensuring you get credited for every conversion.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        {/* icon */}
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M3 8V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3Z" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="feature-title">Fledible Payouts</h3>
                    <p className="feature-description">
                        Earn 25% recurring commission with instant payments via Stripe, Wise, or PapPayl. Your success shouldn't wait.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        {/* icon */}
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.73169L19.5 5.39836V12.75C19.5 15.6371 17.5419 18.9972 12.2605 20.9533L12 21.0498L11.7395 20.9533C6.45811 18.9972 4.5 15.6371 4.5 12.75V5.39836L12 3.73169ZM6 6.60161V12.75C6 14.8245 7.3659 17.6481 12 19.4479C16.6341 17.6481 18 14.8245 18 12.75V6.60161L12 5.26828L6 6.60161Z" fill="#60A5FA"/>
                        </svg>
                    </div>
                    <h3 className="feature-title">Enhanced Security</h3>
                    <p className="feature-description">
                        Coming soon: Two-factor authentication for bulletproof account protection. Your earnings deserve military-grade security.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        {/* icon */}
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#60A5FA"/>
                            <path d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" fill="#60A5FA"/>
                        </svg>
                    </div>
                    <h3 className="feature-title">Automated Withdrwals</h3>
                    <p className="feature-description">
                        Coming soon: Schedule your payments on autopilot. Set it once, and let our system handle the rest.
                    </p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        {/* icon */}
                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z" fill="#60A5FA"/>
                        </svg>
                    </div>
                    <h3 className="feature-title">Global Expansion</h3>
                    <p className="feature-description">
                        Coming soon: Breaking beyond North America. Your influence knows no borders, and soon, neither will we.
                    </p>
                </div>
            </section>

            <section className="cta-section">
                <h2 className="cta-title">Ready to Scale Your Affiliate Income?</h2>
                <p className="cta-description">
                    Join thousands of successful affiliates who are already leveraging our next-gen platform to automate their earnings.
                </p>
                <button className="cta-button" onClick={ () => navigate("/login") }>Join the Revolution</button>
            </section>
        </>
    )
}

export default Home;
