const folders = [
  {
    id: 5,
    name: 'Klasör 1',
    files: [ { id: 17, name: 'profil.jpg' }, { id: 18, name: 'manzara.jpg'} ],
  },{
    id: 6,
    name: 'Klasör 2',
    files: [ { id: 21, name: 'foto.png' }, { id: 22, name: 'dosya.xls' } ],
  },{
    id: 7,
    name: 'Klasör 3',
  }]

function folder(val) {
    return folders.find((f) => f.files && f.files.find((file) => file.id === val))
}

function copy(from, to) {
    const toFolder = folders.find((f) => f.id === to)

    if ( folder(from) && folder(from).id === to) {
        console.log("Already in the file folder")
    } else if (folder(from) && toFolder) {
        const fileIndex = folder(from).files.findIndex((f) => f.id === from)
        toFolder.files ?  toFolder.files.push(folder(from).files[fileIndex]) : toFolder.files = [folder(from).files[fileIndex]]
    } else {    
        console.log("Not Found");
        return 0
    }
}

function move(from, to) {
    copy(from, to) !== 0 ? remove(from) : ''
}

function parentFolderOf(val) {
    folder(val) ? console.log(folder(val).id) : console.log("Not Found");
}

function removeFolder(val) {
    const findex = folders.findIndex((f) => f.id === val)
    findex !== -1 ? folders.splice(findex, 1) : console.log("Not Found");
}

function remove(val) {
    folder(val) ? folder(val).files.splice(folder(val).files.findIndex((f) => f.id === val), 1) : console.log("Not Found");
}

 console.log('After: ', folders );
// move(17,7) // dosyayı klasöre taşıyacak
// copy(18,7) // kopyasını oluşturacak
// remove(18) // dosyayı silecek
// removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
// parentFolderOf(17) // ==> 5
 console.log("Before:", folders);
