/**
 * GraceNote - Bible Quotes App
 * Main JavaScript File
 */

// ==========================================
// Bible Verses Database
// ==========================================

const bibleVerses = [
  {
    text: "The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?",
    reference: "Psalm 27:1",
    version: "NIV",
    devotional: "In times of darkness and uncertainty, we often find ourselves gripped by fear. This verse reminds us that when God is our light, there is nothing we need to fear. His presence illuminates our path and provides strength when we feel weak. Today, take comfort in knowing that the Creator of the universe is your protector and defender."
  },
  {
    text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.",
    reference: "Psalm 46:10",
    version: "NIV",
    devotional: "In our busy, noisy world, God calls us to be still. This isn't just physical stillness, but a quieting of our minds and hearts. When we pause and recognize God's sovereignty, we find peace. Today, take a moment to be still before God and remember that He is in control of all things."
  },
  {
    text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    reference: "Matthew 7:7",
    version: "NIV",
    devotional: "God invites us into a relationship of prayer and seeking. He promises that when we earnestly seek Him, we will find Him. This isn't about getting everything we want, but about pursuing a deeper relationship with our loving Father. What are you asking God for today? Keep seeking, keep knocking."
  },
  {
    text: "And hope does not put us to shame, because God's love has been poured out into our hearts through the Holy Spirit, who has been given to us.",
    reference: "Romans 5:5",
    version: "NIV",
    devotional: "Our hope in Christ is never misplaced or disappointing. Unlike worldly hopes that can fail us, the hope we have in God is secure because it's rooted in His unchanging love. The Holy Spirit living within us is proof of this love. Today, rest in the assurance that your hope in God will never disappoint."
  },
  {
    text: "Blessed are those who mourn, for they shall be comforted.",
    reference: "Matthew 5:4",
    version: "NIV",
    devotional: "Jesus doesn't shy away from our pain. Instead, He acknowledges it and promises comfort. If you're going through a difficult time, know that God sees your tears and promises to be near to the brokenhearted. His comfort is real and available to you today."
  },
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
    version: "NIV",
    devotional: "Even when we can't see the path ahead, God has a plan. His plans are good, designed to give us hope and a future. Trust that God is working behind the scenes in your life, orchestrating events for your good and His glory."
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    version: "NIV",
    devotional: "Our understanding is limited, but God's is infinite. When we trust Him completely and surrender our ways to Him, He promises to guide our steps. Today, choose to trust God's wisdom over your own understanding."
  },
  {
    text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    reference: "Psalm 34:18",
    version: "NIV",
    devotional: "In your moments of deepest pain, God is not distant — He is near. When your heart is broken and your spirit is crushed, that's when God draws closest. You are not alone in your suffering."
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
    version: "NIV",
    devotional: "This isn't about achieving worldly success, but about enduring all circumstances through Christ's strength. Whether in plenty or in want, in joy or in sorrow, Christ gives us the strength we need. What challenge are you facing today that needs His strength?"
  },
  {
    text: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    version: "NIV",
    devotional: "God invites us to give Him our worries, not because He needs them, but because we need to be free from them. He cares deeply about every concern you have. Today, intentionally give your anxieties to God and trust in His care."
  },
  {
    text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
    reference: "Zephaniah 3:17",
    version: "NIV",
    devotional: "Imagine the Creator of the universe singing over you with joy! God doesn't just tolerate you — He delights in you. He is your mighty warrior and your loving Father who rejoices over His child. Let this truth sink deep into your heart today."
  },
  {
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
    version: "NIV",
    devotional: "Even in difficult circumstances, God is working. He can take what was meant for harm and transform it for good. Trust that God is weaving all the threads of your life — even the dark ones — into a beautiful tapestry for His glory and your good."
  },
  {
    text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
    reference: "Lamentations 3:22-23",
    version: "ESV",
    devotional: "No matter what happened yesterday, God's mercies are fresh this morning. His love never fails, never gives up, never runs out on you. Each new day is a gift of His faithfulness. Start this day knowing you're covered in fresh mercy."
  },
  {
    text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    reference: "John 14:27",
    version: "NIV",
    devotional: "Jesus offers a peace that the world cannot give and cannot take away. It's a peace that surpasses understanding, that guards our hearts and minds. In the midst of chaos, Jesus' peace is available to you. Will you receive it today?"
  },
  {
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
    version: "NIV",
    devotional: "When we put our hope in God, He renews our strength in ways we never thought possible. If you're feeling weary today, spend time waiting on the Lord. Let Him renew your strength so you can soar again."
  }
];

