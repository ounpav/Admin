const vidElem = document.querySelector('#jw-player');
const vidJw = jwplayer('jw-player');
const movieElem = document.querySelector('#movie');
const movieJw = jwplayer('movie');
const logoImage = `https://blogger.googleusercontent.com/img/a/AVvXsEgjob8RTANZFIp4ie6YfnlTUQwXr067HX38U2I_tibE7QCm9GJOQxBJfxSORfCIUZtCaFVtdJH8TY507wDnQSE1rG80H5GxPrrkzjEwAXmg7C46pM3JblQXDFOl248SN-m6FQiEDr_cLQAfKUBySCK1mq4744O_0gj0kz8a79P-SV67nFezKwl-gxOn=s945`;
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