import Image from 'next/image';

const Icon = () => {
	return (
		<div className="absolute left-4 flex items-center space-x-4">
			<Image src="/reddit.svg" alt="Reddit Logo" width={36} height={36} />
			<h1 className="text-2xl font-bold">Reddit</h1>
		</div>
	);
};

export default Icon;
