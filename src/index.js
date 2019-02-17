import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import MusicCard from './components/music_card';

// import { db } from './db/db';

const db = {
    alternative: [
        {
            title: "Dancing Queen",
            artist: "Abba",
            videoId: "xFrGuyw1V8s",
        },
        {
            title: "Black",
            artist: "Pearl Jam",
            videoId: "4q9UafsiQ6k",
        },
        {
            title: "Mr. Jones",
            artist: "Counting Crows",
            videoId: "-oqAU5VxFWs",
        },
        {
            title: "Zombie",
            artist: "The Cranberries",
            videoId: "6Ejga4kJUts",
        }
    ]
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        };
    }

    next(action) {
        let current = this.state.current;
        if(action === "next") {
            if(current === db.alternative.length - 1) {
                this.setState({ current: 0 });
            }
            else {
                this.setState({ current: this.state.current + 1 });
            }
        }
        // previous
        else {
            if(current === 0) {
                this.setState({ current: db.alternative.length - 1 });
            }
            else {
                this.setState({ current: this.state.current - 1 });
            }
        }
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" color="inherit">
                            NoobMusic
                        </Typography>
                    </Toolbar>
                </AppBar>
                {
                    // db.alternative.map((item, index) => {
                    //     return <MusicCard key={index} data={item} />
                    // })
                    <MusicCard data={db.alternative[this.state.current]}
                    next={(a) => this.next(a)} />
                }
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)