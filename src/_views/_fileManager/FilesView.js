import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import { lighten, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { deleteUser, createUser, updateUser } from '../../_actions/userActions'
import axios from 'axios';
import isNullOrUndefined from 'util';
import { Link } from 'react-router-dom';
import { withSnackbar } from 'notistack';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import CloudDownloadIcon from '@material-ui/icons/CloudDownloadOutlined';
import EditIcon from '@material-ui/icons/EditOutlined';
//import FileIcon from '@material-ui/icons/InsertDriveFileOutlined';
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

import LinearProgress from '@material-ui/core/LinearProgress';
import { authenticationService } from '@/_services';
import FileIcon from '../../_images/icons/files/file_icon.inline.svg';
import AlertDialog from '../../_components/AlertDialog'
import { PlainButton, ColorButton } from '@/_utilities/CustomButtons'
import EmptyBox from '@/_images/icons/empty_box_icon.inline.svg';
import { useStyles } from '@/_utilities/CommonStyles';
import { v4 as uuidv4 } from 'uuid';
import { BaseURL } from '../../constants/URLs/urls'



const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    borderRadius: 20,
    backgroundColor: lighten('#4caf50', 0.8),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#4caf50',
  },
})(LinearProgress);


function FilesView(props) {
  const classes = useStyles();
  //const [open, setOpen] = React.useState(false);
  const [folderDialogOpen, setFolderDialogOpen] = React.useState(false);
  const [fileDialogOpen, setFileDialogOpen] = React.useState(false);
  const folders = props.folders;
  //const [folders, setFolders] = React.useState(props.folders || []);

  const files = props.files;
  const [dialogProps, setDialogProps] = React.useState({});
  const [openAlert, setOpenAlert] = React.useState(false);
  //const { match: { params } } = props;
  //console.warn('Fileman', props)
  //var params = {folderId: ""};
  const params = props.match != null && props.match.params != null ? props.match.params : null;

  const isMultiSelect = props.isMultiSelect != null ? props.isMultiSelect != null : true;
  var _currentFolderId = params && params.folderId || '';

  const isInDialogView = props.isInDialogView != null ? props.isInDialogView : true;// (params && params.folderId) == null

  const [currentFolderId, setCurrentFolderId] = React.useState(_currentFolderId);

  //const currentFolder = props.folders.find(p=> {return p.id == _currentFolderId});
  const [currentFolder, setCurrentFolder] = React.useState(props.folders.find(p => { return p.id == currentFolderId }));
  const [parentFolder, setParentFolder] = React.useState(currentFolder != null ? props.folders.find(p => { return p.id == currentFolder.parentFolderId }) : null);

  const [selectedItem, setSelectedItem] = React.useState(props.selectedItem || "");
  const [selectedItems, setSelectedItems] = React.useState(props.selectedItems || []);

  console.warn('Fileman', currentFolderId)
  console.warn('isInDialogView', isInDialogView)

  const [fileUploadProgress, setFileUploadProgress] = React.useState(0);
  const [isEditingFolder, setIsEditingFolder] = React.useState(false);
  const [newFolder, setNewFolder] = React.useState(
    {
      id: "",
      folderName: "New Folder",
      parentFolderId: ""
    });

  const [isEditingFile, setIsEditingFile] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const [newFile, setNewFile] = React.useState(
    {
      id: "",
      fileName: "",
      folderId: ""
    });

  const [checked, setChecked] = React.useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    setSelectedItems(newChecked);
    props.setSelectedItems && props.setSelectedItems(newChecked)
    //console.warn(checked)
  };

  function handleFolderDialogOpen() {
    setIsEditingFolder(false);
    setNewFolder({
      id: "",
      folderName: "",
      parentFolderId: currentFolderId,
    });
    setFolderDialogOpen(true);
  }

  function formatSizeUnits(bytes) {
    if (bytes >= 1073741824) { bytes = (bytes / 1073741824).toFixed(2) + " GB"; }
    else if (bytes >= 1048576) { bytes = (bytes / 1048576).toFixed(2) + " MB"; }
    else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
    else if (bytes > 1) { bytes = bytes + " bytes"; }
    else if (bytes == 1) { bytes = bytes + " byte"; }
    else { bytes = "0 bytes"; }
    return bytes;
  }
  function handleFileDialogOpen() {
    setIsEditingFile(false);
    setNewFile({
      id: "",
      folderName: "",
      parentFolderId: currentFolderId,
    });
    setFileDialogOpen(true);
  }

  function handleFolderDialogClose() {
    setFolderDialogOpen(false);
  }

  function handleFileDialogClose() {
    setFileDialogOpen(false);
  }

  const deleteFolder = folder => {

    if (folder) {
      setOpenAlert(true);

      setDialogProps({
        ...dialogProps, dialogTitle: "Delete folder",
        dialogMessage: "Delete folder: " + folder.folderName,
        okAction: () => { props.deleteFolder(folder); setOpenAlert(false) }
      })
    }

    //props.deleteFolder(folder);
  }

  const deleteFile = fileId => {
    props.deleteFile(fileId);
  }

  const editFolder = folderId => {

    setIsEditingFolder(true);
    let selectedFolder = folders.find(folder => { return folder.id == folderId });

    if (selectedFolder) {
      setNewFolder(selectedFolder)
    }

    setFolderDialogOpen(true);
  }

  const editFile = fileId => {

    setIsEditingFile(true);
    let selectedFile = files.find(file => { return file.id == fileId });

    if (selectedFile) {
      setNewFile(selectedFile)
    }

    setFileDialogOpen(true);
  }

  const handleFolderInputChange = event => {
    const { name, value } = event.target
    setNewFolder({ ...newFolder, [name]: value })
  }

  const handleFileInputChange = event => {
    const { name, value } = event.target
    setNewFile({ ...newFile, [name]: value })
  }

  const handleSearchStringChange = event => {
    const { name, value } = event.target
    setSearchString(value)
  }

  function createFile() {
    props.createFile({ ...newFile, id: Math.random() });
    setFileDialogOpen(false);
  }

  function createFolder() {
    props.createFolder({ ...newFolder, parentFolderId: currentFolderId });
    setFolderDialogOpen(false);
  }

  function updateFolder() {
    props.updateFolder(newFolder);
    setFolderDialogOpen(false);
  }

  const setSelection = (event) => {
    console.log('selected file', event.target.value)
    setSelectedItem(event.target.value);
  }

  function updateFile() {
    props.updateFile(newFile);
    setFileDialogOpen(false);
  }

  function handlerSetCurrentFolder(folderId) {
    setCurrentFolderId(folderId)
    setCurrentFolder(folders.find(p => { return p.id == folderId }));

  }

  function handleSelectAllClick() {
    if (checked && checked.length > 0 || selectedItems && selectedItems.length > 0) {
      setChecked([])
      setSelectedItems([])
    }
    else {
      let fileIds = files.filter(f => f.folderId == currentFolderId || f.folderId == null).map(f => f.id)
      //console.warn('selectedfileids', fileIds);
      let folderIds = folders.filter(f => f.parentFolderId == currentFolderId).map(f => f.id)
      setChecked([...fileIds, ...folderIds])
      setSelectedItems([...fileIds, ...folderIds])
    }
  }

  useEffect(() => {
    console.warn("sfs", currentFolderId)
    console.warn("sdadafs", props.folders.find(p => { return p.id == currentFolderId }))
    setCurrentFolder(props.folders.find(p => { return p.id == currentFolderId }));
    setParentFolder(currentFolder != null ? props.folders.find(p => { return p.id == currentFolder.parentFolderId }) : null);

    //setFolders(props.folders);    

  }, [props]);

  const downloadFile = (fileId, fileName) => {

    const currentUser = authenticationService.currentUserValue;
    var config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Authorization": `Bearer ${currentUser.token}`
      },
    };

    axios.get(BaseURL + '/api/files/download/' + fileId, config)
      .then((response) => {
        //console.warn("result", result)
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();

      })
      .catch((ex) => {
        console.error(ex);
      });


  }

  function onChange(e) {
    let files = e.target.files;
    console.warn("data file", files);

    const currentUser = authenticationService.currentUserValue;

    const url = "";


    let uploadedFiles = []
    for (var index = 0; index < files.length; index++) {
      let form = new FormData();


      let element = files[index];
      let reader = new FileReader();
      reader.readAsDataURL(element);
      reader.onload = (e) => {
        //props.createFile({ fileName: element.name, fileType: element.type, fileSize: element.size, id: uuidv4(), folderId: currentFolderId });
      }


      let fileUploadId = uuidv4()
      uploadedFiles.push({ fileName: element.name, fileType: element.type, fileSize: element.size, uploadProgress: 0, id: fileUploadId })

      setSelectedFiles([...uploadedFiles])

      form.append('file', element);

      var config = {

        onUploadProgress: function (progressEvent) {
          let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(percentCompleted);
          console.log("Total Size", progressEvent.total);

          let fileUps = uploadedFiles.find(f => f.id == fileUploadId)
          //console.warn('selectedfileids', fileIds);
          
          if (fileUps) {
            fileUps.uploadProgress = percentCompleted;

          }
          //let updatedSelectedFiles = selectedFiles.filter(f => f.id != fileUploadId)

          let updatedSelectedFiles = uploadedFiles.map(
            (f, i) => f.id === fileUploadId ? fileUps : f)

          //setSelectedItems([...fileIds, ...folderIds])
          setSelectedFiles([...updatedSelectedFiles])

          //setFileUploadProgress(percentCompleted);
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Authorization": `Bearer ${currentUser.token}`
        }

      };

      axios.post(BaseURL + '/api/files/upload/' + currentFolderId, form, config)
        .then((result) => {
          console.warn("result", result)
          props.createFile({ ...result.data });
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


    console.warn("img data ", selectedFiles)

    /*return axios({
      url:'http://localhost:56941/api/files/upload',
      method:"POST",
      headers:{
        'Content-Type':'multipart/form-data'
      },
      data: formData
    }).then(response=>console.warn("result", response))*/
  }

  return (
    <main style={{ background: 'none' }} className={classes.content}>
      <div className={classes.toolbar}>
        <AlertDialog open={openAlert} cancelAction={() => setOpenAlert(false)} {...dialogProps} />
        <Typography style={{ fontSize: 20, color: '#555555' }}>{currentFolder != null ? currentFolder.folderName : '/root'}</Typography>
        <Typography style={{ fontSize: 13, color: '#888888' }}>{currentFolder != null ? parentFolder != null ? parentFolder.folderName : '/root' : ''}</Typography>

        {currentFolder &&

          ((isInDialogView) ?
            <ColorButton size="small" className={classes.link} color="primary" onClick={() => handlerSetCurrentFolder(currentFolder.parentFolderId)}>
              <Typography>Back</Typography>
            </ColorButton>
            : <ColorButton variant="contained" component={Link} onClick={() => handlerSetCurrentFolder(currentFolder.parentFolderId)} to={currentFolder.parentFolderId != null ? "/filemanager/" + currentFolder.parentFolderId : "/filemanager/"} size="small" className={classes.link} color="primary">
              Back
</ColorButton>)

        }
        <PlainButton onClick={handleFolderDialogOpen}>
          New Folder
            </PlainButton>

        <PlainButton onClick={handleFileDialogOpen}>
          Upload File
            </PlainButton>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            value={searchString}
            placeholder="Search…"
            onChange={handleSearchStringChange}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'Search' }}
          />
        </div>

        <div>
          <PlainButton variant={(checked && checked.length > 0) ? "outlined" : "none"} onClick={handleSelectAllClick}>
            Select All
            </PlainButton>

          <PlainButton style={{ color: 'red' }} disabled={checked && checked.length <= 0} onClick={handleFileDialogOpen}>
            Delete
            </PlainButton>
        </div>



        {/* FILE DIALOG */}

        <Dialog open={fileDialogOpen} fullWidth className={classes.modalDialog} onClose={handleFileDialogClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            {isEditingFolder ? (<span>Edit File</span>
            ) : (<span>Upload Files</span>)
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
          ) : (<React.Fragment><DialogContent><Grid container
            direction="column"
            justify="center"
            alignItems="center">
            <Typography>{selectedFiles.length} Selected file(s)</Typography>
            <Typography>{newFile.fileName}</Typography>
            <input
              accept="image/*"
              className={classes.hidden}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => onChange(e)}
            />
            <label htmlFor="contained-button-file">
              <Button component="span" className={classes.button}>
                Upload file...
                                </Button>
            </label>


          </Grid>
            {selectedFiles.map(selectedFile => {
              return (
                <React.Fragment>
                  <Typography>{selectedFile.fileName}</Typography>
                  {parseInt(selectedFile.uploadProgress, 10) > 0 &&
                    <BorderLinearProgress
                      className={classes.margin}
                      variant="determinate"
                      color="primary"
                      value={selectedFile.uploadProgress}
                    />
                  }
                </React.Fragment>
              );
            }
            )}


          </DialogContent>
          </React.Fragment>)
          }

          <DialogActions>
            <Button onClick={handleFileDialogClose} color="primary">
              Close
                </Button>
            {isEditingFile &&
              <Button onClick={updateFile} color="primary">
                Update
                  </Button>}
            {/*isEditingFile ? (
                  <Button onClick={updateFile} color="primary">
                    Update
                  </Button>
                ): (
                  <Button onClick={createFile} color="primary">
                    Upload
                  </Button>
                )*/}

          </DialogActions>
        </Dialog>
        {/* FOLDER DIALOG */}
        <Dialog open={folderDialogOpen} fullWidth className={classes.modalDialog} onClose={handleFolderDialogClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">
            {isEditingFolder ? (<span>Edit Folder</span>
            ) : (<span>New Folder</span>)
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
            ) : (
                <Button onClick={createFolder} color="primary">
                  Create
                </Button>
              )}

          </DialogActions>
        </Dialog>
      </div>

      <Grid container spacing={1}>
        {(folders.filter(f => (searchString != "" && f.folderName.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) || searchString == "").filter(f => f.parentFolderId == currentFolderId || (f.parentFolderId == null && currentFolderId == '')).length > 0
          || files.filter(f => (searchString == "" && f.folderId == currentFolderId || !f.folderId && currentFolderId == '') || (searchString != "" && f.fileName.toLowerCase().indexOf(searchString) >= 0)).length > 0) ?
          <List className={classes.listItem}>
            {folders.filter(f => (searchString != "" && f.folderName.toLowerCase().indexOf(searchString.toLowerCase()) >= 0) || searchString == "").filter(f => f.parentFolderId == currentFolderId || (f.parentFolderId == null && currentFolderId == '')).map(value => {
              const labelId = `checkbox-list-label-${value.id}`;

              return (
                <ListItem key={value.id} role={undefined} button >
                  <Checkbox
                    edge="start"
                    color="default"
                    checked={checked.indexOf(value.id) !== -1}
                    onClick={handleToggle(value.id)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                  <FolderIcon style={{ color: 'FF9900' }} className={classes.iconButton3} />

                  <ListItemText style={{ fontSize: 8 }} id={labelId} secondary={"Folders: " + folders.filter(i => i.parentFolderId == value.id).length + ", Files: " + files.filter(i => i.folderId == value.id).length}>


                    {(isInDialogView) ?
                      <Button size="small" color="primary" onClick={() => handlerSetCurrentFolder(value.id)}>
                        <Typography>{value.folderName}</Typography>
                      </Button>
                      : <Button classes={{
                        root: classes.inputRoot,
                        input: classes.buttonInput,
                      }} size="small" style={{ padding: 0, textAlign: 'left', textTransform: 'none' }} component={Link} onClick={() => handlerSetCurrentFolder(value.id)} to={value.id != null ? "/filemanager/" + value.id : "/filemanager"} color="primary">
                        <Typography>{value.folderName}</Typography>
                      </Button>}


                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton size="small" onClick={() => editFolder(value.id)} color="primary">
                      <EditIcon className={classes.iconButton2} />
                    </IconButton>
                    <IconButton size="small" onClick={() => deleteFolder(value)} color="primary">
                      <DeleteIcon className={classes.iconButton2} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
            {files.filter(f => (searchString == "" && f.folderId == currentFolderId || !f.folderId && currentFolderId == '') || (searchString != "" && f.fileName.toLowerCase().indexOf(searchString) >= 0)).map(value => {
              const labelId = `checkbox-list-label-${value.id}`;

              return (
                <ListItem key={value.id} role={undefined} button>

                  {isMultiSelect ? <Checkbox
                    edge="start"
                    color="default"
                    checked={selectedItems.indexOf(value.id) !== -1 || selectedItems.includes(value.id)}
                    onClick={handleToggle(value.id)}
                    value={value.id}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  /> :
                    <Radio
                      checked={selectedItem == value.id || selectedItems.includes(value.id)}
                      onChange={setSelection}
                      color="default"
                      value={value.id}
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': 'A' }}
                    />
                  }
                  <FileIcon style={{ color: 'FF9900' }} className={classes.iconButton3} />

                  <ListItemText id={labelId} primary={value.fileName} secondary={formatSizeUnits(value.fileSize)} />
                  <ListItemSecondaryAction>
                    <IconButton size="small" onClick={() => downloadFile(value.id, value.fileName)} color="primary">
                      <CloudDownloadIcon className={classes.iconButton2} />
                    </IconButton>
                    <IconButton size="small" onClick={() => editFile(value.id)} color="primary">
                      <EditIcon className={classes.iconButton2} />
                    </IconButton>
                    <IconButton size="small" onClick={() => deleteFile(value.id)} color="primary">
                      <DeleteIcon className={classes.iconButton2} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            })}
          </List>
          : <Grid className={classes.listItem} item xs={12} container direction="column"
            justify="space-between" alignItems="center"><EmptyBox /><Typography style={{ margin: 20, fontSize: 20, color: '#777777' }}>Empty</Typography></Grid>}
      </Grid>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    users: state.users,
    files: state.files,
    folders: state.folders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFolder: (folder) => { dispatch(deleteFolder(folder)) },
    createFolder: (folder) => { dispatch(createFolder(folder)) },
    updateFolder: (folder) => { dispatch(updateFolder(folder)) },
    deleteFile: (id) => { dispatch(deleteFile(id)) },
    createFile: (folder) => { dispatch(createFile(folder)) },
    updateFile: (folder) => { dispatch(updateFile(folder)) },
  }
}

export default withSnackbar(connect(mapStateToProps, mapDispatchToProps)(FilesView));