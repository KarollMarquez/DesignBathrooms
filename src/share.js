export const handleShare = (platform) => {
  const url = window.location.href;
  const text = "Check out this amazing website!";

  const shareUrls = {
    Facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    Instagram: `https://www.instagram.com/?url=${url}`,
    Twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    Tumblr: `https://www.tumblr.com/share/link?url=${url}&name=${text}`,
    Pinterest: `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`,
  };

  if (navigator.share) {
    navigator.share({ title: document.title, text, url });
  } else {
    window.open(shareUrls[platform], "_blank");
  }
};
