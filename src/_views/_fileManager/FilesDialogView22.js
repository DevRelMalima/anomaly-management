import React, {useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { red } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import {connect} from 'react-redux';
import {deleteUser, createUser, updateUser} from '../../_actions/userActions'
import axios from 'axios';
import isNullOrUndefined from 'util';
import {Link} from 'react-router-dom';
import { withSnackbar } from 'notistack';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
import FileIcon from '@material-ui/icons/InsertDriveFileOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';
import FolderIcon from '@material-ui/icons/FolderSharp';
import { green, purple } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
//import FolderIcon from '@material-ui/icons/Folder';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';
import Radio from '@material-ui/core/Radio';
import {     
        deleteFolder, 
        updateFolder,
        createFolder,
    } from '../../_actions/folderActions'
import {     
        deleteFile, 
        updateFile,
        createFile,
    } from '../../_actions/fileActions'

const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    paper: {
       
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        borderTop:'5px solid #0099FF'
    },
    iconButton: {
      margin: theme.spacing(1),
      fontSize: 24,
      color:'#444444'
    },
    bigAvatar: {
      margin: 10,
      width: 100,
      height: 100,
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
    },
    iconButton: {
        margin: theme.spacing(.5),
        fontSize: 24,
        color:'#164265'
    },
    iconButton2: {
        margin: theme.spacing(.5),
        fontSize: 20,
        color:'#555555'
    },
    iconButton3: {
        margin: theme.spacing(1),
        fontSize: 40,
        color:'#555555'
    },
    link: {
        margin: theme.spacing(2, 0),
        fontSize:16,
        marginRight: theme.spacing(1)
      },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    listItem: {
        width: '100%',
        maxWidth: 560,
        marginTop:10,
        backgroundColor: theme.palette.background.paper,
    },
    input: {
        display: 'none',
    },
  }));

  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

