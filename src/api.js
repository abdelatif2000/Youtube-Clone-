import axios from 'axios'
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: ' AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U',
        clientKey:'101481780855780569209'
        // AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U
        //AIzaSyBYKTNQL2lIlHw84Kys_11mCk8qdFOU4oY
    },
})

export default request;
