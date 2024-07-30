import { HomeIcon, Cog8ToothIcon } from '@heroicons/react/24/solid';
import CompassIcon from '@/app/icons/compass';
import Link from 'next/link';

const Sidebar = () => {
	return (
		<div className="w-40 h-screen text-white p-4 border-r">
			<ul>
				<li className="mb-3">
					<Link href="/home" className="flex hover:underline">
						<HomeIcon className="size-5 mx-2" />
						Home
					</Link>
				</li>
				<li className="mb-3">
					<Link href="/explore" className="flex hover:underline">
						<CompassIcon className="size-5 mx-2" />
						Explore
					</Link>
				</li>
				<li className="mb-3">
					<Link href="/settings" className="flex hover:underline">
						<Cog8ToothIcon className="size-5 mx-2" />
						Settings
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
