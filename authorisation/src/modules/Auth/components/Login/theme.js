import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
    overrides: {
        MuiInput: {
            input: {
                backgroundColor: '#15171c',
                color: 'white',
            },
        },
    },
});

export default theme;