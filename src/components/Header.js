import React from 'react'

export default class Header extends React.Component {
    render() {
        return (
            <header className="sticky">
                <div className="container">
                    <div className="nav-brand">
                        <a href="https://nostalgic-css.github.io/NES.css/">
                            <h1>
                                <i className="nes-pokeball"></i>Pokemon!
                            </h1>
                        </a>
                        <p>NES-style CSS Framework.</p>
                    </div>
                    <div className="social-buttons">
                        <p>Share on SNS</p>
                        <div className="share">
                            <a 
                                href="https://twitter.com/share?text=NES.css%EF%BD%9CNES-style%20CSS%20Framework%20%40bc_rikko&amp;url=https://nostalgic-css.github.io/NES.css/" 
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="nes-icon twitter"></i>
                            </a>
                            <a 
                                href="https://www.facebook.com/sharer.php?u=https://nostalgic-css.github.io/NES.css/&amp;t=NES.css%EF%BD%9CNES-style%20CSS%20Framework" 
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="nes-icon facebook"></i>
                            </a>
                            <a 
                                href="https://www.linkedin.com/shareArticle?url=https%3A//nostalgic-css.github.io/NES.css/&amp;title=NES.css%EF%BD%9CNES-style%20CSS%20Framework" 
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="nes-icon linkedin"></i>
                            </a>
                            <a 
                                href="https://github.com/nostalgic-css/NES.css" 
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="nes-icon github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}