// ==========================================
// App State
// ==========================================

let currentVerseIndex = 0;
let savedVerses = [];
let settings = {
  darkMode: false,
  bibleVersion: 'NIV',
  notifications: false,
  reminderTime: '08:00'
};

// ==========================================
// DOM Elements
// ==========================================

const elements = {
  // Screens
  splashScreen: document.getElementById('splash-screen'),
  mainApp: document.getElementById('main-app'),
  homeScreen: document.getElementById('home-screen'),
  devotionalScreen: document.getElementById('devotional-screen'),
  prayerModeScreen: document.getElementById('prayer-mode-screen'),
  savedScreen: document.getElementById('saved-screen'),
  settingsScreen: document.getElementById('settings-screen'),

  // Verse Display
  verseText: document.getElementById('verse-text'),
  verseReference: document.getElementById('verse-reference'),
  currentDate: document.getElementById('current-date'),
  verseDots: document.getElementById('verse-dots'),

  // Devotional
  devotionalVerse: document.getElementById('devotional-verse'),
  devotionalRef: document.getElementById('devotional-ref'),
  devotionalContent: document.getElementById('devotional-content'),

  // Prayer Mode
  prayerVerse: document.getElementById('prayer-verse'),
  prayerReference: document.getElementById('prayer-reference'),
  prayerAudio: document.getElementById('prayer-audio'),

  // Saved Verses
  savedList: document.getElementById('saved-list'),

  // Settings
  darkModeToggle: document.getElementById('dark-mode-toggle'),
  bibleVersionSelect: document.getElementById('bible-version'),
  notificationsToggle: document.getElementById('notifications-toggle'),
  reminderTimeInput: document.getElementById('reminder-time'),

  // Buttons
  saveBtn: document.getElementById('save-btn'),
  shareBtn: document.getElementById('share-btn'),
  devotionalBtn: document.getElementById('devotional-btn'),
  prevVerseBtn: document.getElementById('prev-verse'),
  nextVerseBtn: document.getElementById('next-verse'),
  prayerModeBtn: document.getElementById('prayer-mode-btn'),
  closePrayerBtn: document.getElementById('close-prayer'),
  toggleAudioBtn: document.getElementById('toggle-audio'),
  settingsBtn: document.getElementById('settings-btn'),
  backFromDevotional: document.getElementById('back-from-devotional'),
  backFromSaved: document.getElementById('back-from-saved'),
  backFromSettings: document.getElementById('back-from-settings'),
  viewSavedBtn: document.getElementById('view-saved-btn'),

  // Toast
  toast: document.getElementById('toast'),
  toastMessage: document.getElementById('toast-message'),

  // Loading
  loadingOverlay: document.getElementById('loading-overlay')
};

// ==========================================
// Initialization
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // Load saved data
  loadFromLocalStorage();

  // Apply settings
  applySettings();

  // Show splash screen then transition to main app
  setTimeout(() => {
    elements.splashScreen.classList.add('fade-out');
    setTimeout(() => {
      elements.splashScreen.classList.remove('active');
      elements.mainApp.classList.add('active');
      initializeMainApp();
    }, 500);
  }, 2500); // Show splash for 2.5 seconds
}

function initializeMainApp() {
  // Set current date
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  elements.currentDate.textContent = today.toLocaleDateString('en-US', options);

  // Get daily verse (based on day of year)
  const dayOfYear = getDayOfYear(today);
  currentVerseIndex = dayOfYear % bibleVerses.length;

  // Display verse
  displayVerse(currentVerseIndex);

  // Create verse navigation dots
  createVerseDots();

  // Setup event listeners
  setupEventListeners();

  // Display saved verses
  displaySavedVerses();
}

// ==========================================
// Verse Display Functions
// ==========================================