function FilesDialogView(props)
{
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [folderDialogOpen, setFolderDialogOpen] = React.useState(false);
    const [fileDialogOpen, setFileDialogOpen] = React.useState(false);    
    
    const folders = props.folders;
    const files = props.files;
    
    const isMultiSelect = props.isMultiSelect || false;
    //const { match: { params } } = props;
    //const currentFolderId = props.folderId || "";//params.folderId || "";
    const [selectedItem, setSelectedItem] = React.useState(props.selectedItem || "");
    const [selectedItems, setSelectedItems] = React.useState(props.selectedItems || []);
    const [currentFolderId, setCurrentFolderId] = React.useState(props.folderId || "");
    const [searchString, setSearchString] = React.useState("");    
    const [currentFolder, setCurrentFolder] = React.useState(folders.find(p=> {return p.id == currentFolderId}));    
    
    //const currentFolder = props.folders.find(p=> {return p.id == currentFolderId});
    
    const [isEditingFolder, setIsEditingFolder] = React.useState(false);   
    const [newFolder, setNewFolder] = React.useState(
      {
      id:"",
      folderName:"",
      parentFolderId:""
    });

    const [isEditingFile, setIsEditingFile] = React.useState(false);   
    const [newFile, setNewFile] = React.useState(
      {
      id:"",
      fileName:"",
      folderId:""
    });
    
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = value => () => {
        
        const currentIndex = selectedItems.indexOf(value);
        const newChecked = [...selectedItems];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        //console.warn(newChecked);

        setSelectedItems(newChecked);
        props.setSelectedItems(newChecked)
    };

    function handleFolderDialogOpen() {
      setIsEditingFolder(false);
      setNewFolder({
        id:"",
        folderName:"",
        parentFolderId:currentFolderId,
      });
      setFolderDialogOpen(true);
    }

    function handleFileDialogOpen() {
        setIsEditingFile(false);
        setNewFile({
          id:"",
          folderName:"",
          parentFolderId:currentFolderId,
        });
        setFileDialogOpen(true);
      }

    function handleFolderDialogClose() {
        setFolderDialogOpen(false);
    }

    function handleFileDialogClose() {
        setFileDialogOpen(false);
    }
   
    const deleteFolder = folderId => {       
        props.deleteFolder(folderId);
    }

    const deleteFile = fileId => {       
        props.deleteFile(fileId);
    }

    const editFolder = folderId => {
      
      setIsEditingFolder(true);
      let selectedFolder = folders.find(folder => {return folder.id == folderId});

      if(selectedFolder){
        setNewFolder(selectedFolder)
      }
       
      setFolderDialogOpen(true);
    }

    const editFile = fileId => {
      
        setIsEditingFile(true);
        let selectedFile = files.find(file => {return file.id == fileId});
  
        if(selectedFile){
          setNewFile(selectedFile)
        }
         
        setFileDialogOpen(true);
      }

    const  setSelection = (event) =>{
        setSelectedItem(event.target.value);
    }

    const handleFolderInputChange = event => {
      const { name, value } = event.target  
      setNewFolder({ ...newFolder, [name]: value })      
    }

    const handleSearchStringChange = event => {
        const { name, value } = event.target  
        setSearchString(value)      
      }

    const handleFileInputChange = event => {
        const { name, value } = event.target  
        setNewFile({ ...newFile, [name]: value })      
    }

    function createFile() {      
        props.createFile({...newFile,id:Math.random()});
        setFileDialogOpen(false);
    }

    function createFolder() {      
        props.createFolder({...newFolder,id:Math.random()});
        setFolderDialogOpen(false);
    }

    function updateFolder() {      
      props.updateFolder(newFolder);
      setFolderDialogOpen(false);
    }

    function updateFile() {      
        props.updateFile(newFile);
        setFileDialogOpen(false);
      }

    useEffect(() => {
        /*const fetchData = async () => {
        
        //if(isNullOrUndefined(props.projects))
        //  return;

      axios.get('http://localhost:56941/api/projects')
            .then((result) => {
              console.warn("result", result.data);
              props.fetchProjects(result.data);
               
            })
            .catch((ex) => {
                console.error(ex);
            });
  
        //setData(result.data);
      };
  
      fetchData();*/
    }, [props]);

    function onChange(e)
    {
      let files = e.target.files;
      console.warn("data file", files);

         

      const url = "";
       

      let form = new FormData();
      for (var index = 0; index < files.length; index++) {
            let element = files[index];
            let reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onload = (e)=>{
                
                props.createFile({fileName:element.name,id:Math.random(),folderId:currentFolderId});
                //console.warn("img data ", newCurrentUser)  
                //props.dispatch({type:'SET_CURRENT_USER', currentUser:newCurrentUser});
                //setThumbnail(e.target.result) ;
            }
            form.append('file', element);
      ////}

      form.append('file', element);
        
      axios.post('http://localhost:56941/api/files/upload', form, {headers:{'Access-Control-Allow-Origin': '*'}})
                .then((result) => {
                  console.warn("result", result)
                  
                    /*let message = "Success!"
                    if (!result.data.success) {
                        message = result.data.message;
                    }
                    this.setState({
                        ...state,
                        justFileServiceResponse: message
                    });*/
                })
                .catch((ex) => {
                    console.error(ex);
                });
            }

        /*return axios({
          url:'http://localhost:56941/api/files/upload',
          method:"POST",
          headers:{
            'Content-Type':'multipart/form-data'
          },
          data: formData
        }).then(response=>console.warn("result", response))*/
    }

    return(
        <main className={classes.content}>
        <div className={classes.toolbar}>
            <Grid>
            {props.dialogTitle || ""}
            </Grid>
            
            {currentFolderId != "" &&
            <ColorButton variant="contained"  onClick={()=>{setCurrentFolderId(currentFolder.parentFolderId);setCurrentFolder(folders.find(p=> {return p.id == currentFolder.parentFolderId}))}} size="big" className={classes.link}  color="primary">
              Back
            </ColorButton>
            }
            <ColorButton variant="contained"  size="big" className={classes.link}  color="primary" onClick={handleFolderDialogOpen}>
              <AddIcon/>New Folder
            </ColorButton>

            <ColorButton variant="contained"  size="big" className={classes.link}  color="primary" onClick={handleFileDialogOpen}>
              <AddIcon/>Upload File
            </ColorButton>

           

            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                value={searchString}
                onChange={handleSearchStringChange}
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'Search' }}
                />
            </div>

            {/* FILE DIALOG */}
            
            <Dialog open={fileDialogOpen} fullWidth  className={classes.modalDialog} onClose={handleFileDialogClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                {isEditingFolder ? (<span>Edit File</span>
                ): (<span>New File</span>)
                }   
                </DialogTitle>
                {isEditingFile ? (
                <React.Fragment>     
                <DialogContent>                          
                <TextField
                    autoFocus
                    margin="dense"
                    id="fileName"
                    label="File Name"
                    name="fileName"                
                    value={newFile.fileName}
                    onChange={handleFileInputChange}
                    fullWidth
                />
                </DialogContent>
                <DialogContent>
                <TextField
                    
                    margin="dense"
                    id="fileDescription"
                    label="File Description"
                    name="fileDescription"                  
                    value={newFile.fileDescription || ""}
                    onChange={handleFileInputChange}
                    fullWidth
                /></DialogContent></React.Fragment>
                ): (<React.Fragment><DialogContent><Grid justify="center" container
                    direction="column"
                    justify="center"
                    alignItems="center">
                                <Typography>{newFile.fileName}</Typography>                              
                                <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                                onChange={(e)=>onChange(e)}
                                />
                                <label htmlFor="contained-button-file">
                                <Button component="span" className={classes.button}>
                                    Upload file...
                                </Button>
                                </label>
                        </Grid>
                        </DialogContent>
                        </React.Fragment>)
                }  
                
                <DialogActions>
                <Button onClick={handleFileDialogClose} color="primary">
                    Cancel
                </Button>
                {isEditingFile ? (
                  <Button onClick={updateFile} color="primary">
                    Update
                  </Button>
                ): (
                  <Button onClick={createFile} color="primary">
                    Upload
                  </Button>
                )}  
                
                </DialogActions>
            </Dialog>
            {/* FOLDER DIALOG */}
            <Dialog open={folderDialogOpen} fullWidth  className={classes.modalDialog} onClose={handleFolderDialogClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                {isEditingFolder ? (<span>Edit Folder</span>
                ): (<span>New Folder</span>)
                }   
                </DialogTitle>
                <DialogContent>                
                <TextField
                    autoFocus
                    margin="dense"
                    id="folderName"
                    label="Folder Name"
                    name="folderName"                
                    value={newFolder.folderName}
                    onChange={handleFolderInputChange}
                    fullWidth
                />
                </DialogContent>
                <DialogContent>
                <TextField
                    
                    margin="dense"
                    id="folderDescription"
                    label="Folder Description"
                    name="folderDescription"                  
                    value={newFolder.folderDescription || ""}
                    onChange={handleFolderInputChange}
                    fullWidth
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleFolderDialogClose} color="primary">
                    Cancel
                </Button>
                {isEditingFolder ? (
                  <Button onClick={updateFolder} color="primary">
                    Update
                  </Button>
                ): (
                  <Button onClick={createFolder} color="primary">
                    Create
                  </Button>
                )}  
                
                </DialogActions>
            </Dialog>
        </div>
        
        <Grid container spacing={1}>
            {(files && files.length >0) ?                
              <List className={classes.listItem}>
               {folders.filter(f => (searchString == "" && f.parentFolderId == currentFolderId )|| (searchString != "" && f.folderName.toLowerCase().indexOf(searchString)>=0)).map(value => {
                  const labelId = `checkbox-list-label-${value.id}`;
      
                  return (
                  <ListItem key={value.id} role={undefined} button >
                      <ListItemIcon>
                      {isMultiSelect &&
                      <Checkbox
                          edge="start"
                          checked={checked.indexOf(value.id) !== -1}
                          onClick={handleToggle(value.id)} 
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                      />                      
                      }
                      <FolderIcon style={{color:'#ff9900'}}  className={classes.iconButton3} />
                      </ListItemIcon>
                      <ListItemText id={labelId} secondary={value.fileSize}>
                        <Button size="small"  onClick={()=>{setCurrentFolderId(value.id);setCurrentFolder(value)}} color="primary">
                            <Typography>{value.folderName}</Typography>
                        </Button>
                        </ListItemText>
                      <ListItemSecondaryAction>
                        <IconButton size="small" onClick={() => editFolder(value.id)} color="primary">
                          <EditIcon  className={classes.iconButton2} />
                        </IconButton>
                        <IconButton size="small" onClick={() => deleteFolder(value.id)} color="primary">
                          <DeleteIcon  className={classes.iconButton2} />
                        </IconButton>
                      </ListItemSecondaryAction>
                  </ListItem>
                  );
              })}
              {files.filter(f => (searchString == "" && f.folderId == currentFolderId) || (searchString != "" && f.fileName.toLowerCase().indexOf(searchString)>=0)).map(value => {
                  const labelId = `checkbox-list-label-${value.id}`;
      
                  return (
                  <ListItem key={value.id} role={undefined} Button>
                      <ListItemIcon>
                      {isMultiSelect ? <Checkbox
                          edge="start"
                          checked={selectedItems.indexOf(value.id) !== -1 || selectedItems.includes(value.id)}
                          onClick={handleToggle(value.id)}
                          value={value.id}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                      />:
                      <Radio
                        checked={selectedItem == value.id || selectedItems.includes(value.id)}
                        onChange={setSelection}
                        value={value.id}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'A' }}
                       />
                      }
                      <FileIcon style={{color:'#7b5731'}} className={classes.iconButton3} />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={value.fileName} secondary={value.fileSize} />
                      <ListItemSecondaryAction>
                        <IconButton size="small" onClick={() => editFile(value.id)} color="primary">
                          <EditIcon  className={classes.iconButton2} />
                        </IconButton>
                        <IconButton size="small" onClick={() => deleteFile(value.id)} color="primary">
                          <DeleteIcon  className={classes.iconButton2} />
                        </IconButton>
                      </ListItemSecondaryAction>
                  </ListItem>
                  );
              })}
              </List>
            : <Grid item xs={12} alignItems="center"><Typography  style={{margin:20,fontSize:30}}>No Users</Typography></Grid>}
          </Grid>
          </main>
    );
}

const mapStateToProps= (state) => {
  return {
    projects: state.projects,
    users: state.users,
    files:state.files,
    folders:state.folders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFolder:(id) => {dispatch(deleteFolder(id))},
    createFolder:(folder) => {dispatch(createFolder(folder))},
    updateFolder:(folder) => {dispatch(updateFolder(folder))},
    deleteFile:(id) => {dispatch(deleteFile(id))},
    createFile:(folder) => {dispatch(createFile(folder))},
    updateFile:(folder) => {dispatch(updateFile(folder))},
  }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(FilesDialogView));