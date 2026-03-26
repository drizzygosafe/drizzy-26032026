export const handleDownload = () => {
  const ua = navigator.userAgent;

  if (/android/i.test(ua)) {
    window.open("https://play.google.com/store/apps/details?id=com.drizzy.user", "_blank");
  } 
  else if (/iPhone|iPad|iPod|macOS|Macintosh|MacIntel|MacPPC|Mac68K/i.test(ua)) {
    window.open("https://apps.apple.com/app/drizzy/id6752537717", "_blank");
  } 
  else {
    window.open("https://play.google.com/store/apps/details?id=com.drizzy.user", "_blank");
  }
};