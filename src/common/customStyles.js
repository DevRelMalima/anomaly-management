import { lighten, fade, makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240

export const useStyles = makeStyles(theme => ({
    customButtonIcon: {
        fontSize: 16,
        marginRight: 2
    },
    search: {
        position: 'relative',
        border: '1px #CCCCCC solid',
        margin: 10,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 1.0),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.95),
        },
        marginLeft: 0,
        width: '100%',
        maxWidth: 560,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(4),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#999999'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },

    icon: {
        marginRight: theme.spacing(2),
    },
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: 'rgba(156, 209, 149, 1)',
        color: '#555555',
    },
    menuButton: {
        marginRight: theme.spacing(0),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    toolbarTitle: {
        flexGrow: 1,
        verticalAlign: 'middle'
    },
    smallAvatar: {
        margin: 4,
        width: 32,
        height: 32,
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        fontSize: 10,
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerPaper: {
        width: drawerWidth,
        background: '#EFEFEF',
        color: '#1c75bc'
    },
    content: {
        flexGrow: 1,
        //padding: theme.spacing(5, 3),
        background: '#FFFFFF',
        position:'relative',
        minHeight: '100vh',
        maxHeight: '100vh',
        width:'100vw',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100vw - ${drawerWidth + 50}px)`,
        },
    },

    childContent: {
        flexGrow: 1,
        padding: theme.spacing(5, 3),
        background: '#dae5e6',
       
        maxHeight: '100%'
    },
    //link: {
    //margin: theme.spacing(1, 1.5),
    //},
    icon: {
        marginRight: theme.spacing(2),
    },
    iconButton: {
        margin: theme.spacing(1),
        fontSize: 24,
        color: '#444444'
    },
    bigAvatar: {
        margin: 10,
        width: 120,
        height: 120,
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    modalDialog: {
        width: '100%',
    },

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderTop: '5px #0099FF solid',
        minWidth: '100px'
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },


    cardContent: {
        flexGrow: 1,
        height:'100%'
    },
    link: {
        margin: theme.spacing(2, 0),
        fontSize: 16
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    listContainer:
    {
        maxWidth: '600px'
    },
    /////////////////////
    paper: {

        margin: `${theme.spacing(0.2)}px auto`,
        padding: theme.spacing(1),
        borderTop: '0px solid #0099FF',
        maxWidth: 600,
        boxShadow: 'none'
    },
    taskPaper: {

        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        borderTop: '5px solid #0099FF',
        boxShadow: 'none'
    },
    iconButton: {
        margin: theme.spacing(.5),
        fontSize: 24,
        color: '#164265'
    },
    iconButton2: {
        margin: theme.spacing(.5),
        fontSize: 20,
        color: '#555555'
    },
    iconButton3: {
        margin: theme.spacing(1),
        fontSize: 45,
        color: '#555555'
    },
    hidden: {
        display: 'none',
    },
    ganttContainer: {
        marginLeft: drawerWidth,
        overflow: "scroll",
        maxWidth: '100%',
        display: 'flex',
        right: 0,
        position: "fixed",
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth + 50}px)`,
        },
    },
    taskGroupCard: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'rgba(255,255,255,0.18)',
        border: '0px dotted #7d8abb',
        width: 400,

        boxShadow: 'none',
        marginRight: '20px'
    },
    taskGroupWrapper: {
        display: 'flex',
       
        maxHeight:'100%',
        flexWrap: 'wrap',
        justifyContent: 'left',
        overflow: 'hidden',
        /*height: 'calc(100% - 120px)',    */    
        width:'100%',
        position: 'absolute',
        right:'0px',
        left:'0px',
        bottom:'0px',
        top:'200px',

        //width: `calc(100% - ${drawerWidth+50}px)`,
        //backgroundColor: theme.palette.background.paper,
    },
    breadCrumbPaper: {
        maxWidth: 400,
        padding: theme.spacing(2),
        borderLeft: '0px solid #FF0099',
        background: 'none'
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120,
    },
    listItem: {
        width: '100%',
        maxWidth: 600,
        marginTop: 10,
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        //transform: 'translateZ(0)',
    },
    fixedHeight: {
        height: 240,
    },
}));
