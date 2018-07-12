function theBeatlesPlay(arraymus,arrayinst){
    const music = [];
    
    for (let index = 0, len = arraymus.length; index < len; index++) {
      music.push(`${arraymus[index]} plays ${arrayinst[index]}`);
    }
    
  return music;
}
    