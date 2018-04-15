import React, {Component} from 'react';
import Header from "./header";
import Player from "./page/player";

class Root extends Component {

    componentDidMount() {
        // eslint-disable-next-line
        $('#player').jPlayer({
            ready: function () {
                // eslint-disable-next-line
                $(this).jPlayer('setMedia', {
                    mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E6%88%90%E9%83%BD.mp3'
                }).jPlayer('play');
            },
            supplied: 'mp3',
            wmode: 'window',
            volume: .3
        });

    }

    render() {
        return (
            <div>
                <Header/>
                <Player/>
            </div>
        );
    }

}

Root.defaultProps = {"abc": 123, progress: "-"};

export default Root;