function displayVerse(index) {
  const verse = bibleVerses[index];

  // Fade out current verse
  elements.verseText.style.opacity = '0';
  elements.verseReference.style.opacity = '0';

  setTimeout(() => {
    elements.verseText.textContent = `"${verse.text}"`;
    elements.verseReference.textContent = `— ${verse.reference} (${verse.version})`;

    // Fade in new verse
    elements.verseText.style.opacity = '1';
    elements.verseReference.style.opacity = '1';
  }, 300);

  // Update devotional content
  elements.devotionalVerse.textContent = `"${verse.text}"`;
  elements.devotionalRef.textContent = `— ${verse.reference} (${verse.version})`;
  elements.devotionalContent.textContent = verse.devotional;

  // Update prayer mode content
  elements.prayerVerse.textContent = `"${verse.text}"`;
  elements.prayerReference.textContent = `— ${verse.reference}`;

  // Update dots
  updateVerseDots(index);
}

function createVerseDots() {
  elements.verseDots.innerHTML = '';
  for (let i = 0; i < Math.min(bibleVerses.length, 10); i++) {
    const dot = document.createElement('div');
    dot.className = 'verse-dot';
    if (i === currentVerseIndex % 10) {
      dot.classList.add('active');
    }
    dot.addEventListener('click', () => {
      currentVerseIndex = i;
      displayVerse(currentVerseIndex);
    });
    elements.verseDots.appendChild(dot);
  }
}

