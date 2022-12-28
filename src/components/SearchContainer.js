import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSearchAdsContext } from '../context/context';

const SearchContainer = () => {
	const { setSearchValue } = useSearchAdsContext();
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const handleChange = (e) => {
		setError(false);
		setValue(e.target.value);
	};
	const handleClick = (e) => {
		e.preventDefault();
		if (!value) {
			return setError(true);
		}
		setSearchValue(value);
		setValue('');
	};
	return (
		<>
			<Form className="d-flex justify-content-center my-2 ">
				<Form.Group className="mb-3 d-flex ">
					<Form.Label className="text-nowrap mt-2 mx-2">Search Ads</Form.Label>
					<Form.Control
						type="text"
						placeholder="Search Ads"
						onChange={handleChange}
						value={value}
					/>
					<Button
						variant="secondary"
						type="click"
						className="mx-2"
						onClick={handleClick}
					>
						Submit
					</Button>
				</Form.Group>
			</Form>
			{error && <p className="text-danger">Please type your search value</p>}
		</>
	);
};

export default SearchContainer;
