class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
  }

  componentDidMount () {
    this.getNewVideos('Milkshake');
  }

  getNewVideos (query) {
    window.searchYouTube({ key: window.YOUTUBE_API_KEY, query: query, max: 5 }, 
    (videoList) => { this.setState({ videoList: videoList, currentVideo: videoList[0]}); });
  }

  searchHandler(searchInput) {
    console.log(searchInput);
    this.getNewVideos(searchInput);
  }

  handler(event) {
    this.setState({
      currentVideo: event 
    });
  }
 
  render() {
    return (
      <div>
        <Nav searchHandler={this.searchHandler.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} handler={this.handler.bind(this)} />
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;



// step 1: make query input a variable
// step 2: make a SearchInputHandler that changes 'query' in searchYouTube based on an input
// step 3: pass SearchInputHandler down to Nav component (remember to bind the keyword 'this' to the App instance)
// step 4: pass SearchInputHandler down to the Search component
// step 5: set up onChange listener on the input field that runs SearchInputHandler(value of text in field)
// step 6: worry about throttling shit