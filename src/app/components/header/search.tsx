const SearchBar = () => {
	return (
		<div className="flex-grow flex justify-center mx-4 ">
			<input
				type="text"
				placeholder="Search"
				className="flex w-96 px-4 py-2 border border-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>
	);
};

export default SearchBar;
