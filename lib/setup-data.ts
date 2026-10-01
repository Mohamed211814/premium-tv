export interface SetupStep {
  stepNumber: number;
  title: string;
  description: string;
  tip?: string;
}

export interface DeviceSetupGuide {
  id: string;
  category: string;
  name: string;
  iconName: string;
  badge: string;
  recommendedApps: string[];
  steps: SetupStep[];
}

export interface TroubleshootingItem {
  id: string;
  title: string;
  symptom: string;
  solution: string[];
}

export const generalSetupSteps: SetupStep[] = [
  {
    stepNumber: 1,
    title: "Choose Your Premium IPTV Plan",
    description: "Select the subscription duration that best fits your entertainment needs from our Premium IPTV pricing options.",
    tip: "You will receive your unique Premium IPTV access credentials immediately upon order processing.",
  },
  {
    stepNumber: 2,
    title: "Download a Compatible Player App",
    description: "Install a recommended, reliable IPTV application on your Smart TV, streaming box, phone, or computer to connect to Premium IPTV.",
    tip: "Popular options include IPTV Smarters Pro, TiviMate, IBO Player, or VLC Player.",
  },
  {
    stepNumber: 3,
    title: "Enter Credentials & Start Watching",
    description: "Launch the app, input your Premium IPTV server URL, username, and password (or M3U link), and enjoy your high definition streams.",
    tip: "Allow 30 seconds on initial load for the channel list and EPG electronic guide to populate fully.",
  },
];

export const deviceGuides: DeviceSetupGuide[] = [
  {
    id: "smart-tv",
    category: "Smart TVs",
    name: "Smart TVs (Samsung Tizen, LG webOS, Android TV)",
    iconName: "Tv",
    badge: "Most Popular",
    recommendedApps: ["IPTV Smarters Pro", "IBO Player", "Smart IPTV", "SET IPTV"],
    steps: [
      {
        stepNumber: 1,
        title: "Access TV App Store",
        description: "Open the official App Store on your Samsung TV (Smart Hub), LG TV (LG Content Store), or Android TV (Google Play Store).",
      },
      {
        stepNumber: 2,
        title: "Search and Install an IPTV Player",
        description: "Search for 'IPTV Smarters Pro' or 'IBO Player' and install the application onto your television for Premium IPTV playback.",
      },
      {
        stepNumber: 3,
        title: "Login with Xtream Codes API",
        description: "Open the app, select 'Login with Xtream Codes API' (or Playlist), and input the Premium IPTV Server URL, Username, and Password provided in your activation message.",
      },
      {
        stepNumber: 4,
        title: "Load Channels & EPG",
        description: "Click 'Add User' or 'Login'. The player will download your Premium IPTV channel categories, live TV, and Electronic Program Guide in seconds.",
      },
    ],
  },
  {
    id: "streaming-devices",
    category: "Streaming Devices",
    name: "Amazon Firestick, Apple TV & Android TV Boxes",
    iconName: "Cast",
    badge: "Ultra Fast Setup",
    recommendedApps: ["TiviMate", "IPTV Smarters Pro", "Downloader App", "iPlayTV"],
    steps: [
      {
        stepNumber: 1,
        title: "Install Player or Downloader",
        description: "For Firestick: install the 'Downloader' app from the Amazon Appstore, then download TiviMate or IPTV Smarters. For Apple TV: install 'iPlayTV' or 'GSE Smart IPTV' from App Store.",
      },
      {
        stepNumber: 2,
        title: "Open App & Choose Xtream Codes / M3U",
        description: "Launch your chosen player and select 'Add Playlist' -> 'Xtream Codes API' to connect your Premium IPTV service.",
      },
      {
        stepNumber: 3,
        title: "Input Premium IPTV Connection Info",
        description: "Enter any Playlist Name (e.g. Premium IPTV), your Server URL, Username, and Password.",
      },
      {
        stepNumber: 4,
        title: "Enjoy Bufferless 4K & HD",
        description: "Save the profile. Your Premium IPTV categories, live guide, and channels are ready to browse with smooth remote control navigation.",
      },
    ],
  },
  {
    id: "mobile-devices",
    category: "Mobile & Tablets",
    name: "Apple iOS (iPhone / iPad) & Android Mobile / Tablets",
    iconName: "Smartphone",
    badge: "Watch on the Go",
    recommendedApps: ["IPTV Smarters Lite (iOS)", "XCIPTV (Android)", "GSE Smart IPTV", "Televizo"],
    steps: [
      {
        stepNumber: 1,
        title: "Download App from App Store or Google Play",
        description: "Download 'Smarters Player Lite' from Apple App Store, or 'IPTV Smarters Pro / Televizo' from Google Play Store for mobile Premium IPTV streaming.",
      },
      {
        stepNumber: 2,
        title: "Accept Terms & Select Xtream Codes",
        description: "Open the app and choose 'Login with Xtream Codes API' for optimal Premium IPTV EPG synchronization.",
      },
      {
        stepNumber: 3,
        title: "Paste Your Access Details",
        description: "Copy and paste your Server URL, Username, and Password received in your Premium IPTV confirmation.",
      },
      {
        stepNumber: 4,
        title: "Stream Anywhere",
        description: "Tap 'Login' to load your playlist. Enjoy crystal clear Premium IPTV streams over Wi Fi or high speed mobile data.",
      },
    ],
  },
  {
    id: "computer",
    category: "Computers",
    name: "Windows PC & macOS Desktops / Laptops",
    iconName: "Laptop",
    badge: "Desktop Experience",
    recommendedApps: ["IPTV Smarters Pro (Windows/Mac)", "VLC Media Player", "MyIPTV Player"],
    steps: [
      {
        stepNumber: 1,
        title: "Download Dedicated Software",
        description: "Download IPTV Smarters Pro executable for Windows / Mac, or install VLC Media Player for Premium IPTV.",
      },
      {
        stepNumber: 2,
        title: "Configure Connection",
        description: "For Smarters: enter your Premium IPTV Xtream Codes credentials. For VLC: go to Media -> Open Network Stream and paste your M3U link.",
      },
      {
        stepNumber: 3,
        title: "Load Playlist & Play",
        description: "Click Play. For VLC, press Ctrl+L (or Cmd+L on Mac) to view the Premium IPTV channel playlist sidebar.",
      },
    ],
  },
];

