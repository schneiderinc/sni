import { Plugins, FilesystemDirectory, Capacitor } from '@capacitor/core';

const { Filesystem } = Plugins;

export const FileSaver = (
  _data: string,
  location: FilesystemDirectory = FilesystemDirectory.Documents,
  fileName: string = ''
) => {
  const writeFileToDisk = async () => {
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

      console.log('PDF URL', Capacitor.convertFileSrc(path.uri));
      return Capacitor.convertFileSrc(path.uri);
      //setFilePath(Capacitor.convertFileSrc(path.uri));
    } catch (e) {
      console.error('File System Error', e);
      throw e;
    }
  };
  return { writeFileToDisk };
};
