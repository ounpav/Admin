const vidElem = document.querySelector('#jw-player');
const vidJw = jwplayer('jw-player');
const movieElem = document.querySelector('#movie');
const movieJw = jwplayer('movie');
const logoImage = `https://blogger.googleusercontent.com/img/a/AVvXsEguHefLRTwVk9hpuvwNj4Oi9aLLyNikkT_7VjJAXItbkLy5n1eKjU9GH2_81Dllu99A1DMuUbKwaM-2WP15Jwt_T_qTSRE8mgyiaW9T8Skva2Eu0YVTju9MlKvaMnabFD3vEjGcR-QFzTw4HXMOBEmRDRipME5DrJxlpFR9mikvUZe2hQRqWLU9xScp=s1280`;
const createCustomLogo = () => {
    let logo = {
        file: logoImage,
        hide: false,
        margin: "20",
        position: "top-left",
        link: homePageUrl
    }
    return logo;
}
const loadJwPlayer = () => {
    try {
        if (vidElem) {
            vidJw.setup({
                file: file.src,
                logo: createCustomLogo(),
                image: getBlogPostImage()
            })
        } else if (movieElem) {
            movieJw.setup({
                logo: createCustomLogo(),
                captions: {
                    fontSize: 14,
                    backgroundOpacity: 0,
                    edgeStyle: "raised"
                },
                playlist: [{
                    image: getBlogPostImage(),
                    file: movie.src,
                    captions: [{
                            label: movie.subtitles[0].lang,
                            file: movie.subtitles[0].src,
                            default: true
                        },
                        {
                            label: movie.subtitles[1].lang,
                            file: movie.subtitles[1].src
                        }
                    ]
                }]
            })
        }
    } catch (e) {
        console.log(`Error! ការកំណត់របស់អ្នកមិនត្រឹមត្រូវទេ។`)
    }
};
window.addEventListener('DOMContentLoaded', loadJwPlayer);
