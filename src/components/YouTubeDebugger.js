// Code YouTubeDebugger Component Here
import React from 'react'
export default class YouTubeDebugger extends React.Componetn{
  constructor(){
    super()
    this.state = {
      errors: [], 
      user: null, 
      settings: {
        bitrate: 8,
         video: {
            resolution: '1080p' 
          } 
      }
    };
  }
  handleBitrate = () => {
    this.setState({
        settings: Object.assign({}, this.state.settings, {
          bitrate: 12
        }),
      });
  }
  
  handleResoluton = () =>    {
    this.setState({
      settings: Object.assign({}, this.state.settigs, {
        video: Object.asign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })
    })
  }

  render(){
    return(
      <button className="bitrate" onClick={this.handleBitrate}>Change Bitrate</button>
      <button className="resoluton" onClick-{this.handleResoluton}>Change Resolution</button>

    )
  }
}
