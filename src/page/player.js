import React, {Component} from 'react';
import Progress from "../progress";

export default class Player extends Component {

    duration = null;
    state = {
        progress: 0,
        loop: true
    };

    componentDidMount() {
        // eslint-disable-next-line
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            this.duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute.toFixed(1)
            });
        });
        // eslint-disable-next-line
        $('#player').bind($.jPlayer.event.ended, (e) => {
            // eslint-disable-next-line
            this.state.loop && $('#player').jPlayer('play', 0);
        });
    }

    componentWillUnmount() {
        // eslint-disable-next-line
        $('#player').unbind($.jPlayer.event.timeupdate);
        // eslint-disable-next-line
        $('#player').unbind($.jPlayer.event.ended);
    }

    progressChangeHandler(progress) {
        // console.log(progress);
        // eslint-disable-next-line
        $('#player').jPlayer('play', this.duration * progress);
    }

    render() {
        return (
            <div>
                <Progress progress={this.state.progress}
                          onProgressChange={this.progressChangeHandler.bind(this)}
                />
            </div>
        );
    }

}
