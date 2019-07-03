import React, { Component } from 'react';
import './IndexPage.css';
import Breakpoint, { BreakpointProvider } from 'react-socks';

class IndexPage extends Component {    
      render() {
    
        return(
            <BreakpointProvider>
                <Breakpoint large up>
                    <div className="indexContainerDesktop">
                        <h1 className="indexHeadingDesktop">Welcome to BreakingNews.com </h1>
                        <p className="indexParagraphDesktop">Get access to all the latest news articles from top sources</p>
                    </div>
                </Breakpoint>
                <Breakpoint small down>
                    <div className="indexContainerMobile">
                        <h1 className="indexHeadingMobile">Welcome to BreakingNews.com </h1>
                        <p className="indexParagraphMobile">Get access to all the latest news articles from top sources</p>
                    </div>
                </Breakpoint>
                <Breakpoint medium only>
                    <div className="indexContainerTablet">
                        <h1 className="indexHeadingTablet">Welcome to BreakingNews.com </h1>
                        <p className="indexParagraphTablet">Get access to all the latest news articles from top sources</p>
                    </div>
                </Breakpoint>
            </BreakpointProvider>
        );
    }
}

export default IndexPage;