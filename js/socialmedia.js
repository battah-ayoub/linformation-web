/*

    social media share 

    whatssap : 
        https://api.whatsapp.com/send?text=[post-title] [post-url]
    facebook : 
        https://www.facebook.com/sharer.php?u=[post-url]
    twitter : 
        https://twitter.com/share?url=[post-url]&text=[post-title]
    Google+ :
      https://plus.google.com/share?url=[post-url]
    Pinterest :
      https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
    LinkedIn:
      https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]
    Tumblr: 
    https://www.tumblr.com/share/link?url=[post-url]&name=[post-title]&description=[post-desc]
    Email :
        $email = 'mailto:?subject=' . $[post-title] . '&body=Check out this site: '. $[post-url] .'" title="Share by Email';

*/
const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const instagramBtn = document.querySelector(".instagram-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
const emailBtn = document.querySelector(".email-btn");


function init(){
  const pinterestImg  = document.querySelector('.pinterest-imgs');
  let postUrl   = encodeURI(document.location.href);
  let postTitle = encodeURI("Hi evryone , please check this out: ");
  let postImg   = encodeURI(pinterestImg.src) ;

  facebookBtn.setAttribute(
    "href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`
  );
  twitterBtn.setAttribute(
    "href",
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
  );
  linkedinBtn.setAttribute(
    "href",
    `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
  );
  instagramBtn.setAttribute(
    "href",
    `https://www.instagram.com/sharer.php?u=${postUrl}`
  );
  whatsappBtn.setAttribute(
    "href",
    `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
  );
  pinterestBtn.setAttribute(
    "href",
    `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
  );
  emailBtn.setAttribute(
    `$email = 'mailto:?subject=' . ${postTitle} . ${postUrl} .'" title="Share by Email';`
  );
  
}
init();
