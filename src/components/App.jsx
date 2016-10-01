var App = (props) => {


  console.log('window.exampleVideoData we pass into VideoPlayer: ', props);
  console.log('window.exampleVideoData[0] we pass into VideoPlayer: ', window.exampleVideoData[0]);

  return (
    <div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={props}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={window.exampleVideoData} />
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
