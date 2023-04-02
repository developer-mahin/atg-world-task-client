import React from 'react';

const ActivityPostCard = ({ post }) => {

    const { image, description, userName, date, _id } = post;

    return (
        <div className='my-lg-4 my-3 d-flex gap-4 align-items-center'>
            <div className=''>
                <div className=''>
                    <small className='fw-medium'>{userName} Posted on this ({date.slice(0, 10)})</small>
                </div>
                <div className='d-md-block d-none'>
                    <img src={image} className='object-fit-cover' width={200} height={130} alt="" />
                </div>
                <div className='d-md-none d-block'>
                    <img src={image} className='object-fit-cover' width={200} height={130} alt="" />
                </div>
            </div>
            <div>
                {
                    description.length > 200
                        ?
                        <span>{description && description.slice(0, 250) + "..."}</span>
                        :
                        <span>{description}</span>
                }
                {
                    description.length > 200 && <span className="ms-1 text-decoration-underline cursor-pointer text-base fw-medium">See More</span>
                }
            </div>
        </div>
    );
};

export default ActivityPostCard;