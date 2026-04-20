// ─────────────────────────────────────────────────────────────────
//  FeelGoodNews — stories.js
//  This is your CMS (Content Management System).
//
//  HOW TO ADD A NEW STORY:
//  1. Copy one of the story objects below (everything between { and })
//  2. Paste it at the TOP of the STORIES array (so newest shows first)
//  3. Fill in each field with your story's details
//  4. Save the file — the homepage will update automatically!
//
//  HOW TO ADD A REAL PHOTO:
//  1. Drop your image file into the "images/" folder
//     (create that folder next to index.html if it doesn't exist yet)
//  2. Set imgUrl to "images/your-filename.jpg"
//  3. You can leave emoji blank ("") once you have a real image
//
//  FIELD GUIDE: (should prob get to know these bro)
//    emoji   — a placeholder shown when there's no real photo yet
//    imgUrl  — path to a real photo, e.g. "images/story1.jpg"
//              leave as "" to show the emoji instead
//    tag     — short category label shown on the card
//    title   — the story headline
//    excerpt — a 1–2 sentence summary shown on the card
//    author  — the journalist's full name
//    date    — publication date (written however you like)
//    url     — link to the full article page
//              use "#" as a placeholder until the page is built
// ─────────────────────────────────────────────────────────────────

const STORIES = [
  {
    emoji:   "🐾",
    imgUrl:  "",
    tag:     "Animals",
    title:   "Rescue Dog Trains to Become Certified Therapy Animal",
    excerpt: "After being found wandering the streets, Biscuit the beagle found his calling, and now brings comfort to hospital patients every week.",
    author:  "Jamie Lee",
    date:    "March 28, 2025",
    url:     "#"
  },
  {
    emoji:   "🎓",
    imgUrl:  "",
    tag:     "Education",
    title:   "Student Invents Low-Cost Water Filter to Help Her Own Village",
    excerpt: "A 17-year-old from rural Kenya built a simple device that now provides clean drinking water for 200 families in her community.",
    author:  "Sam Rivera",
    date:    "March 26, 2025",
    url:     "#"
  },
  {
    emoji:   "🌱",
    imgUrl:  "",
    tag:     "Environment",
    title:   "City Turns Abandoned Lot Into Thriving Community Garden",
    excerpt: "What was once a neglected eyesore in downtown Cleveland is now a lush oasis producing food for local food banks year-round.",
    author:  "Jamie Lee",
    date:    "March 24, 2025",
    url:     "#"
  }
];
 
// ─────────────────────────────────────────────────────────────────
//  FEATURED STORY (shown in the hero banner on the homepage)
//  Update this object to change the featured story.
// ─────────────────────────────────────────────────────────────────
 
const FEATURED_STORY = {
  emoji:   "🌻",
  imgUrl:  "",
  title:   "Local Community Plants 1,000 Trees in a Single Weekend",
  excerpt: "Neighbours in a small Ohio town came together for an extraordinary act of generosity, and transformed their city park forever.",
  url:     "#"
};
 
// ─────────────────────────────────────────────────────────────────
//  Rendering functions — no need to edit anything below this line
// ─────────────────────────────────────────────────────────────────
 
function renderFeatured() {
  const imgEl = document.getElementById('featured-img');
  const titleEl = document.getElementById('featured-title');
  const excerptEl = document.getElementById('featured-excerpt');
  const linkEl = document.getElementById('featured-link');
 
  if (FEATURED_STORY.imgUrl) {
    imgEl.innerHTML = `<img src="${FEATURED_STORY.imgUrl}" alt="${FEATURED_STORY.title}" />`;
  } else {
    imgEl.textContent = FEATURED_STORY.emoji;
  }
 
  titleEl.textContent   = FEATURED_STORY.title;
  excerptEl.textContent = FEATURED_STORY.excerpt;
  linkEl.href           = FEATURED_STORY.url;
}
 
function renderStories() {
  const grid = document.getElementById('story-grid');
  grid.innerHTML = STORIES.map(s => `
    <article class="story-card" onclick="location.href='${s.url}'">
      <div class="story-card-img">
        ${s.imgUrl
          ? `<img src="${s.imgUrl}" alt="${s.title}" />`
          : s.emoji}
      </div>
      <div class="story-card-body">
        <span class="story-tag">${s.tag}</span>
        <h3>${s.title}</h3>
        <p>${s.excerpt}</p>
        <div class="story-meta">
          <div class="story-author">
            <div class="author-avatar">${s.author.split(' ').map(w => w[0]).join('')}</div>
            <span>${s.author}</span>
          </div>
          <span>${s.date}</span>
        </div>
      </div>
    </article>
  `).join('');
}
 
// Run on page load — only fires on pages that have these elements (homepage)
if (document.getElementById("featured-img"))  renderFeatured();
if (document.getElementById("story-grid"))    renderStories();