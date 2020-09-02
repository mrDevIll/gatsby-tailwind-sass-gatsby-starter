import React, {Component} from 'react';
import Header from './header';
import Footer from './footer';

class Layout  extends Component {
    // state = {  }
    render() { 
        return (
            <React.Fragment>
                <Header />
                    {this.props.children}
                <Footer />

            </React.Fragment>
          );
    }
}
 
export default Layout;