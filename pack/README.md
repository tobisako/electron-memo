# pack
electron asar

## asar01

### electron-packager
オプション「--asar」をつける事で、asar圧縮を自動的に行ってくれる。asarコマンドを叩く必要無し。  

※asar圧縮しないケース：  
electron-packager . dist-pack-asar01 --platform=darwin --arch=x64 --electronVersion=8.1.0 --overwrite  
electron-packager . dist-pack-asar01 --platform=win32 --arch=x64 --electronVersion=8.1.0 --overwrite  

※asar圧縮するケース：  
electron-packager . dist-pack-asar01 --platform=darwin --arch=x64 --electronVersion=8.1.0 --overwrite --asar  
electron-packager . dist-pack-asar01 --platform=win32 --arch=x64 --electronVersion=8.1.0 --overwrite  --asar  

課題   
パック出力先フォルダ指定が出来ない。   
npm run xxx を使って調整する等。   

その他  
最近はwineを導入する必要が無くなっている。
