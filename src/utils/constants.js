export const MY_API_KEY = "AIzaSyCNohfQki3kYMPv4ohZLWjKN-X6clEL8bg";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  MY_API_KEY;

export const YOUTUBE_CATEGORIES_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=" +
  MY_API_KEY;

export const YOUTUBE_SELECTED_CATEGORIES_VIDEOS_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=2&regionCode=US&key=" +
  MY_API_KEY;

export const makeNumberVisible = (nums) => {
  let x = 12345678;
  x = x.toString();
  let lastThree = x.substring(x.length - 3);
  let otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers !== "") lastThree = "," + lastThree;
  let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return res;
};

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
