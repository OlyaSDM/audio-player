# Music Player

This project is a simple music player built using HTML, CSS, and JavaScript. It allows users to play, pause, and navigate through a list of songs, as well as adjust the volume and create a customized listening experience.

## Features

- Play, pause, and skip songs.
- Display song information (artist and title).
- Change the album artwork.
- Volume control with visual feedback.
- Progress bar showing current playback time.
- Shuffle and repeat options.
- Responsive design compatible with various devices.

## Technologies Used

- HTML
- CSS
- JavaScript

## Installation

To use this project, follow these steps:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/music-player.git
   ```
2. Navigate to the project directory:
   ```bash
   cd music-player
   ```
3. Open `index.html` in your web browser.

## Usage

- Add your audio files to the `./assets/audio/` directory and update the `music` object in the JavaScript file with the correct paths.
- Add corresponding album cover images to the `./assets/images/` directory.
- Click the play button to start listening to your music.
- Use the left and right buttons to navigate between songs.
- Adjust the volume by clicking on the volume slider.
- Click on the progress bar to skip to a specific part of the song.

## Code Explanation

The main code structure consists of an object `music` that stores song details:

```javascript
const music = {
    1: {
        singer: "Benson Boone",
        song: 'Beautiful Things',
        img: './assets/images/things.png',
        src: './assets/audio/Benson-Boone-Beautiful-Things.mp3'
    },
    // ... more songs
};
```

### Key Functions

- **load()**: Initializes audio and loads specified tracks.
- **playAudio(current)**: Plays or pauses the currently selected track.
- **nextMusic()**: Proceeds to the next track in the list.
- **prevMusic()**: Goes back to the previous track.
- **setVolume(e)**: Adjusts the volume based on user input.

## Contributing

Contributions are welcome! Please feel free to submit any issues or pull requests. 

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For any questions, feel free to reach out or open an issue in this repository! Enjoy your music! 🎶