function updateVerseDots(index) {
  const dots = document.querySelectorAll('.verse-dot');
  dots.forEach((dot, i) => {
    if (i === index % 10) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// ==========================================
// Navigation Functions
// ==========================================

function setupEventListeners() {
  // Verse navigation
  elements.prevVerseBtn.addEventListener('click', () => navigateVerse(-1));
  elements.nextVerseBtn.addEventListener('click', () => navigateVerse(1));

  // Action buttons
  elements.saveBtn.addEventListener('click', saveCurrentVerse);
  elements.shareBtn.addEventListener('click', shareVerse);
  elements.devotionalBtn.addEventListener('click', () => showScreen('devotional'));

  // Prayer mode
  elements.prayerModeBtn.addEventListener('click', enterPrayerMode);
  elements.closePrayerBtn.addEventListener('click', exitPrayerMode);
  elements.toggleAudioBtn.addEventListener('click', togglePrayerAudio);

  // Settings
  elements.settingsBtn.addEventListener('click', () => showScreen('settings'));
  elements.darkModeToggle.addEventListener('change', toggleDarkMode);
  elements.bibleVersionSelect.addEventListener('change', updateBibleVersion);
  elements.notificationsToggle.addEventListener('change', toggleNotifications);
  elements.reminderTimeInput.addEventListener('change', updateReminderTime);
  elements.viewSavedBtn.addEventListener('click', () => showScreen('saved'));

  // Back buttons
  elements.backFromDevotional.addEventListener('click', () => showScreen('home'));
  elements.backFromSaved.addEventListener('click', () => showScreen('home'));
  elements.backFromSettings.addEventListener('click', () => showScreen('home'));

  // Bottom navigation
  const bottomNavBtns = document.querySelectorAll('.bottom-nav-btn');
  bottomNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const screen = btn.getAttribute('data-screen');
      showScreen(screen);

      // Update active state
      bottomNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Swipe gestures for verse navigation
  let touchStartX = 0;
  let touchEndX = 0;

  elements.homeScreen.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  elements.homeScreen.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left - next verse
      navigateVerse(1);
    }
    if (touchEndX > touchStartX + 50) {
      // Swipe right - previous verse
      navigateVerse(-1);
    }
  }
}

function navigateVerse(direction) {
  currentVerseIndex += direction;

  if (currentVerseIndex < 0) {
    currentVerseIndex = bibleVerses.length - 1;
  } else if (currentVerseIndex >= bibleVerses.length) {
    currentVerseIndex = 0;
  }

  displayVerse(currentVerseIndex);
}

function showScreen(screenName) {
  // Hide all content screens
  const contentScreens = document.querySelectorAll('.content-screen');
  contentScreens.forEach(screen => screen.classList.remove('active'));

  // Show requested screen
  switch (screenName) {
    case 'home':
      elements.homeScreen.classList.add('active');
      break;
    case 'devotional':
      elements.devotionalScreen.classList.add('active');
      break;
    case 'saved':
      elements.savedScreen.classList.add('active');
      displaySavedVerses();
      break;
    case 'settings':
      elements.settingsScreen.classList.add('active');
      break;
  }
}

// ==========================================
// Save & Share Functions
// ==========================================

function saveCurrentVerse() {
  const verse = bibleVerses[currentVerseIndex];

  // Check if already saved
  const alreadySaved = savedVerses.some(
    v => v.reference === verse.reference
  );

  if (alreadySaved) {
    showToast('Verse already saved!', 'bi-info-circle');
    return;
  }

  // Save verse
  savedVerses.push({
    text: verse.text,
    reference: verse.reference,
    version: verse.version,
    savedAt: new Date().toISOString()
  });

  // Save to localStorage
  saveToLocalStorage();

  // Show confirmation
  showToast('Verse saved!', 'bi-check-circle');

  // Update saved verses display
  displaySavedVerses();
}

function shareVerse() {
  const verse = bibleVerses[currentVerseIndex];
  const shareText = `"${verse.text}"\n\n— ${verse.reference} (${verse.version})\n\nShared from GraceNote`;

  if (navigator.share) {
    // Use Web Share API if available
    navigator.share({
      title: 'Bible Verse',
      text: shareText
    }).then(() => {
      showToast('Verse shared!', 'bi-check-circle');
    }).catch((error) => {
      console.log('Error sharing:', error);
      fallbackShare(shareText);
    });
  } else {
    fallbackShare(shareText);
  }
}

function fallbackShare(text) {
  // Copy to clipboard as fallback
  navigator.clipboard.writeText(text).then(() => {
    showToast('Verse copied to clipboard!', 'bi-clipboard-check');
  }).catch(() => {
    showToast('Unable to share', 'bi-x-circle');
  });
}

// ==========================================
// Saved Verses Functions
// ==========================================

function displaySavedVerses() {
  if (savedVerses.length === 0) {
    elements.savedList.innerHTML = `
      <div class="empty-state">
        <i class="bi bi-bookmark"></i>
        <p>No saved verses yet</p>
        <p class="empty-subtitle">Save your favorite verses to see them here</p>
      </div>
    `;
    return;
  }

  // Sort by most recent first
  const sortedVerses = [...savedVerses].sort((a, b) =>
    new Date(b.savedAt) - new Date(a.savedAt)
  );

  elements.savedList.innerHTML = sortedVerses.map((verse, index) => `
    <div class="saved-verse-card" data-index="${index}">
      <p class="verse-text">"${verse.text}"</p>
      <p class="verse-reference">— ${verse.reference} (${verse.version})</p>
      <button class="delete-saved-btn" onclick="deleteSavedVerse(${index})">
        <i class="bi bi-trash"></i>
      </button>
    </div>
  `).join('');
}

function deleteSavedVerse(index) {
  // Remove verse from array
  savedVerses.splice(index, 1);

  // Save to localStorage
  saveToLocalStorage();

  // Update display
  displaySavedVerses();

  // Show confirmation
  showToast('Verse removed', 'bi-trash');
}

// Make deleteSavedVerse available globally
window.deleteSavedVerse = deleteSavedVerse;

// ==========================================
// Prayer Mode Functions
// ==========================================

function enterPrayerMode() {
  elements.prayerModeScreen.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Optional: play peaceful audio
  // elements.prayerAudio.play();
}

function exitPrayerMode() {
  elements.prayerModeScreen.classList.remove('active');
  document.body.style.overflow = '';

  // Stop audio
  if (elements.prayerAudio) {
    elements.prayerAudio.pause();
    elements.prayerAudio.currentTime = 0;
  }
}

function togglePrayerAudio() {
  if (!elements.prayerAudio) return;

  if (elements.prayerAudio.paused) {
    elements.prayerAudio.play();
    elements.toggleAudioBtn.innerHTML = '<i class="bi bi-volume-up"></i>';
  } else {
    elements.prayerAudio.pause();
    elements.toggleAudioBtn.innerHTML = '<i class="bi bi-volume-mute"></i>';
  }
}

// ==========================================
// Settings Functions
// ==========================================

function applySettings() {
  // Apply dark mode
  if (settings.darkMode) {
    document.body.classList.add('dark-mode');
    if (elements.darkModeToggle) {
      elements.darkModeToggle.checked = true;
    }
  }

  // Apply bible version
  if (elements.bibleVersionSelect) {
    elements.bibleVersionSelect.value = settings.bibleVersion;
  }

  // Apply notifications
  if (elements.notificationsToggle) {
    elements.notificationsToggle.checked = settings.notifications;
  }

  // Apply reminder time
  if (elements.reminderTimeInput) {
    elements.reminderTimeInput.value = settings.reminderTime;
  }
}

function toggleDarkMode() {
  settings.darkMode = elements.darkModeToggle.checked;
  document.body.classList.toggle('dark-mode', settings.darkMode);
  saveToLocalStorage();
}

function updateBibleVersion() {
  settings.bibleVersion = elements.bibleVersionSelect.value;
  saveToLocalStorage();
  showToast(`Bible version changed to ${settings.bibleVersion}`, 'bi-book');
}

function toggleNotifications() {
  settings.notifications = elements.notificationsToggle.checked;
  saveToLocalStorage();

  if (settings.notifications) {
    requestNotificationPermission();
  }
}

function updateReminderTime() {
  settings.reminderTime = elements.reminderTimeInput.value;
  saveToLocalStorage();
  showToast('Reminder time updated', 'bi-clock');
}

function requestNotificationPermission() {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        showToast('Notifications enabled', 'bi-bell');
      } else {
        showToast('Notification permission denied', 'bi-bell-slash');
        settings.notifications = false;
        elements.notificationsToggle.checked = false;
        saveToLocalStorage();
      }
    });
  }
}

