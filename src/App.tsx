import { useState, useRef, useEffect } from 'react';
import { Button } from './AstraLibraryKit/components/button';
import { PromptInput } from './AstraLibraryKit/components/prompt_input';
import { VideoControl } from './AstraLibraryKit/components/video_control';
import { ShareModal } from './AstraLibraryKit/components/share_modal';
import { Home, Film, Book, Folder, Settings, Video, Search, Scissors, Sliders, Type, Wand2, Mic, Music, Upload } from './AstraLibraryKit/components/icons';
import imgVideo from "figma:asset/e92a67f81fd098462003a57e57bc7449739a4a7a.png";
import imgTypeImageSizeLargeShapeSquare from "figma:asset/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png";
import { imgGroup14697 } from "./imports/svg-dhq16";
import SoundWave from "./imports/SoundWave";
import Thumbnails from './imports/Thumbnails';

// Astra Logo Component
function AstraLogo() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="block size-full" fill="white" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g>
          <path d="M0 12.8C0 8.31958 0 6.07937 0.871948 4.36808C1.63893 2.86278 2.86278 1.63893 4.36808 0.871948C6.07937 0 8.31958 0 12.8 0H19.2C23.6804 0 25.9206 0 27.6319 0.871948C29.1372 1.63893 30.3611 2.86278 31.1281 4.36808C32 6.07937 32 8.31958 32 12.8V19.2C32 23.6804 32 25.9206 31.1281 27.6319C30.3611 29.1372 29.1372 30.3611 27.6319 31.1281C25.9206 32 23.6804 32 19.2 32H12.8C8.31958 32 6.07937 32 4.36808 31.1281C2.86278 30.3611 1.63893 29.1372 0.871948 27.6319C0 25.9206 0 23.6804 0 19.2V12.8Z" fill="#5250F3" />
          <path d="M16.3472 3.99756C17.3609 11.2801 20.7163 14.635 27.9985 15.6489V16.3452C20.7158 17.359 17.3608 20.7154 16.3472 27.9985H15.6509C14.6371 20.715 11.2813 17.3588 3.99756 16.3452V15.6489C11.2808 14.6352 14.6369 11.2805 15.6509 3.99756H16.3472Z" stroke="white" />
        </g>
      </svg>
    </div>
  );
}

// Sidebar Navigation
function SidebarNavigation() {
  const [activeTab, setActiveTab] = useState('film');
  
  return (
    <div className="bg-white h-full relative shrink-0 w-[60px] border-r border-[rgba(0,0,0,0.15)] flex flex-col items-center justify-between py-[12px]">
      <div className="flex flex-col gap-[8px] items-center w-full">
        <AstraLogo />
        <div className="flex flex-col gap-[8px] items-center w-full">
          <button
            onClick={() => setActiveTab('home')}
            className={`p-[12px] rounded-[8px] ${activeTab === 'home' ? 'bg-[#d1d0f9]' : ''}`}
          >
            <Home className="size-[24px]" strokeWidth={1.5} opacity={activeTab === 'home' ? 0.85 : 0.5} />
          </button>
          <button
            onClick={() => setActiveTab('film')}
            className={`p-[12px] rounded-[8px] ${activeTab === 'film' ? 'bg-[#d1d0f9]' : ''}`}
          >
            <Film className="size-[24px]" strokeWidth={1.5} opacity={activeTab === 'film' ? 0.85 : 0.5} />
          </button>
          <button
            onClick={() => setActiveTab('book')}
            className={`p-[12px] rounded-[8px] ${activeTab === 'book' ? 'bg-[#d1d0f9]' : ''}`}
          >
            <Book className="size-[24px]" strokeWidth={1.5} opacity={activeTab === 'book' ? 0.85 : 0.5} />
          </button>
          <button
            onClick={() => setActiveTab('folder')}
            className={`p-[12px] rounded-[8px] ${activeTab === 'folder' ? 'bg-[#d1d0f9]' : ''}`}
          >
            <Folder className="size-[24px]" strokeWidth={1.5} opacity={activeTab === 'folder' ? 0.85 : 0.5} />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <button className="p-[12px] rounded-[8px]">
          <Settings className="size-[24px]" strokeWidth={1.5} opacity={0.5} />
        </button>
        <div className="relative rounded-[999px] shrink-0 size-[32px] overflow-clip">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeImageSizeLargeShapeSquare} />
          <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        </div>
      </div>
    </div>
  );
}

