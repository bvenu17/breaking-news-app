import React, {Component} from 'react';
import './Category.css';
import BusinessNews from '../FetchNews/BusinessNews';

class Business extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    componentDidMount() {
        const url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&sortBy=relevancy&pageSize=50&apiKey=df3e49ce0dbe4aa1ac58cf1f606f85f4';

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
    }

    renderItems = () => {
        return this.state.news.map((item) => (
            <BusinessNews key={item.id} item={item} />
        ));
    }

    render() {
        return(
            <div className="BusinessMainContainer">
                {this.renderItems()}
            </div>             
        );
    }
}

export default Business;
