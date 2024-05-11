// define a make_album function
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three function and creating 3 varriables with  different  value
var album1 = make_album("Hamza", "Album title 1");
var album2 = make_album("Usman", "Album title 2");
// calling a make_album with third paremeters
var album3 = make_album("Ali", "Album title 3", 10);
// printing the varriables
console.log(album1);
console.log(album2);
console.log(album3);
