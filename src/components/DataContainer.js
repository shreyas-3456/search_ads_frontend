import React from 'react';
import Card from 'react-bootstrap/Card';
import { useSearchAdsContext } from '../context/context';

const DataContainer = () => {
	const { searchValue, data } = useSearchAdsContext();
	if (searchValue && data.length === 0) {
		return <h3 className="text-danger">No ads found for "{searchValue}"</h3>;
	}
	return (
		<div className="container data-container">
			<div className="row">
				{data.map((item) => {
					return (
						<Card
							key={item._id}
							className="col-md-4 col-lg-3 col-sm-12  p-3 m-2"
						>
							<Card.Img variant="top" src={item.imageUrl} />
							<Card.Body>
								<Card.Title> {item.company.name}</Card.Title>
								{item.headline && <h6>{item.headline}</h6>}
								<Card.Text className="my-5">{item.primaryText}</Card.Text>
								{item.description && <p className="my-5">{item.description}</p>}
								<Card.Link
									href={`https:www.${item.company.url}`}
									className="btn btn-secondary button"
									target="_blank"
								>
									{item.cta}
								</Card.Link>
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default DataContainer;
