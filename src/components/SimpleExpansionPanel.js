import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});



function SimpleExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>WHAT IS BAKERS'RACE'S GOAL?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography style={{ textAlign: 'left' }}>
                        Baking is a totally new industry with good and bad services. Competition will tell which services will thrive. As it is a new industry, it can be hard for a Tezos holder to choose which service he/she should delegate its XTZ to. Here, at BAKERS'RACE We want to help Tezos holders to make the right decision when it comes to delegation.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>WHAT IS A GOOD BAKER?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography style={{ textAlign: 'left' }}>
                        A good baker pays rewards to its delegators each cycle or each 2/3 cycles max. A good baker is efficient. A good baker is transparent when it comes to its share.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>WHAT IS YOUR METHODOLOGY?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography style={{ textAlign: 'left' }}>
                        We delegated 10 xtz at cycle 34 to more or less 60 baking services that made any kind of communication regarding its services. We track and display the results.<br></br>We did not take into account bakers' required minimum  amount of tezzies as we believe it is one the main point of misunderstanding when it comes to delegation.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}

SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
