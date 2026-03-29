import { Home, Film, BookOpen, Folder, Settings, Upload } from 'lucide-react'
import { SidebarNavigation } from './AstraLibraryKit/components/sidebar_navigation'
import { SidebarButton } from './AstraLibraryKit/components/sidebar_button'
import { SearchComponent } from './AstraLibraryKit/components/search_component'
import { Button } from './AstraLibraryKit/components/button'
import { ItemCardFeatured } from './AstraLibraryKit/components/item_card_featured'
import { ItemCard } from './AstraLibraryKit/components/item_card'
import { Avatar } from './AstraLibraryKit/components/avatar'

const notifications = [
  { id: 1, user: 'Marcus Rivera', project: 'Feature Video 02', action: 'New comment from', time: '1 day ago', avatar: 'https://i.pravatar.cc/80?u=alex' },
  { id: 2, user: 'Sarah Chen', project: 'Brand Intro Sequence', action: 'Shared a new version of', time: '2 days ago', avatar: 'https://i.pravatar.cc/80?u=sarah' },
  { id: 3, user: 'Alex Johnson', project: 'Q1 Campaign Recap', action: 'Requested review on', time: '3 days ago', avatar: 'https://i.pravatar.cc/80?u=marcus' },
]

const recentlyViewed = [
  { title: 'Brand Intro Sequence', updated: 'Edited 2m ago', spec: '4K', duration: '0:02:15', thumb: 'https://picsum.photos/seed/brand/610/340' },
  { title: 'Q1 Campaign Recap', updated: 'Edited 1h ago', spec: '1080p', duration: '0:03:42', thumb: 'https://picsum.photos/seed/q1camp/610/340' },
  { title: 'Product Demo v3', updated: 'Edited 3h ago', spec: '4K', duration: '0:01:08', thumb: 'https://picsum.photos/seed/demo3/610/340' },
  { title: 'Social Reel — Summer', updated: 'Edited yesterday', spec: '1080p', duration: '0:00:30', thumb: 'https://picsum.photos/seed/summer/610/340' },
]

const latestProjects = [
  { title: 'Onboarding Walkthrough', updated: 'Created 1d ago', spec: '4K', duration: '0:04:20', thumb: 'https://picsum.photos/seed/onboard/610/340' },
  { title: 'Investor Pitch Clip', updated: 'Created 2d ago', spec: '1080p', duration: '0:01:55', thumb: 'https://picsum.photos/seed/pitch/610/340' },
  { title: 'Team Retro Highlights', updated: 'Created 3d ago', spec: '720p', duration: '0:06:10', thumb: 'https://picsum.photos/seed/retro/610/340' },
  { title: 'Event Teaser — Fall', updated: 'Created 5d ago', spec: '4K', duration: '0:00:45', thumb: 'https://picsum.photos/seed/fall/610/340' },
]

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-brand-tertiary">
      {/* Sidebar */}
      <SidebarNavigation
        footer={
          <>
            <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
            <Avatar type="image" size="small" shape="circle" src="https://i.pravatar.cc/80?u=jamie" />
          </>
        }
      >
        <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
        <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} />
        <SidebarButton icon={<BookOpen className="size-full" strokeWidth={1.5} />} />
        <SidebarButton icon={<Folder className="size-full" strokeWidth={1.5} />} />
      </SidebarNavigation>

      {/* Content Panel */}
      <div className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto min-w-0">
        {/* Header */}
        <div className="flex items-center justify-between h-10 shrink-0">
          <h1 className="text-title text-text-primary">Welcome back, Jamie</h1>
          <div className="flex items-center gap-2">
            <SearchComponent placeholder="Search " />
            <Button variant="primary" size="medium" iconStart={<Upload size={16} />}>
              Upload
            </Button>
          </div>
        </div>

        {/* Featured Row — grid so the featured card's aspect ratio defines row height,
             activity card is constrained to that height and scrolls internally */}
        <div className="grid grid-cols-[7fr_3fr] gap-6 shrink-0">
          <ItemCardFeatured
            variant="overlay"
            title="Brand Intro Sequence"
            updated="Edited 2m ago"
            spec="4K"
            duration="0:02:15"
            thumbnail={<img src="https://picsum.photos/seed/cinematic8/1200/670" alt="" className="w-full h-full object-cover" />}
          />
          {/* Recent Activity Card */}
          <div className="bg-surface-bg border border-border-primary rounded-2xl p-6 flex flex-col gap-6 overflow-hidden min-h-0">
            <div className="flex items-center justify-between shrink-0">
              <span className="text-label text-text-secondary">Recent Activity</span>
              <button className="border border-brand-primary rounded-full px-2 py-1 text-[12px] text-brand-primary cursor-pointer hover:bg-brand-tertiary transition-colors">
                View all
              </button>
            </div>
            <div className="flex flex-col gap-4 overflow-y-auto min-h-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {notifications.map((n, i) => (
                <div key={n.id}>
                  <div className="flex items-start gap-3">
                    <Avatar type="image" size="large" shape="circle" src={n.avatar} className="shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] text-text-primary leading-[1.4] line-clamp-2">
                        {n.action} <span className="font-semibold">{n.user}</span> on the project{' '}
                        <span className="font-semibold">{n.project}</span>
                      </p>
                      <p className="text-[12px] text-text-secondary opacity-50 leading-[1.4]">{n.time}</p>
                    </div>
                  </div>
                  {i < notifications.length - 1 && (
                    <div className="h-px bg-border-secondary mt-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="flex flex-col gap-4 shrink-0">
          <p className="text-label text-text-primary">Recently Viewed</p>
          <div className="flex gap-6">
            {recentlyViewed.map((item) => (
              <ItemCard key={item.title} title={item.title} updated={item.updated} spec={item.spec} duration={item.duration} thumbnail={<img src={item.thumb} alt="" className="w-full h-full object-cover" />} className="flex-1 min-w-0" />
            ))}
          </div>
        </div>

        {/* Latest Projects */}
        <div className="flex flex-col gap-4 shrink-0">
          <p className="text-label text-text-primary">Latest Projects</p>
          <div className="flex gap-6">
            {latestProjects.map((item) => (
              <ItemCard key={item.title} title={item.title} updated={item.updated} spec={item.spec} duration={item.duration} thumbnail={<img src={item.thumb} alt="" className="w-full h-full object-cover" />} className="flex-1 min-w-0" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
