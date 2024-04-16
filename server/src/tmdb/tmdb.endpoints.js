import tmdbConfig from "./tmdb.config"

const tmdbEndpoints = {
    mediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, page
    ),
    mediaDetail
}