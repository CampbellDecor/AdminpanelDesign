import {
    Storage
} from '../Fire'

import {
    getDownloadURL,
    ref,
    uploadBytesResumable
} from 'firebase/storage'

export async function UploadFile(filename, data, afterUpload,onerror, onprocess)
{
    const storageref = await ref(Storage, filename);
    const upload = uploadBytesResumable(storageref, data);
     upload.on(
         'state_changed',
         snapshot => {
             const progressd =(snapshot.bytesTransferred / snapshot.totalBytes) * 100
            onprocess(progressd)
         },
         error => {
             onerror(error);
         },
         () => {
             getDownloadURL(upload.snapshot.ref).then(url => {
                afterUpload(url)
             })
         }
     )

}
