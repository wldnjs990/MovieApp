const e = {
  id: 64980,
  url: "https://yts.mx/movies/the-girls-aloud-show-live-at-the-o2-2024",
  imdb_code: "tt34657457",
  title: "The Girls Aloud Show: Live at the O2",
  title_english: "The Girls Aloud Show: Live at the O2",
  title_long: "The Girls Aloud Show: Live at the O2 (2024)",
  slug: "the-girls-aloud-show-live-at-the-o2-2024",
  year: 2024,
  rating: 8.8,
  runtime: 92,
  genres: ["Music"],
  summary: "",
  description_full: "",
  synopsis: "",
  yt_trailer_code: "sc3JZYhD4L4",
  language: "en",
  mpa_rating: "",
  background_image:
    "https://yts.mx/assets/images/movies/the_girls_aloud_show_live_at_the_o2_2024/background.jpg",
  background_image_original:
    "https://yts.mx/assets/images/movies/the_girls_aloud_show_live_at_the_o2_2024/background.jpg",
  small_cover_image:
    "https://yts.mx/assets/images/movies/the_girls_aloud_show_live_at_the_o2_2024/small-cover.jpg",
  medium_cover_image:
    "https://yts.mx/assets/images/movies/the_girls_aloud_show_live_at_the_o2_2024/medium-cover.jpg",
  large_cover_image:
    "https://yts.mx/assets/images/movies/the_girls_aloud_show_live_at_the_o2_2024/large-cover.jpg",
  state: "ok",
  torrents: [
    {
      url: "https://yts.mx/torrent/download/6ACF41DDF6FD25A340C653AA0BCD88E60E8015FA",
      hash: "6ACF41DDF6FD25A340C653AA0BCD88E60E8015FA",
      quality: "720p",
      type: "web",
      is_repack: "0",
      video_codec: "x264",
      bit_depth: "8",
      audio_channels: "2.0",
      seeds: 18,
      peers: 8,
      size: "849.07 MB",
      size_bytes: 890314424,
      date_uploaded: "2024-11-18 04:48:25",
      date_uploaded_unix: 1731901705,
    },
    {
      url: "https://yts.mx/torrent/download/D18AFD1577068FC36BDAFE799318E792FF6ADB93",
      hash: "D18AFD1577068FC36BDAFE799318E792FF6ADB93",
      quality: "1080p",
      type: "web",
      is_repack: "0",
      video_codec: "x264",
      bit_depth: "8",
      audio_channels: "2.0",
      seeds: 46,
      peers: 6,
      size: "1.54 GB",
      size_bytes: 1653562409,
      date_uploaded: "2024-11-18 05:56:46",
      date_uploaded_unix: 1731905806,
    },
  ],
  date_uploaded: "2024-11-18 04:48:25",
  date_uploaded_unix: 1731901705,
};

export interface movieJsonType {
  id: number;
  url: string;
  imdb_code: string;
  title: string;
  title_english: string;
  title_long: string;
  slug: string;
  year: number;
  rating: number;
  runtime: number;
  genres: string[];
  summary: string;
  description_full: string;
  synopsis: string;
  yt_trailer_code: string;
  language: string;
  mpa_rating: string;
  background_image: string;
  background_image_original: string;
  small_cover_image: string;
  medium_cover_image: string;
  large_cover_image: string;
  state: string;
  torrents: {
    url: string;
    hash: string;
    quality: string;
    type: string;
    is_repack: string;
    video_codec: string;
    bit_depth: string;
    audio_channels: string;
    seeds: number;
    peers: number;
    size: string;
    size_bytes: number;
    date_uploaded: string;
    date_uploaded_unix: number;
  }[];
  date_uploaded: string;
}