// ==========================================
// Toast Notification
// ==========================================

function showToast(message, icon = 'bi-check-circle') {
  elements.toastMessage.textContent = message;
  const toastIcon = elements.toast.querySelector('i');
  toastIcon.className = `bi ${icon}`;

  elements.toast.classList.add('show');

  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 3000);
}

// ==========================================
// Local Storage Functions
// ==========================================

function saveToLocalStorage() {
  try {
    localStorage.setItem('gracenote_saved_verses', JSON.stringify(savedVerses));
    localStorage.setItem('gracenote_settings', JSON.stringify(settings));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}

function loadFromLocalStorage() {
  try {
    const savedVersesData = localStorage.getItem('gracenote_saved_verses');
    if (savedVersesData) {
      savedVerses = JSON.parse(savedVersesData);
    }

    const settingsData = localStorage.getItem('gracenote_settings');
    if (settingsData) {
      settings = { ...settings, ...JSON.parse(settingsData) };
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error);
  }
}

// ==========================================
// Utility Functions
// ==========================================

function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

// ==========================================
// Service Worker Registration (for PWA)
// ==========================================

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      registration => {
        console.log('ServiceWorker registration successful');
      },
      err => {
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}

// ==========================================
// Additional Features
// ==========================================

// Auto-hide splash screen indicator on page visibility change
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    // Page is visible again
    const today = new Date();
    const dayOfYear = getDayOfYear(today);
    const newVerseIndex = dayOfYear % bibleVerses.length;

    // Update verse if day changed
    if (newVerseIndex !== currentVerseIndex) {
      currentVerseIndex = newVerseIndex;
      displayVerse(currentVerseIndex);
      showToast('New verse for today!', 'bi-sunrise');
    }
  }
});

// Add ripple effect to buttons
document.addEventListener('click', (e) => {
  const button = e.target.closest('button, .clickable');
  if (!button) return;

  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple-effect');

  button.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});

// Add CSS for ripple effect dynamically
const rippleStyles = document.createElement('style');
rippleStyles.textContent = `
  button, .clickable {
    position: relative;
    overflow: hidden;
  }

  .ripple-effect {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(rippleStyles);

console.log('GraceNote Bible Quotes App initialized successfully! 🙏');
