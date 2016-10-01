class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoList: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0]
    };
    console.log('current video passed into video player: ', this.state.currentVideo);
  }

  componentDidMount () {
    window.searchYouTube({ key: window.YOUTUBE_API_KEY, query: 'cats', max: 4 }, 
      (videoList) => { this.setState({ videoList: videoList}); });
  }



  handler(event) {
    this.setState({
      currentVideo: event 
    });
    console.log('state: ', this.state);
  }
 
  render() {
    console.log('current video passed into video player: ', this.state.currentVideo);
    return (
      <div>
        <Nav />
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



// step 1: define a handler function in the App component that will update App's state to a new video
// step 2: pass that handler function into App's children (eventually VideoListEntry) as props
// step 3: set an onclick listener on VideoListEntry's titles that will call App's handler function when clicked
// step 4: make the song that we send into VideoPlayer equal to whatever App's currentVideo state is set to