// Chat Bubble Component
function ChatBubble({ type, content, isTyping = false }: { type: 'ai' | 'user'; content: string; isTyping?: boolean }) {
  if (type === 'user') {
    return (
      <div className="flex gap-[10px] items-start justify-end w-full">
        <div className="bg-white border border-[rgba(0,0,0,0.05)] rounded-[8px] px-[16px] py-[12px] max-w-[280px]">
          <p className="text-[12px] text-[rgba(0,0,0,0.85)] leading-[1.2]">{content}</p>
        </div>
        <div className="relative rounded-[999px] shrink-0 size-[24px] overflow-clip mt-[6px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTypeImageSizeLargeShapeSquare} />
          <div className="absolute border border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[999px]" />
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex gap-[10px] items-start w-full">
      <div className="relative shrink-0 size-[24px] mt-[6px]">
        <img alt="" className="block max-w-none size-full" src={imgGroup14697} />
      </div>
      <div className="bg-[#d1d0f9] border border-[rgba(0,0,0,0.05)] rounded-[8px] px-[16px] py-[12px] max-w-[280px]">
        <p className="text-[12px] text-[rgba(0,0,0,0.85)] leading-[1.2]">
          {content}
          {isTyping && <span className="inline-block w-[2px] h-[12px] bg-[rgba(0,0,0,0.85)] ml-[1px] animate-pulse" />}
        </p>
      </div>
    </div>
  );
}

// Prompt Pane (Chat Sidebar)
function PromptPane() {
  const [messages, setMessages] = useState<Array<{ type: 'ai' | 'user'; content: string }>>([
    { type: 'ai', content: 'How can I help?' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingContent, setTypingContent] = useState('');
  const [fullResponse, setFullResponse] = useState('');

  const generateAIResponse = (userMessage: string): string => {
    // Simulate LLM responses based on user input
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('cut') || lowerMessage.includes('trim')) {
      return "I can help you trim and cut your video. Use the scissors tool in the timeline toolbar to split clips at specific points. What part of the video would you like to edit?";
    } else if (lowerMessage.includes('music') || lowerMessage.includes('audio')) {
      return "I can help you add or adjust audio. You can add music to the Music track in the timeline. Would you like me to suggest some background music options?";
    } else if (lowerMessage.includes('text') || lowerMessage.includes('title')) {
      return "I can help you add text overlays to your video. Use the text tool (T icon) in the toolbar to add titles, captions, or subtitles. Where would you like to place the text?";
    } else if (lowerMessage.includes('export') || lowerMessage.includes('save')) {
      return "To export your video, click the 'Export' button in the top right. You can choose your preferred format and quality settings. Would you like help with export settings?";
    } else if (lowerMessage.includes('color') || lowerMessage.includes('filter')) {
      return "I can help you adjust colors and apply filters. Use the sliders tool to access color correction, brightness, contrast, and saturation controls. What kind of look are you going for?";
    } else {
      return "I understand you want to work on your video. I can help with cutting, adding music, text overlays, color correction, and exporting. What would you like to do first?";
    }
  };

  // Typewriter effect
  useEffect(() => {
    if (isTyping && typingContent.length < fullResponse.length) {
      const timer = setTimeout(() => {
        setTypingContent(fullResponse.slice(0, typingContent.length + 1));
      }, 30); // 30ms per character for smooth typing
      return () => clearTimeout(timer);
    } else if (isTyping && typingContent.length === fullResponse.length && fullResponse.length > 0) {
      // Typing complete
      setMessages(prev => [...prev, { type: 'ai', content: fullResponse }]);
      setIsTyping(false);
      setTypingContent('');
      setFullResponse('');
    }
  }, [isTyping, typingContent, fullResponse, setMessages]);

  const handleSend = () => {
    if (inputValue.trim() && !isThinking && !isTyping) {
      const userMessage = inputValue;
      setMessages([...messages, { type: 'user', content: userMessage }]);
      setInputValue('');
      setIsThinking(true);

      // Simulate AI thinking and response
      setTimeout(() => {
        const aiResponse = generateAIResponse(userMessage);
        setFullResponse(aiResponse);
        setTypingContent('');
        setIsThinking(false);
        setIsTyping(true);
      }, 1500); // 1.5 second delay
    }
  };

  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-full relative shrink-0 w-[300px] border-r border-[rgba(0,0,0,0.15)]">
      <div className="flex flex-col gap-[16px] h-full px-[16px] py-[24px]">
        <div className="flex-1 overflow-auto">
          <div className="flex flex-col gap-[12px] p-[10px]">
            {messages.map((msg, index) => (
              <ChatBubble key={index} type={msg.type} content={msg.content} />
            ))}
            {isThinking && (
              <div className="flex gap-[10px] items-start w-full">
                <div className="relative shrink-0 size-[24px] mt-[6px]">
                  <img alt="" className="block max-w-none size-full" src={imgGroup14697} />
                </div>
                <div className="bg-[#d1d0f9] border border-[rgba(0,0,0,0.05)] rounded-[8px] px-[16px] py-[12px] max-w-[280px]">
                  <p className="text-[12px] text-[rgba(0,0,0,0.85)] leading-[1.2]">Thinking...</p>
                </div>
              </div>
            )}
            {isTyping && (
              <ChatBubble type="ai" content={typingContent} isTyping={true} />
            )}
          </div>
        </div>
        <div className="shrink-0 w-full flex">
          <PromptInput
            placeholder="Describe your video"
            value={inputValue}
            onChange={setInputValue}
            onSend={handleSend}
            onAttach={() => console.log('Attach clicked')}
            disabled={isThinking || isTyping}
          />
        </div>
      </div>
    </div>
  );
}

// Video Timeline Track
function TimelineTrack({ icon: Icon, label, thumbnails, progress }: { icon: any; label: string; thumbnails?: string[]; progress?: number }) {
  return (
    <div className="flex gap-[2px] h-[40px] items-center w-full min-w-0">
      <div className="bg-[#d1d0f9] h-full overflow-clip rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[32px] flex items-center justify-center">
        <Icon className="size-[16px]" strokeWidth={2} opacity={0.75} />
      </div>
      <div className="flex-1 bg-white h-full overflow-hidden rounded-br-[8px] rounded-tr-[8px] relative min-w-0">
        {thumbnails ? (
          <div className="flex items-center gap-[2px] p-[4px] h-full overflow-x-auto">
            <Thumbnails />
          </div>
        ) : (
          <div className="flex items-center h-full px-4 overflow-hidden">
            <div className="relative h-[15px] min-w-0 w-full">
              <SoundWave progress={progress} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Main Editor Area
function Editor() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [totalTime, setTotalTime] = useState(264); // 4:24 in seconds (default)
  const [videoUrl, setVideoUrl] = useState<string | null>('https://static.figma.com/uploads/3a57763c4e22abd80a4b046a47f3504130cd7f1d');
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Load video from localStorage on mount
  useEffect(() => {
    const savedVideo = localStorage.getItem('uploadedVideo');
    if (savedVideo) {
      setVideoUrl(savedVideo);
    }
  }, []);

  // Handle video file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        setVideoUrl(dataUrl);
        localStorage.setItem('uploadedVideo', dataUrl);
        setProgress(0);
        setCurrentTime(0);
        setIsPlaying(false);
      };
      reader.readAsDataURL(file);
    }
  };

  // Update total time when video metadata is loaded
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        setTotalTime(video.duration);
      };
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    }
  }, [videoUrl]);

  // Sync video playback with isPlaying state
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // Handle the error silently - this is expected when play is interrupted
            if (error.name !== 'AbortError') {
              console.error('Video play error:', error);
            }
          });
        }
      } else {
        video.pause();
      }
    }
  }, [isPlaying]);

  // Update progress and currentTime as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime);
        setProgress((video.currentTime / video.duration) * 100);
      };
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, [videoUrl]);

  // Handle video end
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        setIsPlaying(false);
      };
      video.addEventListener('ended', handleEnded);
      return () => video.removeEventListener('ended', handleEnded);
    }
  }, [videoUrl]);

  // Handle seek
  const handleSeek = (newProgress: number) => {
    const video = videoRef.current;
    if (video) {
      const newTime = (newProgress / 100) * video.duration;
      video.currentTime = newTime;
      setProgress(newProgress);
      setCurrentTime(newTime);
    }
  };

  return (
    <div className="flex-1 flex flex-col gap-[8px] h-full overflow-y-auto pt-[12px] pb-[24px]">
      {/* Toolbar */}
      <div className="relative shrink-0 w-full px-[24px] py-[4px] flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <Video className="size-[24px]" strokeWidth={2} color="#5250F3" />
        </div>
        
        <div className="flex items-center gap-[8px] px-[8px] py-[4px] rounded-[6px] ml-[12px]">
          <p className="text-[16px] text-[rgba(0,0,0,0.85)]">Projects</p>
          <svg className="w-[5px] h-[8px]" fill="none" viewBox="0 0 7 9">
            <path d="M0.735999 15.3975L5.636 0.397499" stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
          </svg>
          <p className="text-[16px] text-[rgba(0,0,0,0.85)] whitespace-nowrap">Mountain biking</p>
        </div>
        
        <div className="flex gap-[12px] items-center">
          
          <Button variant="neutral" size="small" className="!py-[10px]">Export</Button>
          <Button
            variant="primary"
            size="small"
            className="!py-[10px]"
            onClick={() => setIsShareModalOpen(true)}
          >Share</Button>
        </div>
      </div>

      {/* Video Preview */}
      <div className="px-[24px] shrink-0">
        <div className="aspect-[1920/1080] overflow-clip rounded-[8px] w-full relative">
          <div className="absolute inset-0 bg-[#5250f3] rounded-[8px]" />
          {videoUrl ? (
            <video 
              ref={videoRef}
              className="absolute max-w-none object-cover rounded-[8px] size-full"
              src="https://static.figma.com/uploads/559d7f1999b389ca8418618e7ad4292b524544d3"
            />
          ) : (
            <>
              <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgVideo} />
            </>
          )}
          {/* Upload button overlay */}
          {!videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-white/90 hover:bg-white px-6 py-3 rounded-lg flex items-center gap-3 transition-colors shadow-lg"
              >
                <Upload className="size-5" />
                <span>Upload Video</span>
              </button>
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Video Controls */}
      <div className="px-[24px] pt-[8px] shrink-0 flex">
        <VideoControl
          currentTime={currentTime}
          totalTime={totalTime}
          progress={progress}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
          onSeek={handleSeek}
          onSettings={() => console.log('Settings clicked')}
        />
      </div>

      {/* Comment Markers */}
      <div className="h-[20px] px-[24px] relative shrink-0 mt-[12px] mr-[0px] mb-[-8px] ml-[0px]">
        {[8, 33, 37, 52].map((percent, i) => (
          <div key={i} className="absolute size-[20px]" style={{ left: `calc(30px + ${percent}%)` }}>
            <svg className="size-full" fill="none" viewBox="0 0 17 17">
              <path d="M16 11C16 11.442 15.8244 11.866 15.5118 12.1785C15.1993 12.4911 14.7754 12.6667 14.3333 12.6667H4.33333L1 16V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H14.3333C14.7754 1 15.1993 1.17559 15.5118 1.48816C15.8244 1.80072 16 2.22464 16 2.66667V11Z" stroke="#5250F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ))}
      </div>

      {/* Timeline Tracks */}
      <div className="flex flex-col gap-[4px] relative shrink-0 py-[80px] px-[24px] pt-[5px] pr-[27px] pb-[80px] pl-[24px] m-[0px]">
        <TimelineTrack
          icon={Film}
          label="Video"
          thumbnails={[
            "https://images.unsplash.com/photo-1604677657548-4ced0c4f40c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjB0cmFpbHxlbnwxfHx8fDE3NjE1NTE1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1671423077966-f915e39c971c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2luZyUyMGRvd25oaWxsfGVufDF8fHx8MTc2MTU5MjAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1563039193-0d0f595c9ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBqdW1wfGVufDF8fHx8MTc2MTU5MjAxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1662313708911-06070ec5b383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBmb3Jlc3R8ZW58MXx8fHwxNzYxNTA3NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1490507278117-59a4ccd0165f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2VyJTIwYWN0aW9ufGVufDF8fHx8MTc2MTU5MjAxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1553105659-d918b253f0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBzdW5zZXR8ZW58MXx8fHwxNzYxNTkyMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1760892799189-542f1c3ecac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBzY2VuaWN8ZW58MXx8fHwxNzYxNTkyMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1760892472396-5cf846708429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2luZyUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjE1Mjc1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1631474387366-fee11279f9c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjByaWRlcnxlbnwxfHx8fDE3NjE1OTE5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1494506354342-764eaafc4a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBjbGltYnxlbnwxfHx8fDE3NjE1OTIwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1637616088349-9474eb527d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBjYW55b258ZW58MXx8fHwxNzYxNTkyMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1563039193-0d0f595c9ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBkaXJ0fGVufDF8fHx8MTc2MTU5MjAyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1657637597401-ba6c928de5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBuYXR1cmV8ZW58MXx8fHwxNzYxNTkyMDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            "https://images.unsplash.com/photo-1565057515637-2251f97d5f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjBleHRyZW1lfGVufDF8fHx8MTc2MTU5MjAyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          ]}
        />
        <TimelineTrack icon={Mic} label="Audio" progress={progress} />
        <TimelineTrack icon={Music} label="Music" progress={progress} />

        {/* Playhead Indicator */}
        <div 
          className="absolute top-0 bottom-[80px] w-[2px] bg-[#5250f3] pointer-events-none transition-all duration-150 ease-out"
          style={{ left: `calc(58px + (100% - 82px) * ${progress / 100})` }}
        >
          {/* Top circle */}
          <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 size-[8px] rounded-full bg-[#5250f3]" />
        </div>

        {/* Floating Toolbar */}
        <div className="absolute bg-white left-1/2 -translate-x-1/2 bottom-0 h-[48px] w-[211px] rounded-[16px] border border-[rgba(0,0,0,0.15)] shadow-[0px_0px_12.1px_5px_rgba(0,0,0,0.1)] flex items-center justify-center gap-[8px] px-[8px]">
          <button className="bg-[#d1d0f9] p-[4px] rounded-[8px]">
            <Wand2 className="size-[24px]" strokeWidth={2} opacity={0.85} />
          </button>
          <button className="p-[4px] rounded-[8px]">
            <Search className="size-[24px]" strokeWidth={2} opacity={0.5} />
          </button>
          <button className="p-[4px] rounded-[8px]">
            <Sliders className="size-[24px]" strokeWidth={2} opacity={0.5} />
          </button>
          <button className="p-[4px] rounded-[8px]">
            <Scissors className="size-[24px]" strokeWidth={2} opacity={0.5} />
          </button>
          <button className="p-[4px] rounded-[8px]">
            <Type className="size-[24px]" strokeWidth={2} opacity={0.5} />
          </button>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal 
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        projectName="Mountain biking"
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#eaeaff] flex items-start size-full overflow-hidden">
      <SidebarNavigation />
      <PromptPane />
      <Editor />
    </div>
  );
}