export const troubleshootingList: TroubleshootingItem[] = [
  {
    id: "troubleshoot-buffering",
    title: "Playback Stuttering or Buffering",
    symptom: "Stream pauses or buffers intermittently during live playback.",
    solution: [
      "Check your internet speed: Ensure a minimum stable download speed of 25 Mbps for HD and 50 Mbps for 4K Ultra HD.",
      "Use Ethernet instead of Wi Fi: If streaming on a TV or Firestick, a wired Ethernet connection provides superior stability.",
      "Restart your router: Unplug your home router for 30 seconds and plug it back in to refresh DNS and IP routing.",
      "Switch Player Stream Format: In player settings (e.g. IPTV Smarters), change stream format from 'ts' to 'm3u8' or switch player engine to VLC/Hardware Decoder.",
    ],
  },
  {
    id: "troubleshoot-login",
    title: "Invalid Details / Login Failed Error",
    symptom: "The player reports 'Authorization Failed', 'Invalid details', or fails to connect.",
    solution: [
      "Check for trailing spaces: When copying credentials, ensure there is no accidental whitespace at the beginning or end of your username/password/server URL.",
      "Verify exact Server URL format: Ensure the URL includes the full protocol (http:// or https://) and port number exactly as delivered.",
      "Check active subscription status: Ensure your subscription period is active.",
      "Confirm device limit: Ensure you are not streaming on more simultaneous devices than your active plan permits.",
    ],
  },
  {
    id: "troubleshoot-epg",
    title: "EPG (Electronic Program Guide) Not Showing Info",
    symptom: "Channel guide displays 'No Information' or is blank.",
    solution: [
      "Perform manual EPG refresh: Open your IPTV player settings and select 'Update EPG' or 'Refresh Playlist'.",
      "Check device time zone: Ensure your TV or streaming device has the correct date, time, and time zone configured in system settings.",
      "Clear app cache: In your device settings, go to Apps -> IPTV Player -> Clear Cache (not Clear Data).",
    ],
  },
  {
    id: "troubleshoot-audio-sync",
    title: "Audio Desynchronization or Missing Sound",
    symptom: "Audio does not match video lip sync, or specific audio tracks have no sound.",
    solution: [
      "Change Audio Decoder: In player settings, switch hardware audio decoder (HW) to software audio decoder (SW) or vice versa.",
      "Select alternative audio stream: Press the audio/subtitle button on your player remote to toggle available audio tracks (Stereo / 5.1).",
    ],
  },
  {
    id: "troubleshoot-support",
    title: "Still Need Assistance?",
    symptom: "Issue is not resolved with the steps above.",
    solution: [
      "Our support desk is on standby 24/7. Contact us via our Contact Page with your registered email and the specific device or app you are using for rapid resolution.",
    ],
  },
];
