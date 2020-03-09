import { Plugins, FilesystemDirectory, Capacitor } from '@capacitor/core';

const { Filesystem } = Plugins;

export const FileSaver = (
  _data: string,
  location: FilesystemDirectory = FilesystemDirectory.Documents,
  fileName: string = ''
) => {
  const writeFile_Mobile = async () => {
    console.log('PDf', _data);

    try {
      await Filesystem.writeFile({
        path: fileName,
        data: _data,
        directory: FilesystemDirectory.Cache
        // encoding: FilesystemEncoding.UTF8 // not requred to save base64
      });

      let path = await Filesystem.getUri({
        directory: FilesystemDirectory.Cache,
        path: fileName
      });

      return Capacitor.convertFileSrc(path.uri);
    } catch (e) {
      console.error('File System Error', e);
      throw e;
    }
  };

  const writeFile_Web = () => {
    var startIndex = _data.indexOf('base64,') + 7;

    var b64 = _data.substring(startIndex);

    var byteCharacters = atob(b64);

    var byteNumbers = new ArrayBuffer(byteCharacters.length);

    var byteArray = new Uint8Array(byteNumbers);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteArray[i] = byteCharacters.charCodeAt(i);
    }

    const fileBlob = new Blob([byteArray], { type: 'application/pdf' });
    return URL.createObjectURL(fileBlob);
  };
  return { writeFile_Mobile, writeFile_Web };
};
