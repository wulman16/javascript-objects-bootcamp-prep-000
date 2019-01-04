var playlist = {
  'SOPHIE': 'Immaterial',
  'Yuck': 'The Wall',
  'Carly Rae Jepsen': 'I Didn\'t Just Come Here to Dance'
}

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}