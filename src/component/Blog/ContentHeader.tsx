import React from 'react';
import { useParams } from 'react-router-dom';

const ContentHeader = () => {
    const { title } = useParams();

    return (
        <div className='flex flex-wrap gap-2 p-2 items-center border-b w-full overflow-hidden border-gray-300'>
            <h1 className='text-2xl font-bold break-words max-w-full overflow-hidden'>
                {title}
            </h1>
        </div>
    );
};

export default ContentHeader;
