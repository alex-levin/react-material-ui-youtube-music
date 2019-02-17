import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const styles = theme => ({
    card: {
        display: 'flex'
    },
    details: {
        display: 'flex',
        flexDirection: 'column'
    },
    content: {
        flex: '1 0 auto'
    },
    cover: {
        width: 151
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit
    },
    playIcon: {
        height: 38,
        width: 38
    }
});

// Stateless control
function MusicCard(props) {
    const { classes, theme } = props;
    
    function play() {
        document.getElementById("video").src += "?autoplay=1";
    }

    return (
        <Card className={classes.card}>
            <div className={classes.details}>
                <CardContent classname={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.data.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.data.artist}
                    </Typography>
                    <iframe width="230" height="154" id="video"
                        src={"https://www.youtube.com/embed/" + props.data.videoId}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="Previous" onClick={() => props.next("prev")}>
                        {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                    </IconButton>
                    <IconButton aria-label="Play/pause" onClick={() => play()}>
                        <PlayArrowIcon classname={classes.playIcon} />
                    </IconButton>
                    <IconButton aria-label="Next" onClick={() => props.next("next")}>
                        {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                    </IconButton>                                        
                </div>
            </div>
            <CardMedia 
                className={classes.cover}
                image='/statis/images/cards/live-from-space.jpg'
                title="Live from space album cover"
            />
        </Card>
    )
}

MusicCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MusicCard);
