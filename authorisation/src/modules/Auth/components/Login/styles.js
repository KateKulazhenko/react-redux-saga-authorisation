const styles = () => ({
    button: {
        minWidth: '100%',
        marginTop: 20 + 'px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 40,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
    },
    header: {
        padding: '20px',
        color: 'white',
        textAlign: 'center'
    },
    logo: {
        animation: 'App-logo-spin infinite 20s linear',
        height: '55px'
    },
    title: {
        fontSize: '1.5em',
        textAlign: 'center'
    },
    formLogin: {
        width: '195px',
        margin: '0 auto'
    },
    '@keyframes App-logo-spin': {
        'from': {
            'transform': 'rotate(0deg)'
        },
        'to' : {
            'transform': 'rotate(360deg)'
        }
    }
});

export default styles;