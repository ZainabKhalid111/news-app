import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

// export class News extends Component {
const News = (props) => {

    // to change state in fbc
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState([true])
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)

    // used in class based components
    // static defaultProps = {
    //     country: 'in',
    //     pageSize: 10,
    //     category: 'general'
    // }

    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string
    // }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // if want to use props in constructor then pass them as arguments,,used in cbc
    // constructor(props) {
    //     super(props);
    //     // console.log('hello! constructor from news')
    //     this.state = {
    //         articles: [],
    //         loading: true,
    //         page: 1,
    //         length: 1,
    //         totalResults: 0
    //     }
    document.title = `${capitalizeFirstLetter(props.category)} - DailyNews`;


    // replace all this.props with props
    // async updateNews() {
    const updateNews = async () => {
        props.setProgress(10);

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize} `;

        // this.setState({ loading: true });
        setloading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        // console.log(parsedData);
        props.setProgress(50);
        // fbcs
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // })
        props.setProgress(100);

    }

    // useEffect will do the same as componentDidMount
    useEffect(() => {
        updateNews();
    }, [])

    // cbcs
    // async componentDidMount() {
    // console.log("hello cdm");
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=f07735d34aa04c6bbb8855de5fb9e802&page=1&pageSize=${props.pageSize} `;

    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //     articles: parsedData.articles,
    //     totalResults: parsedData.totalResults,
    //     loading: false
    // })
    //     this.updateNe s();
    // }

    // const handlepreviousclick = async () => {
    //     console.log("previous");

    //     // let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=f07735d34aa04c6bbb8855de5fb9e802&page=${this.state.page - 1} & pageSize =${props.pageSize} `;
    //     // this.setState({ loading: true });
    //     // let data = await fetch(url);
    //     // let parsedData = await data.json()
    //     // // console.log(parsedData);

    //     // this.setState({
    //     //     page: this.state.page - 1,
    //     //     articles: parsedData.articles,
    //     //     loading: false
    //     // })

    //     // this.setState({
    //     //     page: this.state.page - 1

    //     // });
    //     setpage(page - 1)
    //     updateNews();
    // }

    // const handlenextclick = async () => {
    //     console.log("next");


    //     // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //     //     //do nothing


    //     //     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=f07735d34aa04c6bbb8855de5fb9e802&page=${this.state.page + 1}& pageSize =${props.pageSize} `;
    //     //     this.setState({ loading: true });
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json()
    //     //     console.log(parsedData);

    //     //     this.setState({
    //     //         page: this.state.page + 1,
    //     //         articles: parsedData.articles,
    //     //         loading: false

    //     //     })
    //     //     // console.log(this.articles);
    //     // }
    //     // this.setState({
    //     //     page: this.state.page + 1
    //     // })
    //     setpage(page + 1)
    //     updateNews();
    // }

    //function for fetching more data through scroll
    const fetchMoreData = async () => {
        // this.setState({ page: this.state.page + 1 })


        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize} `;
        setpage(page + 1)
        // this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        // this.setState({
        //     articles: this.state.articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults,
        //     loading: false

        // })
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)


    }

    // render() {
    // console.log("hello render");
    return (
        <>
            <h1 className='text-center my-4'>DailyNews - Top    {capitalizeFirstLetter(props.category)}  Headlines</h1>
            {/* spinner at top */}
            {loading && <Spinner />}

            {/* {this.state.articles.map((Element) => { console.log(Element) })} */}
            {/* console.log("hello"); */}
            <InfiniteScroll
                datalength={articles?.length}
                loadMore={fetchMoreData}
                hasMore={articles?.length !== totalResults}
                loader={<Spinner />}
            >

                <div className="container">

                    <div className="row">
                        {/* accessing elements from api */}
                        {/* {!this.state.loading &&   this.state.articles.map((Element) =>} */}
                        {articles?.map((Element) => {
                            return <div className="col-md-4" key={Element.url} >
                                <NewsItems title={Element.title ? Element.title.slice(0, 45) : ""} description={Element.description ? Element.description.slice(0, 88) : " "} imageUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author} date={Element.publishedAt} source={Element.source.name} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>

            {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&laquo;Previous</button>

                    <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick} >Next &raquo;</button>
                </div> */}


        </>

    )

}

// in function based proptypes are written at the end with functionname.proptypes
News.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
