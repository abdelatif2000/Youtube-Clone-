import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeletonVideo = () => {
    return (
        <div className='col-6 col-md-4 col-lg-3 mb-2'>
                <Skeleton height={180} />


                        <Skeleton
                            style={{ margin: '0.5rem' }}
                            circle
                            height={40}
                            width={40}
                            inline
                        />

                            <Skeleton height={20} width='75%'   />
        </div>
    )
}
export default SkeletonVideo