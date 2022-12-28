import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react';

const Context = React.createContext();
export const ContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const fetchData = useCallback(async () => {
		try {
			const response = await axios(
				`http://localhost:5000/api/v1?search=${searchValue}`
			);
			console.log(response.data.data);
			setData([...response.data.data]);
		} catch (error) {
			console.log(error);
		}
	}, [searchValue]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<Context.Provider value={{ data, setSearchValue, searchValue }}>
			{children}
		</Context.Provider>
	);
};

export const useSearchAdsContext = () => {
	return useContext(Context);
};
